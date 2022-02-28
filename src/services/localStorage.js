const getToken = () => localStorage.getItem("token");
const setToken = (value) => localStorage.setItem("token", value);
const clearToken = () => localStorage.removeItem("token");

export { getToken, setToken, clearToken };
