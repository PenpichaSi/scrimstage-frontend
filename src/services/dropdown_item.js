import bronze from "../assets/images/rank/bronze.png";
import iron from "../assets/images/rank/iron.png";
import silver from "../assets/images/rank/silver.png";
import gold from "../assets/images/rank/gold.png";
import platinum from "../assets/images/rank/platinum.png";
import diamond from "../assets/images/rank/diamond.png";
import immortal from "../assets/images/rank/immortal.png";
import radiant from "../assets/images/rank/radiant.png";
import haven from "../assets/images/map_picure/haven.png";
import fracture from "../assets/images/map_picure/fracture.png";
import breeze from "../assets/images/map_picure/breeze.jpeg";
import ascent from "../assets/images/map_picure/ascent.jpeg";
import split from "../assets/images/map_picure/split.jpeg";
import bind from "../assets/images/map_picure/bind.jpeg";
import icebox from "../assets/images/map_picure/icebox.jpeg";

const durations = [
	{
		id: 1,
		title: "1 map",
		value: 1,
	},
	{
		id: 2,
		title: "3 maps",
		value: 3,
	},
	{
		id: 3,
		title: "5 maps",
		value: 5,
	},
];

const ranks = [
	{
		id: 1,
		icon: iron,
		value: "IRON",
		title: "iron",
	},
	{
		id: 2,
		icon: bronze,
		value: "BRONZE",
		title: "bronze",
	},
	{
		id: 3,
		icon: silver,
		value: "SILVER",
		title: "iron",
	},
	{
		id: 4,
		icon: gold,
		value: "GOLD",
		title: "gold",
	},
	{
		id: 5,
		icon: platinum,
		value: "PLATINUM",
		title: "platinum",
	},
	{
		id: 6,
		icon: diamond,
		value: "DIAMOND",
		title: "diamond",
	},
	{
		id: 7,
		icon: immortal,
		value: "IMMORTAL",
		title: "immortal",
	},
	{
		id: 8,
		icon: radiant,
		value: "RADIANT",
		title: "radiant",
	},
];

const maps = [
	{
		id: 0,
		title: "Haven",
		value: "HAVEN",
		checked: false,
		picture: haven,
	},
	{
		id: 1,
		title: "Ascent",
		value: "ASCENT",
		checked: false,
		picture: ascent,
	},
	{
		id: 2,
		title: "Split",
		value: "SPLIT",
		checked: false,
		picture: split,
	},
	{
		id: 3,
		title: "Icebox",
		value: "ICEBOX",
		checked: false,
		picture: icebox,
	},
	{
		id: 4,
		title: "Breeze",
		value: "BREEZE",
		checked: false,
		picture: breeze,
	},
	{
		id: 5,
		title: "Fracture",
		value: "FRACTURE",
		checked: false,
		picture: fracture,
	},
	{
		id: 6,
		title: "Bind",
		value: "BIND",
		checked: false,
		picture: bind,
	},
];

export { durations, ranks, maps };
