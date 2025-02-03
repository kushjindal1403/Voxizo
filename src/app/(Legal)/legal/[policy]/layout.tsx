import s from "@/css/markdown.module.css";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={`${s.markdown} mx-auto max-w-3xl px-4 py-10`}>
        {children}
      </main>
    </>
  );
}
