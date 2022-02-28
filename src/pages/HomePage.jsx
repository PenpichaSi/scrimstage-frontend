import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();
	return (
		<div className="homepage_container flex-column-center">
			{/* title */}
			<div className="flex-column-center outlet_header mt-4">
				<h1>
					<b>What are you looking for ? </b>
				</h1>
				<hr />
			</div>

			{/* body */}

			<div className="homepage_body row mx-auto justify-content-around">
				{/* looking for scrim */}
				<div
					className="homepage_card col-lg-5 valorant-bg"
					type="button"
					onClick={() => navigate("/looking-for-scrim")}
				>
					<div className="homepage_thumbnail_title">
						<h2>Find Scrim</h2>
					</div>
				</div>

				{/* looking for player */}
				<div
					className="homepage_card col-lg-5 lol-bg"
					type="button"
					onClick={() => navigate("/looking-for-player")}
				>
					<div className="homepage_thumbnail_title" style={{ opacity: "80%" }}>
						<h2 style={{ color: "#999b9d" }}>Find Player</h2>
					</div>
				</div>

				{/* looking for team */}
				<div
					className="homepage_card col-lg-5 csgo-bg"
					type="button"
					onClick={() => navigate("/looking-for-team")}
				>
					<div className="homepage_thumbnail_title">
						<h2>Find Team</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
