import Image from "next/image";
import logo from "./icon.svg";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert rotate-12"
          src={logo}
          alt="BoilerLabs logo"
          width={180}
          height={38}
          priority
        />

        <p>
          BoilerLabs is your go-to source for reusable, high-quality boilerplates and code templates, helping developers build faster and more efficiently.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/boilerlabs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BoilerLabs
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/orgs/boilerlabs/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositories
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>&copy; {new Date().getFullYear()}{" "} All rights reserved.</p>
      </footer>
    </div>
  );
}
