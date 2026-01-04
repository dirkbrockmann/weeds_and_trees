// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

import {reset_noise_angle} from "./controls";

export default { 
	widgets:{
		slider_size: 200,
		slider_show: false,
		slider_gap : 1.2,
		slider_block_gap: 1,
		length_slider_anchor: {x:.5,y:1},
		angle_slider_anchor: {x:.5,y:5},
		other_slider_anchor: {x:.5,y:9},
		radio_anchor:{x:11,y:6},
		radio_size:200,
		radio_orientation:"vertical",
		radio_label_position:"left",
		radio_shape:"rect",
		radio_button_size:25,
		button_size:30,
		reset_noise_angle_button_anchor:{x:6.2,y:9},
		reset_noise_length_button_anchor:{x:6.2,y:10.2},
	},
	plot:{
		height:200,
		width:200,
		anchor:{x:9,y:5}
	},
	display:{
		pen_color: "black",
		background_color: "white"
	}
}