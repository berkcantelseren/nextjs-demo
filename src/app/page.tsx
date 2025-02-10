import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        className="mr-10 text-2xl text-blue-500 font-bold"
        href="/articles/breaking-news-123?lang=en"
      >
        Read in English
      </Link>
      <Link
        className="mr-10 text-2xl text-blue-500 font-bold"
        href="/articles/breaking-news-123?lang=fr"
      >
        Read in French
      </Link>
      <hr />
      <Link href="/blog">Blog</Link>
      <Link href="/products">Product</Link>
    </>
  );
}
