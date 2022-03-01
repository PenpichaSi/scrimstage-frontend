import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
	const [search, setSearch] = useState("");

	const navigate = useNavigate();

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
				<button className="btn mx-3 d-flex friend_btn">
					<i className="fa-solid fa-user-group me-2 text-white" />
					friend
				</button>
				<div className="NavBar_profile d-flex align-items-center">
					<div className="NavBar_profile_img ms-2">
						<i className="fa-solid fa-user" />
					</div>

					<b style={{ fontSize: "14px" }} className="font-secondary mx-3">
						Oakleyster
					</b>
					<div className="vl"></div>
					<button className="btn btn-secondary profile_btn">
						<i className="fa-solid fa-bell" />
					</button>
					<button
						className="btn btn-secondary profile_btn"
						onClick={() => navigate("/settings")}
					>
						<i className="fa-solid fa-gear" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
