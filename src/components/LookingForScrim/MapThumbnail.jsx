import { maps } from "../../services/dropdown_item";

export default function MapThumbnail() {
	return (
		<div className="map_pic mx-2">
			<img
				src={maps[0].picture}
				alt={maps[0].title}
				style={{ width: "60px", height: "40px" }}
			/>
		</div>
	);
}
