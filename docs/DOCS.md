# Neetvaidya Documentation

### Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://shadcn.dev/) integration
- **Database**: [Supabase](https://supabase.com/)
- **Testing**: Jest (unit and integration testing)

## Pages Structure

```plaintext
app/
├── layout.tsx(RootLayout)
├── page.tsx(Landing Page)
├── (App)/
│   ├── (Navbar)/
│   │   ├── layout.tsx             # Navbar added here
│   │   ├── home/
│   │   ├── flashcard/
│   │   ├── notes/
│   │   └── quiz/
│   ├── (Auth)/
│   │   └── sign/                  # page responsible for log in and sign up
│   ├── (Profile)/
│   │   ├── profile/
│   │   └── settings/
│   └── (ReferSystem)
├── (Legal)/
│   └── legal/
│       ├── layout.tsx
│       ├── terms/
│       ├── privacy/
│       ├── cookie/
│       └── refund/
├── (WebHook)/
│   └── hook/
│       └── confirm-payment/
│           └── route.ts
├── (Crons)
└── (API)/
    └── api/
        └── v1/
            └── (Auth)/
                └── auth/
components/
├── legal/
├── app/
└── ui/
```
