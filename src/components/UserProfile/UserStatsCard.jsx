import { useContext } from "react";
import { FetchDataContext } from "../../contexts/FetchDataContext";

export default function UserStatsCard({ title, value }) {
	const { riotAccount } = useContext(FetchDataContext);
	return (
		<div className="flex-column-center col-3 user_stats_card mx-3 my-2">
			<h4>
				<strong>{title}</strong>
			</h4>
			<h4 className="font-thirdnary">{riotAccount ? value : "none"}</h4>
		</div>
	);
}
