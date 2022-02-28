import { useState, useContext } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import MainLayout from "../components/layout/MainLayout";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import HomePage from "../pages/HomePage";
import Settings from "../pages/Settings";
import TeamProfile from "../pages/TeamProfile";
import UserProfile from "../pages/UserProfile";
import LookingForPlayer from "../pages/LookingForPlayer";
import LookingForScrim from "../pages/LookingForScrim";
import LookingForTeam from "../pages/LookingForTeam";

function RouteConfig() {
	const [user, setUser] = useState("asdf");

	const navigate = useNavigate();
	return (
		<Routes>
			{user ? (
				<Route path="/" element={<MainLayout />}>
					<Route path="" element={<HomePage />} />
					<Route path="settings" element={<Settings />} />
					<Route path="team-profile" element={<TeamProfile />} />
					<Route path="user" element={<UserProfile />} />
					<Route path="looking-for-player" element={<LookingForPlayer />} />
					<Route path="looking-for-scrim" element={<LookingForScrim />} />
					<Route path="looking-for-team" element={<LookingForTeam />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			) : (
				<Route element={<PublicLayout />}>
					<Route path="/" element={<LoginForm />} />
					<Route path="/register" element={<RegisterForm />} />
				</Route>
			)}
		</Routes>
	);
}

export default RouteConfig;
