import UserStatsCard from "./UserStatsCard";

export default function UserProfileBody() {
	return (
		<div className="user_body_container">
			<div className="setting_input_box">
				<h4>
					<strong>Main Statistic</strong>
				</h4>
			</div>

			{/* profile stat cards */}
			<div className="row justify-content-evenly">
				<UserStatsCard />
				<UserStatsCard />
				<UserStatsCard />
				<UserStatsCard />
				<UserStatsCard />
				<UserStatsCard />
			</div>
		</div>
	);
}
