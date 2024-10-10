import { useState, useEffect } from "react";

export const useCheckMobileScreen = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener(
			"resize",
			handleWindowSizeChange
		);
		return () => {
			window.removeEventListener(
				"resize",
				handleWindowSizeChange
			);
		};
	}, []);

	return width <= 375;
};

export const scrollToSection = (ref) => {
	ref?.current?.scrollIntoView();
};
