import User from "../User";
import classes from "./Header.module.css";
import Link from "next/link";

export default async function Header() {
  return (
    <div className={classes.header}>
      <Link href="/" passHref>
        <h3 className="cursor-pointer">My App</h3>
      </Link>
      <User />
    </div>
  );
}
