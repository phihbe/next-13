"use client";
import React from "react";
import style from "./image-carusel.module.css";
import Image from "next/image";

const ImageCarusel = () => {
	const images = [
		<Image
			key={0}
			className={style.caruselImage}
			alt="Härjedalen fjällen"
			src={"/fettjeafallet.jpg"}
			width={321.5}
			height={237}
		/>,
		<Image
			key={1}
			className={style.caruselImage}
			alt="Oxsjön"
			src={"/oxsjon.jpg"}
			width={321.5}
			height={237}
		/>,
		<Image
			key={2}
			className={style.caruselImage}
			alt="Ekorre"
			src={"/ekorre.jpg"}
			width={321.5}
			height={237}
		/>,
	];
	const [currentImage, setCurrentImage] = React.useState(images[0]);
	const currentImageIndex = parseInt(currentImage.key as string);
	const nextImageIndex =
		currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
	const previusImageIndex =
		currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
	return (
		<div className={style.carusel}>
			{currentImage}
			<button
				onClick={() => {
					setCurrentImage(images[nextImageIndex]);
				}}
			>
				Next
			</button>
			<button
				onClick={() => {
					setCurrentImage(images[previusImageIndex]);
				}}
			>
				Previous
			</button>
		</div>
	);
};

export default ImageCarusel;
