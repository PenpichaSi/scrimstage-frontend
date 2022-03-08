import Card from "../components/Card";

function LookingForPlayer() {
	return (
		<div className="homepage_container flex-column-center">
			<div className="flex-column-center outlet_header mt-4">
				<h1>
					<b>Looking for Player </b>
				</h1>
				<hr />
			</div>

			<div className="m-auto row" style={{ width: "80%" }}></div>
			{/* <Card
        time="10 days ago"
        title="OakZaBaPalang #5555"
        subtitle="Thailand"
        position="Mid-lane"
        text="Profile"
      /> */}
		</div>
	);
}

export default LookingForPlayer;
