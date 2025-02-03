import { LegalPagePath } from "@/utils/constants/legal";
import Markdown from "markdown-to-jsx";
export const dynamicParams = false;
export async function generateStaticParams() {
  return Object.keys(LegalPagePath).map((policy) => ({ policy }));
}

async function getData(fileName: string): Promise<string> {
  const url = `https://raw.githubusercontent.com/Harshkt214/neetvaidya-legals/main/policy/${fileName}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_KEY_FOR_LEGAL_PAGE!}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch file: ${response.status} ${response.statusText}`,
      );
    }

    const markdownContent = await response.text();
    return markdownContent;
  } catch (error) {
    console.error("Error fetching markdown content:", error);
    throw error;
  }
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ policy: string }>;
}) {
  const { policy } = await params;
  const fileName = LegalPagePath[policy];
  const markdownContent = await getData(fileName);

  return (
    <>
      <Markdown>{markdownContent}</Markdown>
    </>
  );
}
