"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "next-themes";

import { themes } from "@/molecules/switch-theme";

function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider themes={themes}>{children}</ThemeProvider>;
}

export default Providers;
