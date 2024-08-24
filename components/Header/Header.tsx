import User from "../User";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  return (
    <div className={classes.header}>
      <Link href="/" passHref>
        <Image
          src="/favicon.jpg"
          alt="MyApp"
          className=""
          width={25} // Desired width of the image
          height={25}
        />
      </Link>
      <User />
    </div>
  );
}
