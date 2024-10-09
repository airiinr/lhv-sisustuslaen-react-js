import PropTypes from "prop-types";

const Link = ({ content, variant, href, onClick }) => {
	return (
		<div className={`linkContainer ${variant}`}>
			<a
				href={href}
				onClick={onClick ? () => onClick() : null}>
				<div className={`linkWithIcon ${variant}`}>
					<p className='linkContent'>{content}</p>
					<img
						className={`${variant}Icon`}
						src={`svg/${variant}Icon.svg`}
					/>
				</div>
			</a>
		</div>
	);
};

Link.propTypes = {
	content: PropTypes.string,
	variant: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

export default Link;
