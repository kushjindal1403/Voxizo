import Sidebar from "@/components/app/SideBar/SideBar";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex max-w-5xl items-start gap-3 px-4 md:gap-4">
        <Sidebar />
        <div className="flex min-h-dvh w-full py-4">
          <div className="flex w-full flex-col justify-between rounded-2xl bg-sf-con-lwest p-4">
            <main className="w-full">{children}</main>
            <footer></footer>
          </div>
        </div>
      </div>
    </>
  );
}
