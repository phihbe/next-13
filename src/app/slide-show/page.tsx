import React from "react";
import style from "./slide-show.module.css";
import Image from "next/image";

const page = () => {
	return (
		<div className={style.slideshow}>
			<h1>Mitt liv i bilder</h1>
			<div className={style.slideshowImageContainer}>
				<Image
					className={style.slideshowImage}
					alt="Härjedalen fjällen"
					src={"/fettjeafallet.jpg"}
					width={321.5}
					height={237}
				/>
				<Image
					className={style.slideshowImage}
					alt="Härjedalen fjällen"
					src={"/fettjeafallet.jpg"}
					width={321.5}
					height={237}
				/>
				<Image
					className={style.slideshowImage}
					alt="Härjedalen fjällen"
					src={"/fettjeafallet.jpg"}
					width={321.5}
					height={237}
				/>
				<Image
					className={style.slideshowImage}
					alt="Härjedalen fjällen"
					src={"/fettjeafallet.jpg"}
					width={321.5}
					height={237}
				/>
			</div>
		</div>
	);
};

export default page;
