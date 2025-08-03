import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyDWJ3bqM3K_8XFO1il7x4qoMrfI4fce9AA"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const input = formData.get("input") as string
    const model = formData.get("model") as string
    const conversationHistory = formData.get("conversationHistory") as string

    // Handle file uploads
    const files = formData.getAll("files") as File[]
    const fileDescriptions = []

    for (const file of files) {
      if (file.size > 0) {
        const fileType = file.type.split("/")[0]
        fileDescriptions.push(`${fileType} file: ${file.name} (${(file.size / 1024 / 1024).toFixed(1)}MB)`)
      }
    }

    if (!input || !model) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create context-aware optimization prompt
    let optimizationPrompt = `You are an expert prompt engineer. Your task is to transform the user's input into an optimized, structured prompt for ${model}.`

    if (conversationHistory) {
      optimizationPrompt += `\n\nConversation History:\n${conversationHistory}\n\nThis is a follow-up message in an ongoing conversation.`
    }

    if (fileDescriptions.length > 0) {
      optimizationPrompt += `\n\nAttached files: ${fileDescriptions.join(", ")}\nPlease incorporate these files into the prompt optimization.`
    }

    optimizationPrompt += `\n\nUser's input: "${input}"\n\nPlease create an optimized prompt that:\n1. Is clear and specific\n2. Includes proper context and constraints\n3. Specifies the desired output format\n4. Is tailored for ${model}\n5. Follows best practices for prompt engineering\n6. Incorporates any attached files appropriately\n\nReturn the optimized prompt in this format:\n\n**Optimized Prompt:**\n[Your optimized prompt here]\n\n**Context:** [Brief explanation of what this prompt achieves]\n\n**Output Goal:** [What the user should expect as output]`

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: optimizationPrompt,
                },
              ],
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const optimizedPrompt = data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to generate optimized prompt"

    return NextResponse.json({
      optimizedPrompt,
      originalInput: input,
      targetModel: model,
      attachedFiles: fileDescriptions,
      conversationId: Date.now().toString(),
    })
  } catch (error) {
    console.error("Error generating prompt:", error)
    return NextResponse.json({ error: "Failed to generate prompt" }, { status: 500 })
  }
}
