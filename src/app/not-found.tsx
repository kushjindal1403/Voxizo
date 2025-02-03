// app/flashcard/[subject]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>We couldn't find the page you're looking for.</p>
      <Link href="/flashcard">Go back to Flashcards</Link>
    </div>
  );
}
