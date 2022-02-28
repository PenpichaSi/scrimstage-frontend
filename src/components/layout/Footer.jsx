import val from "../../assets/images/logo/valorant.png";
import csgo from "../../assets/images/logo/csgo.png";
import lol from "../../assets/images/logo/lol.png";

function Footer() {
	return (
		<div className="footer_container">
			<div className="footer_list">
				<h2 className="footer_header">Game</h2>
				<div className="footer_item">
					<img className="footer_logo mx-2" src={val} alt="valorant logo" />
					<p>Valorant</p>
				</div>
				<div className="footer_item">
					<img className="footer_logo mx-2" src={csgo} alt="csgo logo" />
					<p>CSGO</p>
				</div>
				<div className="footer_item">
					<img className="footer_logo mx-2" src={lol} alt="lol logo" />
					<p>League of Legends</p>
				</div>
			</div>
			<div className="footer_list">
				<h2 className="footer_header">Privacy</h2>
				<div className="footer_item">
					<i className="fa-solid fa-check mx-2" />
					<p>Terms &amp; Conditions</p>
				</div>
				<div className="footer_item">
					<i className="fa-solid fa-bullhorn mx-2" />
					<p>Privacy Policies</p>
				</div>
				<div className="footer_item">
					<i className="fa-solid fa-cookie mx-2" />
					<p>Cookies Policies</p>
				</div>
			</div>
			<div className="footer_list">
				<h2 className="footer_header">Contact</h2>
				<div className="footer_item">
					<i className="fa-brands fa-facebook-square mx-2" />
					<p>Facebook</p>
				</div>
				<div className="footer_item">
					<i className="fa-brands fa-instagram mx-2" />
					<p>Instagram</p>
				</div>
				<div className="footer_item">
					<i className="fa-solid fa-envelope mx-2" />
					<p>email</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
