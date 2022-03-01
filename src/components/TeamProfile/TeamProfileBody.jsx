import TeamStats from "./TeamStats";
import TeamMembersList from "./TeamMembers";

export default function TeamProfileBody() {
	return (
		<div className="team_body_container ">
			<TeamStats />
			<TeamMembersList />
		</div>
	);
}
