/**
 * Heading for pages
 */

/**
 * made for /flashcard, /quiz, and /refer
 */

interface PageHeadingProps {
  title: string;
  description?: string;
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
