import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <a href="#" className="group ...">
        <div>
          <svg
            className="stroke-sky-500 group-hover:stroke-white ..."
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <h3 className="text-red-300 group-hover:text-white ...">
            New project
          </h3>
        </div>
        <p className="text-red-300 group-hover:text-white ...">
          Create a new project from a variety of starting templates.
        </p>
      </a>
    </div>
  );
}
