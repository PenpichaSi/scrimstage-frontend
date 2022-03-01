import { useState } from "react";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../services/mui_style";
import CreateScrim from "../components/LookingForScrim/CreateScrim";
import FilterScrim from "../components/LookingForScrim/FilterScrim";
import ScrimCard from "../components/LookingForScrim/ScrimCard";

function LookingForScrim() {
	const [showCreateScrim, setShowCreateScrim] = useState(false);

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
			<div className="mt-4 mb-2 flex-column-center">
				<ThemeProvider theme={theme}>
					{!showCreateScrim && (
						<Button
							sx={{ width: "400px" }}
							variant="contained"
							color="secondary"
							onClick={() => setShowCreateScrim(!showCreateScrim)}
						>
							<b>Create Scrim</b>
						</Button>
					)}
				</ThemeProvider>
			</div>
			{showCreateScrim && (
				<CreateScrim
					showCreateScrim={showCreateScrim}
					setShowCreateScrim={setShowCreateScrim}
				/>
			)}

			{/* filter component */}
			<FilterScrim />

			{/* body */}
			<div className="findscrim_body row justify-content-start ">
				<ScrimCard />
				<ScrimCard />
				<ScrimCard />
				<ScrimCard />
			</div>
		</div>
	);
}

export default LookingForScrim;
