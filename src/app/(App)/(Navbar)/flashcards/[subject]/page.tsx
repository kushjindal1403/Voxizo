import { PageHeading } from "@/components/app/common/PageHeading";
import BackButton from "@/components/common/BackButton";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabaseRoot } from "@/supabase/root";
import Link from "next/link";
import { Subject } from "@/constants/subject";
export const dynamicParams = false; // true | false,
// export const dynamic = "force-static";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

// Define the subjects with their respective database names and display names

// Generate static parameters for pre-rendering
export async function generateStaticParams() {
  return Object.keys(Subject).map((subject) => ({
    subject,
  }));
}

// Component to render the flashcard subject chapter
export default async function FlashcardSubjectChapter({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;

  const subjectData = Subject[subject as keyof typeof Subject];

  let { data: chapters } = await supabaseRoot
    .from("chapters")
    .select("id,chapter_name,question_count,class_level")
    .order("id", { ascending: true })
    .eq("subject", subjectData.dbName);
  if (!chapters) {
    throw new Error("No chapters found");
  }
  const groupedChapters = Map.groupBy(
    chapters,
    (chapter) => chapter.class_level,
  );

  const class11Chapters = groupedChapters.get(11);
  const class12Chapters = groupedChapters.get(12);
  return (
    <>
      <BackButton href="/flashcards">All Flashcards</BackButton>
      <PageHeading title={`${subjectData.name} Flashcards`} />
      <Tabs defaultValue="11">
        <TabsList className="mb-6">
          <TabsTrigger value="11">Class 11th</TabsTrigger>
          <TabsTrigger value="12">Class 12th</TabsTrigger>
        </TabsList>
        <ChapterContent value="11">
          {class11Chapters?.map((chapter, index) => (
            <ChapterCards
              key={chapter.id}
              index={index}
              subject={subject}
              chapter={chapter.id}
              href={`/flashcard`}
              chapterName={chapter.chapter_name}
            />
          ))}
        </ChapterContent>
        <ChapterContent value="12">
          {class12Chapters?.map((chapter, index) => (
            <ChapterCards
              key={chapter.id}
              index={index}
              subject={subject}
              chapter={chapter.id}
              href={`/flashcard`}
              chapterName={chapter.chapter_name}
            />
          ))}
        </ChapterContent>
      </Tabs>
    </>
  );
}

function ChapterContent({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <TabsContent value={value} className="grid grid-cols-2 gap-3">
      {children}
    </TabsContent>
  );
}
function ChapterCards({
  chapterName,
  index,
  href,
  subject,
  chapter,
}: {
  chapterName: string;
  index: number;
  href: string;
  subject: string;
  chapter: number;
}) {
  return (
    <Link
      href={{
        pathname: href,
        query: { subject, chapter },
      }}
      className="rounded-xl bg-sf-con-lw p-4 font-medium shadow-none shadow-black/15 transition-[box-shadow_background] hover:bg-sf-con-hg hover:shadow-md"
    >
      {index + 1}. {chapterName}
    </Link>
  );
}
