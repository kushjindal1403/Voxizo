import { PageHeading } from "@/components/app/common/PageHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function FlashcardPage() {
  return (
    <>
      <PageHeading
      
        title="Flashcards"
        description="A better way to learn important NCERT lines."
      />
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Biology Flashcard</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/flashcards/biology" className="w-full">
              <Button className="w-full" variant={"tonal"}>
                View Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="pointer-events-none opacity-60">
          <CardHeader>
            <CardTitle className="text-xl">Physics Flashcard</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" variant={"tonal"}>
              Coming soon
            </Button>
          </CardFooter>
        </Card>
        <Card className="pointer-events-none opacity-60">
          <CardHeader>
            <CardTitle className="text-xl">Chemistry Flashcard</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" variant={"tonal"}>
              Coming soon
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
