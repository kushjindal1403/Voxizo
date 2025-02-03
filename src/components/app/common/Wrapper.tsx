/*
 * Component that wraps the main navigation bar components,
 * such as /flashcard, /home, /quiz, and /refer.
 */

import { cn } from "@/lib/utils";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn(
          "mx-auto w-full px-4 pt-6 md:max-w-2xl lg:max-w-4xl",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
