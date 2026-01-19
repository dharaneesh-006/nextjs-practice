import Link from "next/link";

export default function Home()
{
  return(
    <main className="p-2.5">
      <h1>Home Page</h1>
      <nav className="mt-2">
        <ul>
          <li>
            <Link href="/about" > Go to About</Link>
          </li>
          <li>
            <Link href="/contact" > Go to contact</Link>
          </li>
        </ul>
      </nav>

    </main>
  )
}