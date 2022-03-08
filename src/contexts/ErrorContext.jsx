import { createContext, useState, useEffect } from "react";

const ErrorContext = createContext();
function ErrorContextProvider({ children }) {
	const [error, setError] = useState("");

	return (
		<ErrorContext.Provider value={{ error, setError }}>
			{children}
		</ErrorContext.Provider>
	);
}

export default ErrorContextProvider;
export { ErrorContext };
