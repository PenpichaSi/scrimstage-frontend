import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";

function MainLayout() {
	return (
		<div className="d-flex flex-column">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default MainLayout;
