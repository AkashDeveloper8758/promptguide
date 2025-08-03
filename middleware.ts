import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// Only protect specific routes that actually need authentication
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/profile(.*)", "/settings(.*)", "/api/user(.*)"])

export default clerkMiddleware((auth, req) => {
  // Only protect routes that actually need authentication
  if (isProtectedRoute(req)) {
    auth().protect()
  }
  // Let all other routes pass through without authentication
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
