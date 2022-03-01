import TeamProfileHeader from "../components/TeamProfile/TeamProfileHeader";
import TeamProfileBody from "../components/TeamProfile/TeamProfileBody";

function TeamProfile() {
	return (
		<div className="flex-column-center">
			<TeamProfileHeader />
			<TeamProfileBody />
		</div>
	);
}

export default TeamProfile;
