// this sets up the controls in the control panel
// it adds the widgets to the container and generates attaches the widget to the 
// variables and parameters defined in parameters.js

import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"

// defined variables for variables, booleans and choices, extracting the information from parameters.js

const variables = get_variables(parameters);
const choices = get_choices(parameters);

// adding ids and labels to the variables based on names for the variables, see utils.js for the function add_id_label

add_id_label(variables)
add_id_label(choices)

// making arrays for the three types of parameters

const va = toArray(variables);
const ch = toArray(choices);

// making the slider widgets objects, based on the variables

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
		);

// making the radio widgets objects, based on the choices
console.log(ch)

const radios = map(ch, 
		v => widgets.radio()
					.choices(map(v.choices,c=>c.name))
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
					.buttonsize(cfg.widgets.radio_button_size)
					.size(cfg.widgets.radio_size)
					.shape(cfg.widgets.radio_shape)
		);


add_widget(va,sliders);
add_widget(ch,radios);

const length_sliders = sliders.slice(0,3); // first six sliders are length and angle sliders
const angle_sliders = sliders.slice(3,6);
const other_sliders = sliders.slice(6,); // the rest are other parameters


const reset_noise_angle = widgets.button().actions(["rewind"])
const reset_noise_length = widgets.button().actions(["rewind"])

const buttons = [reset_noise_angle,reset_noise_length];

// positioning all widgets in the control panel based on the grid defined in index.js
// and the anchors and sizes defined in config.js
export default (controls,grid)=>{

	const l_sl_pos = grid.position(cfg.widgets.length_slider_anchor.x,range(length_sliders.length)
			.map(x=>(cfg.widgets.length_slider_anchor.y+(cfg.widgets.slider_gap)*x)));
	
	const a_sl_pos = grid.position(cfg.widgets.angle_slider_anchor.x,range(angle_sliders.length)
			.map(x=>(cfg.widgets.angle_slider_anchor.y+(cfg.widgets.slider_gap)*x)));
	
	const o_sl_pos = grid.position(cfg.widgets.other_slider_anchor.x,range(other_sliders.length)
			.map(x=>(cfg.widgets.other_slider_anchor.y+(cfg.widgets.slider_gap)*x)));
	
	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);		
	
	length_sliders.forEach((sl,i) => sl.position(l_sl_pos[i]));
	angle_sliders.forEach((sl,i) => sl.position(a_sl_pos[i]));
	other_sliders.forEach((sl,i) => sl.position(o_sl_pos[i]));

	radios[0].position(ra_pos)
	
	reset_noise_angle.position(grid.position(cfg.widgets.reset_noise_angle_button_anchor.x,cfg.widgets.reset_noise_angle_button_anchor.y))
		.size(cfg.widgets.button_size);
	
	reset_noise_length.position(grid.position(cfg.widgets.reset_noise_length_button_anchor.x,cfg.widgets.reset_noise_length_button_anchor.y))
		.size(cfg.widgets.button_size);
	
	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget)

}

// here are all the exported objects, all the parameters, their associated widgets and the action buttons

export {sliders,radios,variables,choices,reset_noise_angle,reset_noise_length,buttons};


