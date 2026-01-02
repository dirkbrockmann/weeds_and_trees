// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import styles from "./styles.module.css"

const L = param.L;
const X = d3.scaleLinear().domain([0,L]);
const Y = d3.scaleLinear().domain([0,L]);

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
		
	display.selectAll("#origin").remove();
	
	const origin = display.append("g").attr("id","origin")
	
	origin.selectAll(null).data(agents).enter().append("circle")
		.attr("class",styles.agent)
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))
		.attr("r",X(param.agentsize/2))
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : null)
	
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	
	display.selectAll("."+styles.agent)
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : null)
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	display.selectAll("."+styles.node)
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : null)
	
}


export {initialize,go,update}
