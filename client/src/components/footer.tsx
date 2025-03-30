import Icon from "@/assets/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="doodle-hr sm:w-[80vw] w-[90vw] my-3" />

      <footer className="mb-5">
        <div className="flex items-center justify-between mb-3 gap-5">
          <Link href={"https://github.com/aayushmaan-54"} target="_blank"><Icon.GitHub className="size-8 sm:size-10 lg:size-14 hover:rotate-12 duration-150 fill-primary" /></Link>
          <Link href={"https://www.linkedin.com/in/aayushmaan54"} target="_blank"><Icon.LinkedIn className="size-8 sm:size-10 lg:size-14 hover:-rotate-12 duration-150" /></Link>
          <Link href={"https://x.com/aayushmaan54"} target="_blank"><Icon.Twitter className="size-8 sm:size-10 lg:size-14 hover:rotate-12 duration-150 fill-primary" /></Link>
          <Link href={"mailto:aayushmaan.soni54@gmail.com"} target="_blank"><Icon.At_Email className="size-8 sm:size-10 lg:size-14 hover:-rotate-12 duration-150" /></Link>
          <Link href={"https://aayushmaan-soni.vercel.app"} target="_blank"><Icon.Globe className="size-8 sm:size-10 lg:size-14 hover:rotate-12 duration-150 fill-primary" /></Link>
        </div>

        <span>Made with ❤️ by Aayushmaan Soni</span>
      </footer>
    </>
  );
}