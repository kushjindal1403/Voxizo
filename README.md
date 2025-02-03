# Neetvaidya (formerly Mediquizs)

## Tech Stack

-  **Frontend**: [Next.js 15](https://nextjs.org/) (TypeScript)
-  **Styling**: [TailwindCSS](https://tailwindcss.com/) integrated with shadcn/ui
-  **Database**: [Supabase](https://supabase.com/)

## Installation Guide

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

We recommend using [Bun](https://bun.sh/) for package management. Install it if you haven’t already.  
Then, install the project dependencies:

```bash
bun install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project and configure the necessary variables as per the company’s documentation. Example variables may include:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## **Project Structure**

-  **`/pages`**: Routes for the application.
-  **`/components`**: Shared and reusable UI components.
-  **`/styles`**: Global TailwindCSS configurations.
-  **`/utils`**: Helper functions and services.
