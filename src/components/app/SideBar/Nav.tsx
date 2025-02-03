import { Navlink } from "@/constants/Navlink";
import Link from "next/link";

export default function Nav() {
  return (
    <aside className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <ul className="space-y-6">
        {Navlink.map(({ name, path }) => (
          <li key={path + "-navigation"}>
            <Link
              href={path}
              className="flex items-center text-lg font-semibold text-white hover:text-blue-400 transition-colors"
            >
              {/* Add icon if needed */}
              <span className="mr-4"></span>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
