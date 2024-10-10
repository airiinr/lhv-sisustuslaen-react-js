import { useCheckMobileScreen } from "../../utils/utils";

const footerContent = {
	titleOne: "LHV",
	titleTwo: "Klienditugi",
	textContent:
		"Kui sul tekib pangateenuse kasutamisel probleeme, saad klienditoe infotelefonilt abi ööpäev ringi. ",
	phoneNumber: "6 800 400",
	emailAddress: "info@lhv.ee",
};

const Footer = () => {
	const isMobile = useCheckMobileScreen();

	return (
		<div className='footerContainer'>
			<div className='support'>
				<img
					className='supportIcon'
					src='./svg/supportIcon.svg'
				/>
				<div className='supportText'>
					<p className='supportTitle'>
						{footerContent.titleOne}
						<span> {footerContent.titleTwo}</span>
					</p>
					{!isMobile ? (
						<p className='supportTextContent'>
							{footerContent.textContent}
						</p>
					) : null}
				</div>
			</div>
			<div className='contact'>
				<div className='contactPhone'>
					<img
						className='callIcon'
						src='./svg/callIcon.svg'
					/>
					<p className='contactPhoneNumber'>
						{footerContent.phoneNumber}
					</p>
				</div>
				<div className='contactEmail'>
					<img
						className='draftsIcon'
						src='./svg/draftsIcon.svg'
					/>
					<a
						className='contactEmailAddress'
						href={`mailto:${footerContent.emailAddress}`}>
						{footerContent.emailAddress}
					</a>
				</div>
			</div>
			{isMobile ? (
				<p className='supportTextContent'>
					{footerContent.textContent}
				</p>
			) : null}
		</div>
	);
};

export default Footer;
