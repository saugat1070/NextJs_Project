"use client";
import React from "react";
import { MenuItem, Menu, ProductItem, HoveredLink } from "./ui/navbarMenu";
import { div } from "motion/react-client";
import Link from "next/link";
import { cn } from "@/lib/utils";
const NavBar = ({ className }: { className?: string }) => {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="w-full flex flex-row justify-evenly">
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="home"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4">
              <HoveredLink href="/all-courses">All Courses</HoveredLink>
              <HoveredLink href="/all-courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/all-courses">Advance Composition</HoveredLink>
              <HoveredLink href="#">Song Writing</HoveredLink>
              <HoveredLink href = "#">Music Production</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact-us"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>

        </Link>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
