import UserProfileHeader from "../components/UserProfile/UserProfileHeader";
import UserProfileBody from "../components/UserProfile/UserProfileBody";

function UserProfile() {
	return (
		<div className="flex-column-center">
			{/* header */}
			<UserProfileHeader />

			{/* body */}
			<UserProfileBody />
		</div>
	);
}

export default UserProfile;
