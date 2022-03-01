export default function TeamProfileHeader() {
	return (
		<div className="user_profile_header d-flex align-items-center position-relative">
			<div
				className="d-flex justify-content-start align-items-end"
				style={{ width: "800px" }}
			>
				{/* user profile picture */}
				<div className="user_profile_picture flex-column-center position-relative ms-5 mb-1">
					<i className="fa-solid fa-user-group profile_icon" />
					<button className="btn btn-secondary border-0 bg-transparent position-absolute start-0 bottom-0">
						<i className="fa-solid fa-camera" />
					</button>
				</div>

				{/* user profile title */}
				<div className="profile_title_container ms-4">
					<h2 className="ms-3">
						<strong>Noobster </strong>
					</h2>
					<h3 className="ms-3">Created at: 20 September 2022</h3>
				</div>
			</div>
		</div>
	);
}
