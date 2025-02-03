import { redirect } from "next/navigation";

import { Subject } from "@/constants/subject";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "@/components/app/common/Icons";
import { cn } from "@/lib/utils";

export default function FlashcardsPage({
  searchParams,
}: {
  searchParams: { subject?: string; chapter?: string; page?: string };
}) {
  const { subject, chapter, page } = searchParams;

  const subjectDetails = Subject[subject as keyof typeof Subject];

  if (!subjectDetails) {
    redirect("/flashcards");
    return null; 
  }
  
  const chapterNumber = Number(chapter);
  if (isNaN(chapterNumber)) {
    redirect(`/flashcards/${subject}`);
    return null;
  }
  const pageNumber = Number(page) || 1;

  return (
    <div className="mx-auto grid min-h-dvh max-w-4xl snap-y grid-cols-2 gap-4">
      <div className="sticky top-1/2 h-max -translate-y-1/2">
        <h1 className="text-3xl font-bold">Living Organism</h1>
        <p>Biology</p>
        <p>Total Questions: 100, Page: {pageNumber}</p>

        <div>
          <div className="flex flex-wrap gap-2">
            {/* Example buttons for pagination */}
            <PageButton active={true}>1 - 10</PageButton>
            <PageButton>11 - 20</PageButton>
            <PageButton>21 - 30</PageButton>
            <PageButton>31 - 40</PageButton>
          </div>
          <div className="flex gap-4 mt-4">
            <Button variant={"text"} size={"text"}>
              <ArrowLeft02Icon /> Previous
            </Button>
            <Button variant={"text"} size={"text"}>
              Next <ArrowRight02Icon />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 py-10">
        {[...Array(10)].map((_, index) => (
          <Flashcard key={index} question={`Sample question ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

interface FlashcardProps {
  question: string;
}

function Flashcard({ question }: FlashcardProps) {
  return (
    <div className="flex h-max w-full flex-col justify-between gap-8 rounded-2xl bg-gray-100 p-5 text-2xl shadow-lg">
      <div>
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-gray-300 px-2 py-1 text-xs text-gray-700">
            1 of 10
          </span>
          <div className="flex gap-2">
            <Button size={"icon"} variant={"outline"}>
              <ThumbsUpIcon />
            </Button>
            <Button size={"icon"} variant={"outline"}>
              <ThumbsDownIcon />
            </Button>
          </div>
        </div>
        <h2 className="mt-4">{question}</h2>
        <p className="mt-6 text-base">
          <em className="block text-sm font-medium">Answer</em>
          <span className={cn("block")}>A simple answer</span>
        </p>
      </div>
      <Button variant={"tonal"} className="text-blue-600">
        Show Answer
      </Button>
    </div>
  );
}

function PageButton({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Button
      className={cn(
        "px-4 py-2 rounded-lg transition-all",
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      )}
      size={"sm"}
    >
      {children}
    </Button>
  );
}
