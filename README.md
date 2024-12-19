This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

create your database url as it appears in .env.example

migrate the prisma schema to your database:

```bash
npx prisma migrate dev -name namedb
```

generate AUTH_SECRET

```bash
npx auth secret
```

create oauth app for github provider
Open [https://docs.github.com/es/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app]

create application in uploadthing to upload files
Open [https://uploadthing.com/]

check the .env.example and copy from your application
created in uploadthing into your .env or .env.local:
--UPLOADTHING_TOKEN
--UPLOADTHING_SECRET
--UPLOADTHING_APP_ID

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
