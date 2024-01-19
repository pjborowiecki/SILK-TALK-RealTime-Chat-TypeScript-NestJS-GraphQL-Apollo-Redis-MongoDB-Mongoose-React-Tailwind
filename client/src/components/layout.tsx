import * as React from "react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
