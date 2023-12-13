import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <p className="text-red-500 font-bold">
      <UserButton/>
    </p>
  );
}
