import Wrapper from "@/components/app/common/Wrapper";
import FlashcardPage from "../flashcards/page";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <main>
          {/* <div className="text-xl capitalize">Good {getTimeOfDay()},</div> */}
          <div className="text-3xl font-semibold">Good Morning</div>
          <div className="bg-card h-16 rounded-xl"></div>
        </main>
      </Wrapper>
    </>
  );
}
