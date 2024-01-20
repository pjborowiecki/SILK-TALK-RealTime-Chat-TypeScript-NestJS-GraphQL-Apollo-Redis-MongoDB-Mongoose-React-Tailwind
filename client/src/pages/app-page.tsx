import { Button } from "@/components/ui/button"

export function AppPage(): JSX.Element {
  return (
    <div className="flex h-screen">
      <div className="flex w-60 flex-col justify-between border-r bg-tertiary p-5">
        <div>
          <h2>contacts</h2>
        </div>
        <Button>Sign Out</Button>
      </div>
      <main className="flex flex-1 p-5">
        <div>messages</div>
      </main>
      <div className="w-60 border-l bg-tertiary p-5">options</div>
    </div>
  )
}
