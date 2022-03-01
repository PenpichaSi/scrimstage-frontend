import { useState } from "react";
import {
	Button,
	ThemeProvider,
	FormControl,
	TextField,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import theme from "../../services/mui_style";
import { ranks, durations } from "../../services/dropdown_item";

function FilterScrim() {
	const [filterDateTime, setFilterDateTime] = useState("");
	const [filterRank, setFilterRank] = useState("");
	const [filterDuration, setFilterDuration] = useState("");
	return (
		<ThemeProvider theme={theme}>
			<div className="filterscrim_container d-flex justify-content-around align-items-center mt-2 my-4">
				<Button className="my-4" color="secondary" variant="contained">
					<i className="fa-solid fa-magnifying-glass" /> Search
				</Button>
				<div className="mx-2 my-3">
					<FormControl>
						<TextField
							label="Date &amp; Time"
							id="date-time"
							variant="outlined"
							color="primary"
							type="datetime-local"
							InputLabelProps={{ shrink: true }}
							sx={{ width: "200px" }}
							value={filterDateTime}
							onChange={(e) => setFilterDateTime(new Date(e.target.value))}
						/>
					</FormControl>
				</div>
				<div className="mx-2 my-3">
					<FormControl sx={{ width: "140px" }} className="mx-2">
						<InputLabel id="duration-lable">Duration</InputLabel>
						<Select
							labelId="duration-label"
							id="duration"
							label="Duration"
							variant="outlined"
							value={filterDuration}
							onChange={(e) => setFilterDuration(e.target.value)}
							className="select_mui"
						>
							{durations.map((item) => {
								return (
									<MenuItem
										className="menu_item"
										value={item.value}
										key={item.id}
									>
										{item.title}
									</MenuItem>
								);
							})}
							{/* <MenuItem className="menu_item" value={1}>
								1 map
							</MenuItem> */}
						</Select>
					</FormControl>
				</div>

				{/* rank */}
				<div className="mx-2 my-3">
					<FormControl sx={{ width: "140px" }} className="mx-2">
						<InputLabel id="rank-lable">Rank</InputLabel>
						<Select
							labelId="rank-label"
							id="rank"
							label="Rank"
							variant="outlined"
							value={filterRank}
							onChange={(e) => setFilterRank(e.target.value)}
							className="select_mui"
						>
							{ranks.map((item) => {
								return (
									<MenuItem
										className="menu_item"
										value={item.value}
										key={item.id}
									>
										<img
											style={{ width: "24px", height: "24px" }}
											src={item.icon}
											alt={item.title}
										/>
										{item.title}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
				<div></div>
			</div>
		</ThemeProvider>
	);
}

export default FilterScrim;
