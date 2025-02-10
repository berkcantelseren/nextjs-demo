"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order.");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        className="border bg-white text-black text-bold text-2xl p-5 ml-40"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
}
