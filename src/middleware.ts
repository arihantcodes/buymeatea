import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/faq",
    "/help",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/public/(.*)",
    "/api/generate-qr",
  ],
  // Routes that require authentication but are not protected by profile check
  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return;
    }

    // If the user is logged in and trying to access a protected route, allow them to access it
    if (auth.userId && !auth.isPublicRoute) {
      return;
    }
  },
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
