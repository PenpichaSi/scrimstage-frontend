import CreateScrim from "../components/LookingForScrim/CreateScrim";
import FilterScrim from "../components/LookingForScrim/FilterScrim";
import ScrimCard from "../components/LookingForScrim/ScrimCard";

function LookingForScrim() {
	return (
		<div className="scrim_container flex-column-center">
			{/* header */}
			<div className="flex-column-center outlet_header mt-4">
				<h1>
					<b>Game up with Scrim</b>
				</h1>
				<hr />
			</div>
			{/* create Match */}
			<CreateScrim />

			{/* filter component */}
			{/* <FilterScrim /> */}
			{/* body */}
			<div></div>
		</div>
	);
}

export default LookingForScrim;
