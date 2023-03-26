import React from "react";
import style from "./about.module.css";
const page = () => {
	return (
		<div className={style.about}>
			<h1>About me</h1>
			<p className={style.aboutParagraph}>
				Jag jobbar idag som utvecklare på folksam <br />
				Jag har jobbat som utvecklare i 2 år <br />
				Främst arbetat med react, men även node och java <br />
				På fritiden åker jag skidor och vandrar <br />
			</p>
		</div>
	);
};

export default page;
