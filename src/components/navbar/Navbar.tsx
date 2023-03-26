import React from "react";
import style from "./navbar.module.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	const links = [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Images",
			href: "/slideshow",
		},
	];
	return (
		<>
			<div className={style.navbar}>
				<div className={style.navbarItems}>
					<h1>Next 13 demo</h1>
					<div className={style.navbarLinkSection}>
						{links.map((link, index) => (
							<NavbarItem key={index} text={link.text} href={link.href} />
						))}
					</div>
				</div>
			</div>
			<div className={style.navbarSpacer}></div>
		</>
	);
};

export default Navbar;
