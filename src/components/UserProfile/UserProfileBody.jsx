import { useState, useContext } from "react";
import { FetchDataContext } from "../../contexts/FetchDataContext";
import UserStatsCard from "./UserStatsCard";

export default function UserProfileBody() {
	const { riotAccount } = useContext(FetchDataContext);
	const stats = [
		{
			id: 0,
			title: "AVG HS",
			value: riotAccount.avgHeadshot,
		},
		{
			id: 1,
			title: "RANK",
			value: riotAccount.rank,
		},
		{
			id: 3,
			title: "AVG BS",
			value: riotAccount.avgBodyshot,
		},
		{
			id: 4,
			title: "AVG Score",
			value: riotAccount.avgScore,
		},
		{
			id: 5,
			title: "win rate",
			value: riotAccount.winRate,
		},
		{
			id: 6,
			title: "AVG KDA",
			value: riotAccount.avgKda,
		},
	];

	return (
		<div className="user_body_container">
			<div className="setting_input_box">
				<h4>
					<strong>Main Statistic</strong>
				</h4>
			</div>

			{/* profile stat cards */}
			<div className="row justify-content-evenly">
				{stats.map((item) => {
					return (
						<UserStatsCard
							key={item.id}
							title={item.title}
							value={item.value}
						/>
					);
				})}
			</div>
		</div>
	);
}
