import { Outlet } from "react-router-dom";

function PublicLayout() {
	return (
		<div>
			<div className="row align-items-center justify-content-center public_layout_container">
				<div className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
					<h1 className="public_bold">Scrim Stage</h1>
					<h2 className="font-primary"> Find Team and Level up your game</h2>
				</div>

				<div className="col-lg-5">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default PublicLayout;
