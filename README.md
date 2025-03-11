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

- created placeholder document and created a upload route
- Added navigation using `useRouter` from `next/navigation`
- Added a FileUploader component

### React dropzone setup

- `npm install --save react-dropzone`
- From the installation page, add onDrop callback, isDragActive and getRootProps and getInputProps

### Deploy landing page using vercel

- `npm i -g vercel`
- `vercel login`
- check build before deploying `npm run build`
- deploy to dev `vercel`
- deploy to prod `vercel --prod`

## Continue building the app

### Setting up firebase storage and Firestore

- Create a project
- Later, go to project settings and register web app
- install firebase `npm i firebase`
- Create a cloud firestore and cloud storage in build
- Go to project settings and go to service accounts and generate key
- Download the file and add it to root of the project - rename it to `service_key.json` - Add it to gitignore
- Install firebase admin for server side

- custom hook useUpload
- install uuid `npm i uuid` also do `npm i -D @types/uuid`
- installed daisyui `npm i -D daisyui@latest`
- Upload file to storage
- Save that file to database firestore
- Add route to the dynamic files once we get dynamic url from uploaded file
- Generating embeddings using pinecone embeddings with langchain
- login to pinecone
- install pinecone `npm i @pinecone-database/pinecone`

- Install langchain, community and core openai `npm i langchain @langchain/community @langchain/core @langchain/openai @langchain/pinecone`
- Get the api key from openai and add it to environment variable OPENAI_API_KEY
- Install pdf-parse
- Generate docs using langchain and store the embeddings to pinecone vectorstore
- Create pdfview using react-pdf
- Added buttons to navigate to next and previous page, zoom in and out

- Add input component from shadcn: `npx shadcn@latest add input`
- install react firebase hooks
- created chat and chatMessage component
- Added langchain chat completion function to get the chat message from ai
- Also added some styling to input
- Styled the pricing page
- Added useSubscription custom hook
- Installed stripe `npm i @stripe/stripe-js`

- created stripe webhook endpoint
- Added stripe cli
- Created stripe checkout session
- Added stripe portal
- Added base url for route
- Handled pro and free tier functionalities for deleting the doc and using the chat system.
- Added download icon and delete document functionality

- Listening to stripe on local: `stripe listen --forward-to localhost:3000/webhook`
