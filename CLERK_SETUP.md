# Clerk Authentication Setup

This project has been migrated from Kinde Auth to Clerk Auth. Follow these steps to complete the setup:

## 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
CLERK_WEBHOOK_SECRET=your_webhook_secret_here

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

## 2. Clerk Dashboard Setup

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Get your API keys from the dashboard
4. Set up your authentication methods (email, social logins, etc.)
5. Configure your webhook endpoint: `https://yourdomain.com/api/webhook/clerk`

## 3. Database Migration

Run the following command to update your database schema:

```bash
npx prisma migrate dev --name replace_kinde_with_clerk
```

## 4. Key Changes Made

### Database Schema
- Changed `kindeId` field to `clerkId` in UserProfile model

### Components Updated
- `src/components/Navbar.tsx` - Updated to use Clerk hooks and components
- `src/components/Prinavbar.tsx` - Updated to use Clerk hooks and components
- `src/components/Home.tsx` - Updated to use Clerk hooks and components

### Pages Updated
- `src/app/welcome/page.tsx` - Updated to use Clerk user data
- `src/app/editprofile/page.tsx` - Updated to use Clerk user data

### API Routes
- Removed `src/app/api/auth/[kindeAuth]/route.ts`
- Updated `src/app/api/createprofile/route.ts` to use `clerkId`
- Added `src/app/api/webhook/clerk/route.ts` for webhook handling

### Middleware
- Added `src/middleware.ts` for route protection

### Layout
- Updated `src/app/layout.tsx` to include ClerkProvider

## 5. User Data Mapping

| Kinde Field | Clerk Field |
|-------------|-------------|
| `user.id` | `user.id` |
| `user.email` | `user.emailAddresses[0].emailAddress` |
| `user.picture` | `user.imageUrl` |
| `user.given_name` | `user.firstName` |
| `user.family_name` | `user.lastName` |

## 6. Testing

1. Start your development server: `npm run dev`
2. Test the sign-up and sign-in flows
3. Verify that user profiles are created correctly
4. Test protected routes

## 7. Troubleshooting

- Make sure all environment variables are set correctly
- Check that the database migration ran successfully
- Verify that Clerk webhooks are configured properly
- Check the browser console for any authentication errors
