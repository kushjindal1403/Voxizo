import Nav from "./Nav";

export default function Sidebar() {
  return (
    <>
      <header className="sticky top-0 h-screen min-w-[5rem] py-4 md:min-w-[15rem]">
        <div className="flex h-full flex-col items-center justify-between rounded-2xl bg-gray-800 p-6">
          <div className="w-full">
            <h1 className="text-center text-2xl font-bold text-white pb-8">Neet Vaidya</h1>

            <Nav />
          </div>
          <button className="mt-8 py-2 px-6 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors">
            Sign in
          </button>
        </div>
      </header>
    </>
  );
}
