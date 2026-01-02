// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.

import * as ct from "./controls.js"
import param from "./parameters.js"
import {update} from "./simulation.js"
import {node} from "./model.js"
import {rd1} from "./utils.js"

// this function is called by index.js to connect actions and update functions to the explorables.
// once this is called, all widgets are usable in the controls panel
const N = param.N;
const update_angle_noise=(node)=>{
	if (node.children.length != 0) {
		node.sigma1theta = rd1();
		node.sigma2theta = rd1();
		node.sigma3theta = rd1();
		node.children.forEach(function(d){update_angle_noise(d,N)});
	}
	return node;	
}

// adding noise to the length

const update_length_noise=(node)=>{
	if (node.children.length != 0) {
		node.sigma1r = rd1();
		node.sigma2r = rd1();
		node.sigma3r = rd1();
		node.children.forEach(function(d){update_length_noise(d,N)});
	}
	return node;	
}


export default (display,controls,config) => {
	param.length_left_branch.widget.update(()=>update(display,controls,config))
	param.length_right_branch.widget.update(()=>update(display,controls,config))
	param.length_central_branch.widget.update(()=>update(display,controls,config))
	param.angle_left_branch.widget.update(()=>update(display,controls,config))
	param.angle_right_branch.widget.update(()=>update(display,controls,config))
	param.angle_central_branch.widget.update(()=>update(display,controls,config))
	param.thickness_scale.widget.update(()=>update(display,controls,config))
	param.noise_angle.widget.update(()=>update(display,controls,config))
	param.noise_length.widget.update(()=>update(display,controls,config))
	
	param.presets.widget.update(() => {
		const preset = param.presets.choices[param.presets.widget.value()];
		param.length_left_branch.widget.reset(controls,preset.r1);
		param.length_central_branch.widget.reset(controls,preset.r2);
		param.length_right_branch.widget.reset(controls,preset.r3);
		param.angle_left_branch.widget.reset(controls,preset.theta3);
		param.angle_central_branch.widget.reset(controls,preset.theta2);
		param.angle_right_branch.widget.reset(controls,preset.theta1);
		param.noise_angle.widget.reset(controls,preset.sigma);
		param.noise_length.widget.reset(controls,preset.eta);
		param.thickness_scale.widget.reset(controls,preset.lw_max);
		update(display,controls,config);
	})

	ct.reset_noise_angle.update(() => {
		update_angle_noise(node);
		update(display,controls,config);
	})

	ct.reset_noise_length.update(() => {
		update_length_noise(node);
		update(display,controls,config);
	})
//	ct.go.update(() => startstop(display,config)) // one button gets the startstop function defined above
//	ct.setup.update(() => initialize(display,config)) // this once gets the initialize() method defined in simulation.js
	//param.number_of_particles.widget.update(()=>initialize(display,config)) // here we say that if a specific parameter is changed, in this case the number of particles, we also re_initialize the system (model and visuals)	
}

