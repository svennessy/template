import Image from "next/image"

export default async function App() {

  return (
    <main className="h-dvh flex flex-col items-center justify-center gap-6 text-4xl p-4">
      <div className="h-4/5 w-4/5 max-w-screen-sm border border-zinc-200 flex flex-col items-center gap-2 relative">
        <Image
          className="m-0 rounded-xl"
          src="/images/example.png"
          width={200}
          height={200}
          sizes="300px"
          alt="Example"
          priority={true}
          title="Example"
        />
        <h1 className="font-[AtmaRegular] text-2xl">Example Header</h1>
      </div>
    </main>
  )
}
