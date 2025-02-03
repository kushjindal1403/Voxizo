"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
export default function Appearance() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {/* Content */}
      <Button
        onClick={() => setTheme("dark")}
        variant={theme === "dark" ? "default" : "outline"}
      >
        Dark
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant={theme === "light" ? "default" : "outline"}
      >
        Light
      </Button>
    </>
  );
}
