import { Outlet } from "react-router-dom";
import SettingNavBar from "../components/Settings/SettingNavBar";
function Settings() {
	return (
		<div className="bg-secondary">
			<SettingNavBar />
			<Outlet />
		</div>
	);
}

export default Settings;
