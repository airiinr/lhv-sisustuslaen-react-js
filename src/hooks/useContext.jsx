import { createContext, useContext } from "react";

export const GlobalContext = createContext({
	products: [],
	setProducts: () => {},
});

export const useGlobalContext = () =>
	useContext(GlobalContext);
