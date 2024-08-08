## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Auth - [Auth.js](https://authjs.dev/)
- File Uploading - [Uploadthing](https://uploadthing.com)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

## Pages

| Pages        | Specifications                                                                                        |
| :----------- | :---------------------------------------------------------------------------------------------------- |
| Signup       | Authentication with **NextAuth** supports Social logins and email logins(Enter dummy email for demo). |
| Dashboard    | Cards with recharts graphs for analytics.                                                             |
| Users        | Tanstack tables with user details client side searching, pagination etc                               |
| Users/new    | A User Form with Uploadthing to support file uploading with dropzone.                                 |
| Employee     | Tanstack tables with server side searching, pagination etc).                                          |
| Profile      | Mutistep dynamic forms using react-hook-form and zod for form validation.                             |
| Kanban Board | A Drag n Drop task management board with dnd-kit and zustand to persist state locally.                |
| Not Found    | Not Found Page Added in the root level                                                                |
| -            | -                                                                                                     |

## Getting Started

Follow these steps to clone the repository and start the development server:

- `npm install`
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `npm run dev`

You should now be able to access the application at http://localhost:3000.
