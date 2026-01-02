// this module is used in many explorables to reset all parameters
// to their default value. 
// Typically the exported function is connected to a button that
// invokes this function
// Sometimes this needs to be adapted to the needs 

import parameters from "./parameters.js"
import * as ct from "./controls.js"
import {each} from "lodash-es"

export default (controls) => {
	each(ct.variables, x => x.widget.reset(controls,x.default) );
	each(ct.booleans, x => x.widget.reset(controls,x.default) );
	each(ct.choices, x => x.widget.reset(controls,x.default)  );
	parameters.number_of_particles.widget.update();
}


