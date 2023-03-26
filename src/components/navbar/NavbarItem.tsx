import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NavbarItem = (link: { text: string; href: string }) => {
	return (
		<Link
			className={style.navbarItem /* router.pathname == "/" && style.active */}
			href={link.href}
		>
			{link.text}
		</Link>
	);
};

export default NavbarItem;
