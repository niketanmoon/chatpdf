# Chat PDF

- Create next js app
  `npx create-next-app@latest`

- CD to the project and run `npm run dev`

## Clerk Authentication Setup

- Go to go.clerk.com and dashboard and then click create an application
- Name of the application and select what you wanna add to signin
- install clerk
  `npm install @clerk/nextjs`
- create .env.local in root
- Add next clerk public key and secret key
- Create new file middleware.ts in src/
- Add clerkMiddleware
- add protected route using createRouteMatcher: https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page
- Add Clerk Provider to use this middleware in your layout.tsx just above the html tag

## Shadcn setup

- Install using `npx shadcn@latest init`
- Add button component: `npx shadcn@latest add button`

## Continue to building app

- remove everything on page.tsx except div with classname as empty
- Start building the home screen by modifying page.tsx
- Added scrolling on page.tsx and added min height screen and height screen to layout.tsx
- Add image domain to next config
- Added constants file to utils folder
- Built the landing page

### Creating Dashboard page

- added dashboard routing
- Added page.tsx
- Added layout.tsx
- Added clerk loaded inside layout so that the whole layout has user authenticated
