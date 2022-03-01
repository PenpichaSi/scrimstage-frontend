import { InputLabel, Select } from "@mui/material";

export default function SideBar() {
	return (
		<div className="sidebar_container">
			<div>
				<InputLabel id="team-select-label">Team</InputLabel>
				<Select labelId="team-select-label" id="team-select"></Select>
			</div>
			<div></div>
		</div>
	);
}
