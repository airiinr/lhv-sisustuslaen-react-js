import { useState } from "react";
import { GlobalContext } from "../../hooks/useContext";
import useCheckMobileScreen from "../../utils/utils";
import Banner from "../Banner/Banner";
import Calculator from "../Calculator/Calculator";
import Footer from "../Footer/Footer";

const appContent = { pageTitle: "Sisustuslaen" };

const App = () => {
	const [products, setProducts] = useState([
		{ productName: "", productPrice: 0 },
	]);

	const isMobile = useCheckMobileScreen();

	return (
		<GlobalContext.Provider
			value={{
				products,
				setProducts,
			}}>
			<div className='appContainer'>
				{isMobile ? (
					<h2 className='pageTitle'>
						{appContent.pageTitle}
					</h2>
				) : null}
				<Banner />
				<Calculator />
				<Footer />
			</div>
		</GlobalContext.Provider>
	);
};

export default App;
