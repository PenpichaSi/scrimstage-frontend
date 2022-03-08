import UserProfileHeader from "../components/UserProfile/UserProfileHeader";
import UserProfileBody from "../components/UserProfile/UserProfileBody";
import ModalCreateTeam from "../components/UserProfile/ModalCreateTeam";
import { useState } from "react";

function UserProfile() {
	const [showModalCreateTeam, setShowModalCreateTeam] = useState(false);

	const handleShowCreateTeam = () => {
		setShowModalCreateTeam(true);
	};

	const handleCloseCreateTeam = () => {
		setShowModalCreateTeam(false);
	};

	return (
		<div className="flex-column-center">
			{/* header */}
			<UserProfileHeader
				setShowModalCreateTeam={setShowModalCreateTeam}
				showModalCreateTeam={showModalCreateTeam}
			/>

			{/* body */}
			<UserProfileBody />

			{showModalCreateTeam && (
				<ModalCreateTeam
					handleShowCreateTeam={handleShowCreateTeam}
					handleCloseCreateTeam={handleCloseCreateTeam}
					showModalCreateTeam={showModalCreateTeam}
				/>
			)}
		</div>
	);
}

export default UserProfile;
