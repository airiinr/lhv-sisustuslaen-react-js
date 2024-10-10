import { createContext, useContext } from "react";

export const GlobalContext = createContext({
	products: [],
	setProducts: () => {},
	calculatorRef: null,
});

export const useGlobalContext = () =>
	useContext(GlobalContext);
