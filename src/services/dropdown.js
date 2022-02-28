import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Dropdown = styled(InputBase)(({ theme }) => ({
	"label + &": {
		marginTop: theme.spacing(3),
	},
	"& .MuiInputBase-input": {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.primary,
		border: "1px solid #999b9d",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: ["Play", "sans-serif"].join(","),
		"&:focus": {
			borderRadius: 4,
			border: "2px solid #ff5500",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}));

export { Dropdown };
