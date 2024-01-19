import { useTheme } from "@/providers/theme-provider"

import { Button } from "@/components/ui/button"

export const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Button variant="outline" onClick={toggleTheme}>
      Toggle theme to {theme === "light" ? "dark" : "light"}
    </Button>
  )
}
