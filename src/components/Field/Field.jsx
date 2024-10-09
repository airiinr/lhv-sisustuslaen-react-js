import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../hooks/useContext";

const errorMessage = "Palun sisestage number";

const Field = ({ product, index }) => {
	const [productData, setProductData] = useState({});
	const [showError, setShowError] = useState(false);
	const { products, setProducts } = useGlobalContext();

	const handleProductInput = (event) => {
		const name = event.target.name;
		let value;
		if (name === "productPrice") {
			value = event.target.value;

			// checks if input value is a number
			const regex =
				/^(?=.*[0-9])([0-9]+(,[0-9]*)?|[0-9]+(\.[0-9]*)?)$/;
			const isNumericalValue = regex.test(value);
			setShowError(!isNumericalValue);
			if (value === "") {
				setShowError(false);
			}

			value = value.replace(/,/g, ".");
			value = parseFloat(value) || 0;
		} else {
			value = event.target.value;
		}
		setProductData({ ...productData, [name]: value });
	};

	// inserts product data to component state
	useEffect(() => {
		setProductData(product);
	}, []);

	// updates products list
	useEffect(() => {
		const productsCopy = [...products];
		productsCopy[index] = productData;
		setProducts(productsCopy);
	}, [productData]);

	return (
		<div className='inputFields'>
			<input
				name='productName'
				className='productName'
				type='text'
				onChange={handleProductInput}
			/>
			<label className='priceLabel'>
				<input
					name='productPrice'
					className='productPrice'
					type='text'
					onChange={handleProductInput}
				/>
				&euro;
			</label>
			<span
				className={`tooltiptext ${
					showError ? "showError" : ""
				}`}>
				{errorMessage}
			</span>
		</div>
	);
};

Field.propTypes = {
	product: PropTypes.object,
	index: PropTypes.number,
};

export default Field;
