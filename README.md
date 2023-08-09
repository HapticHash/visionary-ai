# Visionary AI

![Visionary AI - Landing screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/landing_screen.png)

![Visionary AI - Dashboard screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/dashboard_screen.png)

![Visionary AI - Image generation screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/image_gen_screen.png)

![Visionary AI - Code generation screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/code_gen_screen.png)

![Visionary AI - Music generation screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/music_gen_screen.png)

![Visionary AI - Conversation screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/conv_screen.png)

![Visionary AI - Video generation screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/video_gen_screen.png)

![Visionary AI - Crisp Chatbot screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/crisp_chat.png)

![Visionary AI - Upgrade plan screen | haptichash](https://raw.githubusercontent.com/HapticHash/visionary-ai/master/public/images/screenshots/upgrade_modal.png)

This application is built using Next.js 13, React, Tailwind, Prisma and Stripe.

## Key Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

## Prerequisites

**Node version 18.x.x**

## Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-ai-saas.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Known issues

The following things are not working in Vercel production due to the current plan's serverless function execution timeout of 10 seconds, and the models take much longer to process the information. However, if you clone the repo, it will work as expected on your localhost.

- Music generation
- Video generation
