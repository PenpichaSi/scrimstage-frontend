import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../../services/mui_style";
import { FetchDataContext } from "../../contexts/FetchDataContext";

export default function UserProfileHeader({
	setShowModalCreateTeam,
	showModalCreateTeam,
}) {
	const { user } = useContext(AuthContext);
	const { riotAccount } = useContext(FetchDataContext);
	return (
		<ThemeProvider theme={theme}>
			<div className="user_profile_header d-flex align-items-center position-relative">
				<div
					className="d-flex justify-content-start align-items-end"
					style={{ width: "800px" }}
				>
					{/* user profile picture */}
					<div className="user_profile_picture flex-column-center position-relative ms-5 mb-1">
						<i className="fa-solid fa-user profile_icon" />
						<button className="btn btn-secondary border-0 bg-transparent position-absolute start-0 bottom-0">
							<i className="fa-solid fa-camera" />
						</button>
					</div>

					{/* user profile title */}
					<div className="profile_title_container ms-4">
						<h2 className="ms-3">
							<strong>{user.username}</strong>
						</h2>
						{riotAccount ? (
							<h3 className="ms-3">{`${riotAccount.username}   #${riotAccount.tag}`}</h3>
						) : (
							<h3>haven't connect Valorant Account yet</h3>
						)}
					</div>
				</div>
				<div className="position-absolute end-0 bottom-0 me-5 mb-3">
					<Button
						variant="contained"
						color="secondary"
						onClick={() => setShowModalCreateTeam(!showModalCreateTeam)}
					>
						Create Team
					</Button>
				</div>
			</div>
		</ThemeProvider>
	);
}
