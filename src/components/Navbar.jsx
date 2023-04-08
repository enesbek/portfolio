import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Articles</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          Ts
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
