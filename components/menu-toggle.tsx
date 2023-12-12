"use client";

import * as React from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function MenuToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignJustify className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Link href="/">Beranda</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/certificates">Certificates</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/projects">Projects</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
