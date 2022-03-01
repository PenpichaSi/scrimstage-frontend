import TeamMemberItem from "./TeamMemberItem";

export default function TeamMembersList() {
	return (
		<>
			<div className="setting_input_box mt-5 mb-4">
				<h4>
					<strong>Team members</strong>
				</h4>
			</div>
			<div className="member_list">
				<TeamMemberItem />
				<TeamMemberItem />
				<TeamMemberItem />
			</div>
		</>
	);
}
