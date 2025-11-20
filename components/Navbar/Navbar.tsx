"use client";

import Link from "next/link";
import { UserIcon, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { data: session } = useSession();

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const getAvatarFallback = (name?: string | null) => {
    if (!name) return <UserIcon />;
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials;
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
              {session ? (
                <>
                  <Avatar className="mx-2">
                    <AvatarImage src={session.user?.image ?? ""} />
                    <AvatarFallback>
                      {getAvatarFallback(session.user?.name)}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="ghost" onClick={() => signOut()}>
                    Logout
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/training">My Training</Link>
                  </Button>
                </>
              ) : (
                <Button asChild>
                  <Link href="/login">Login</Link>
                </Button>
              )}
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
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="mx-2">
                      <AvatarImage src={session.user?.image ?? ""} />
                      <AvatarFallback>
                        {getAvatarFallback(session.user?.name)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                      Logout
                    </DropdownMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href="/training">My Training</Link>
                    </NavigationMenuLink>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/login">Login</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}
