import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { ThemeSwitch } from "@/components/theme-switch"

export function Header(): JSX.Element {
  return (
    <div className="flex h-16 items-center justify-between gap-4 border-b bg-tertiary px-5">
      <div>
        <Link
          to="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "flex items-center gap-2"
          )}
        >
          <Icons.logo className="size-7 font-bold" />
          <span className="text-lg tracking-wide">SilkTalk</span>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2">
        <ThemeSwitch />
        <Link to="/signin" className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </div>
  )
}
