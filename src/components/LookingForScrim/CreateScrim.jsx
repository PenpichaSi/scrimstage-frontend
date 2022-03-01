import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../services/mui_style";
import { ranks, maps, durations } from "../../services/dropdown_item";
import {
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
} from "@mui/material";

function CreateScrim() {
	const [dateTime, setDateTime] = useState("");
	const [duration, setDuration] = useState("");
	const [rank, setRank] = useState("");
	const [mapList, setMapList] = useState([]);

	const handleCheckedMapList = (e) => {
		const checkedOrNot = mapList.includes(e.target.value);
		if (checkedOrNot === false) setMapList([...mapList, e.target.value]);
		if (checkedOrNot === true) {
			const deleteIndex = mapList.indexOf(e.target.value);
			const newMapList = [...mapList];
			newMapList.splice(deleteIndex, 1);
			setMapList(newMapList);
		}
	};

	return (
		<div className="flex-column-center createscrim_container">
			<ThemeProvider theme={theme}>
				{/* title */}
				<div className="mt-3">
					<h1>Create Your Match</h1>
				</div>

				{/* filter input */}
				<div className="d-flex align-items-center justify-content-around">
					{/* duration */}
					<div>
						<FormControl className="mx-2">
							<TextField
								label="Date &amp; Time"
								id="date-time"
								variant="outlined"
								color="primary"
								type="datetime-local"
								InputLabelProps={{ shrink: true }}
								sx={{ width: "200px" }}
								value={dateTime}
								onChange={(e) => setDateTime(new Date(e.target.value))}
							/>
						</FormControl>
					</div>
					<div>
						<FormControl sx={{ width: "140px" }} className="mx-2">
							<InputLabel id="duration-lable">Duration</InputLabel>
							<Select
								labelId="duration-label"
								id="duration"
								label="Duration"
								variant="outlined"
								value={duration}
								onChange={(e) => setDuration(e.target.value)}
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
					<div>
						<FormControl sx={{ width: "140px" }} className="mx-2">
							<InputLabel id="duration-lable">Rank</InputLabel>
							<Select
								labelId="duration-label"
								id="duration"
								label="Duration"
								variant="outlined"
								value={rank}
								onChange={(e) => setRank(e.target.value)}
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

					<div
						className="row justify-content-start ms-2"
						style={{ width: "350px" }}
					>
						{maps.map((item) => (
							<FormControlLabel
								className="col-3"
								name={item.title}
								control={<Checkbox name={item.title} />}
								label={item.title}
								key={item.id}
								value={item.value}
								onChange={handleCheckedMapList}
								sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
							/>
						))}
					</div>
				</div>

				{/* button */}
				<div>
					<Button
						sx={{ width: "200px" }}
						color="secondary"
						variant="contained"
						className="my-4"
					>
						Create the Game
					</Button>
				</div>
			</ThemeProvider>
		</div>
	);
}

export default CreateScrim;
