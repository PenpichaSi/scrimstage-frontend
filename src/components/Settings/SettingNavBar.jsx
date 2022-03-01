import { useNavigate } from "react-router-dom";

export default function SettingNavBar() {
	const navigate = useNavigate();
	return (
		<div className="setting_navbar">
			<div className="ms-5">
				<button
					className="btn btn-secondary mx-2 setting_navbar_button setting_navbar_active"
					onClick={() => navigate("/settings")}
				>
					PlayStage Account
				</button>
				<button
					className="btn btn-secondary mx-2 setting_navbar_button"
					onClick={() => navigate("/settings/game-account")}
				>
					Game Account
				</button>
			</div>
		</div>
	);
}
