import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function NavBar() {
	const { user } = useContext(AuthContext);
	const [search, setSearch] = useState("");

	const navigate = useNavigate();
	console.log(user);
	return (
		<div className="NavBar_container">
			<div className="NavBar_left ">
				<button className="btn btn-secondary" onClick={() => navigate("/")}>
					Home
				</button>
				<button
					className="btn btn-secondary"
					onClick={() => navigate("/looking-for-scrim")}
				>
					Find Scrim
				</button>
				<button
					className="btn btn-secondary"
					onClick={() => navigate("/looking-for-team")}
				>
					Find Team
				</button>
				<button
					className="btn btn-secondary"
					onClick={() => navigate("/looking-for-player")}
				>
					Find Player
				</button>
			</div>
			<div className="NavBar_right">
				<div className="d-flex align-items-center">
					<i className="fa-solid fa-magnifying-glass mx-3" />
					<input
						className="NavBar_search"
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<button
					className="btn mx-3 d-flex friend_btn"
					onClick={() => navigate("/team-profile")}
				>
					<i className="fa-solid fa-user-group me-2 text-white" />
					Team
				</button>
				<div className="NavBar_profile d-flex align-items-center">
					<div
						className="NavBar_profile_img ms-2"
						onClick={() => navigate("/user")}
					>
						<i className="fa-solid fa-user" />
					</div>

					<b
						style={{ fontSize: "14px" }}
						className="font-secondary mx-3"
						onClick={() => navigate("/user")}
					>
						{user.username}
					</b>
					<div className="vl"></div>
					<button className="btn btn-secondary profile_btn">
						<i className="fa-solid fa-bell" />
					</button>
					<button className="btn btn-secondary profile_btn">
						<i className="fa-solid fa-gear" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
