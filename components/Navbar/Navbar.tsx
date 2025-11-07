"use client";

import Link from "next/link";
import { UserIcon, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar } from "../ui/avatar";
import { ModeToggle } from "../mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold">
        Jan Coaching
      </Link>
      {isMobile ? (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col justify-center align-middle space-y-4 px-2">
              <Link href="/plans" className="text-lg" onClick={handleLinkClick}>
                PLANS
              </Link>
              <Link href="/blog" className="text-lg" onClick={handleLinkClick}>
                BLOG
              </Link>
              <Link href="/about" className="text-lg" onClick={handleLinkClick}>
                ABOUT
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <ModeToggle />
              <Avatar>
                <UserIcon />
              </Avatar>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/plans">PLANS</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/blog">BLOG</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">ABOUT</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Avatar>
                  <UserIcon />
                </Avatar>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}


