import Link from "next/link";
export default function Detail() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </header>
      <h1>Detail Blog</h1>
    </>
  );
}
