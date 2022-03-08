import rank from "../../assets/images/rank/gold.png";
import avatar from "../../assets/images/rank/gold.png";
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Button,
} from "@mui/material";

/*
time="10 days ago"
title="OakZaBaPalang #5555"
subtitle="Thailand"
position="Mid-lane"
text="Profile"
*/
function CustomCard({ time, title, subtitle, position, text = "", ...props }) {
	return (
		<Card
			sx={{ maxWidth: 345, minWidth: 345 }}
			className="custom-card col-3 mx-2"
		>
			<CardContent>
				<div className="flex-between">
					<img src={rank} width={30} alt="rank" />
					<span className="lightGrey">{time}</span>
				</div>
			</CardContent>

			<CardHeader
				avatar={<img src={avatar} alt="avatar" />}
				title={title}
				subheader={subtitle}
			></CardHeader>

			<CardContent>Position: {position}</CardContent>
			<CardActions className="flex-center">
				<Button variant="contained" color="lightGrey">
					View {text}
				</Button>
				<Button variant="contained" color="error">
					Approach
				</Button>
			</CardActions>
		</Card>
	);
}

export default CustomCard;
