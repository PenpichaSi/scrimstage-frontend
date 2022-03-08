export default function TeamMemberItem() {
	return (
		<div className="team_member_item position-relative">
			<div className="team_member_profile">
				<i className="fa-solid fa-user" />
			</div>
			<h4 className="font-thirdnary my-auto">Oakleyster</h4>
			<div className="position-absolute end-0 me-2">
				<button className="btn btn-secondary border-0 bg-transparent">
					<i className="fa-solid fa-trash" />
				</button>
			</div>
		</div>
	);
}
