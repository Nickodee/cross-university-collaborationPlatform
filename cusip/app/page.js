import Link from "next/link"
export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">CUSIP</h1>
        <div className="flex gap-10 items-center">
          <Link href="/post">POST</Link>
          <Link href="joincommunity"><button className="border-2 border-black p-2 hover:bg-[#2dabb1] hover:border-none hover:text-white">Join Our Community</button></Link>
        </div>
      </div>
      <div>
        <h1 className="text-4xl mt-28">We Connect University <br/> Students & Allow Project Collaboration</h1>
        <p className="mt-3">Join a community of like-minded students,connect & collaborate in projects</p>
        <button className=" mt-3 border-2 border-black p-2 hover:bg-[#2dabb1] hover:border-none hover:text-white">Join Our Community</button>
      </div>
      </div>
      <div>
        <h1>Hi</h1>
      </div>
    </main>
  )
}
