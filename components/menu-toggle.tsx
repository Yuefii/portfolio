"use client";

import * as React from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "@/app/components/Navbar";

export function MenuToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignJustify className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-full dark:bg-slate-950 h-[300px]"
      >
        <Navbar />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
