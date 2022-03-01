import { Button, ThemeProvider } from "@mui/material";
import theme from "../../services/mui_style";
import MapNameThumbnail from "./MapNameThumbnail";
import { height } from "@mui/system";
import { ranks } from "../../services/dropdown_item";
import defaultProfileImg from "../../assets/images/default/defaultProfileImg.jpeg";
import MapThumbnail from "./MapThumbnail";

function ScrimCard() {
	return (
		<div className="scrimcard_container col-3 mx-3 my-3">
			{/* top panel */}
			<div className="mt-3 mx-2 d-flex justify-content-between">
				<div type="button">
					<i className="fa-solid fa-trash" style={{ color: "#999b9d" }} />
				</div>

				<div className="d-flex align-items-center">
					{/* date & time */}
					<div className="scrimcard_datetime d-flex justify-content-around align-items-center mx-2">
						<p className="font-thirdnary mt-3">28 April 2022 </p>

						<div className="vl" style={{ height: "10px" }}></div>

						<p className="font-thirdnary mt-3"> 2:00 P.M.</p>
					</div>

					{/* rank icons */}
					<div className="d-flex justify-content-center align-items-center">
						<img
							src={ranks[4].icon}
							alt={ranks[4].title}
							style={{ width: "30px", height: "30px" }}
						/>
					</div>
				</div>
			</div>

			{/* profile and username */}
			<div className="d-flex my-2 mx-4">
				{/* profile img */}
				<div className="mx-2">
					<img
						src={defaultProfileImg}
						alt="default profile"
						style={{ width: "75px", height: "75px" }}
					/>
				</div>

				{/* team name and tag */}
				<div className="d-flex flex-column align-items-start mx-2">
					<h3>
						<strong>Fnatic</strong>
					</h3>
					<h4>
						<strong>#FNC</strong>
					</h4>
				</div>
			</div>

			{/* durations and map name */}
			<div className="d-flex align-items-center">
				<p className="font-thirdnary">3 maps</p>
				<MapNameThumbnail />
				<MapNameThumbnail />
				<MapNameThumbnail />
			</div>

			{/* map pic thumbnail */}
			<div className="mapthumbnail_container">
				<MapThumbnail />
				<MapThumbnail />
				<MapThumbnail />
			</div>

			{/* button */}
			<div className="d-flex justify-content-center mt-3">
				<ThemeProvider theme={theme}>
					<Button variant="contained" color="secondary">
						Approach
					</Button>
				</ThemeProvider>
			</div>
		</div>
	);
}

export default ScrimCard;
