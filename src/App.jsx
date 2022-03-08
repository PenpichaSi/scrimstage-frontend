import RouteConfig from "./routes/RouteConfig";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./services/mui_style";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouteConfig />
			</ThemeProvider>
	);
}

export default App;
