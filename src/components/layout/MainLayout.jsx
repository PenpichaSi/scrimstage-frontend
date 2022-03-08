import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MainLayout() {
	return (
		<div className="d-flex flex-column main">
			<NavBar />
			<div className="container">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default MainLayout;
