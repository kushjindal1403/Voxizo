import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft02Icon } from "../app/common/Icons";
export default function BackButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="mb-6 block w-max">
      <Button className="h-max p-0" variant={"link"}>
        <ArrowLeft02Icon /> {children}
      </Button>
    </Link>
  );
}
