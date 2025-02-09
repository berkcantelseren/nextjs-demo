import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Products</h1>

      <h2 className="font-bold text-4xl ml-[800px] text-nowrap mt-20 ">
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2 className="font-bold text-4xl ml-[800px] text-nowrap mt-20">
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2 className="font-bold text-4xl ml-[800px] text-nowrap mt-20 mb-20">
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h2>

      <Link href="/" className="font-bold text-4xl ml-[800px] text-nowrap ">
        Return Home
      </Link>
    </>
  );
}
