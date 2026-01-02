// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"

const L = param.L;
const dt = param.dt;

// typically objects needed for the explorable
// are defined here

var agents = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents

	const N = param.number_of_particles.choices[param.number_of_particles.widget.value()];
	
	agents = map(range(N), i => { return {
				index:i, 
				x:L*Math.random(), 
				y:L*Math.random(),
				theta: 2*Math.PI*Math.random(),
			} 
	});
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	each(agents,a=>{
		
		var dx = dt*param.speed.widget.value()*Math.cos(a.theta);
		var dy = dt*param.speed.widget.value()*Math.sin(a.theta);
		
		const x_new = a.x + dx;
		const y_new = a.y + dy;
		
		if (x_new < 0) {dx+=L};
		if (y_new < 0) {dy+=L};
		if (x_new > L) {dx-=L};
		if (y_new > L) {dy-=L};  
		
		a.x += dx;
		a.y += dy;
		
		var neighbors = agents.filter(d =>  (d.x-a.x)**2 + (d.y-a.y)**2 <= param.interaction_radius.widget.value()**2 )
		
		var mx = mean(map(neighbors,x=> Math.cos(deg2rad(x.theta))));
		var my = mean(map(neighbors,x=> Math.sin(deg2rad(x.theta))));	
		
		a.theta = rad2deg(Math.atan2(my,mx))
		
		a.theta += deg2rad(param.wiggle.widget.value())*(Math.random()-0.5)
		
	})
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,initialize,go,update}
