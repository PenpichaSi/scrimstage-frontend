import { useState, createContext, useEffect } from "react";
import axios from "../Config/axios";

const FetchDataContext = createContext();

function FetchDataContextProvider({ children }) {
	const [riotAccount, setRiotAccount] = useState(null);

	useEffect(() => {
		fetchAccountAtLogin();
	}, []);

	useEffect(() => {
		if (riotAccount !== null) {
			axios.patch("/riot/update-stats");
		}
	}, [riotAccount]);

	const fetchAccountAtLogin = async () => {
		const res = await axios.get("/riot");
		setRiotAccount(res.data.valorantStat);
	};

	console.log(riotAccount);

	return (
		<FetchDataContext.Provider value={{ riotAccount, setRiotAccount }}>
			{children}
		</FetchDataContext.Provider>
	);
}

export default FetchDataContextProvider;

export { FetchDataContext };
