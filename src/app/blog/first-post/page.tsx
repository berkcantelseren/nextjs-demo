import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "First Post",
  },
};

export default function FirstPost() {
  return <h1>First blog post</h1>;
}
