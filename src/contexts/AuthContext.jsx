import { createContext, useState, useEffect } from "react";
import axios from "../Config/axios";
import { clearToken, setToken, getToken } from "../services/localStorage";

const AuthContext = createContext();
function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (getToken()) {
			axios
				.get("/users/me")
				.then((res) => {
					setUser(res.data.user);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	const login = async (email, password) => {
		try {
			const res = await axios.post("/users/login", {
				emailInput: email,
				password: password,
			});

			setToken(res.data.token);
			setUser(res.data.user);
			console.log(user);
		} catch (err) {
			console.log(err.message);
		}
	};

	const logout = () => {
		clearToken();
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;

export { AuthContext };
