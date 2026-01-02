// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:1,
		L:100,
		agentsize: 1.0,
	
		speed: {
			range:[0,1],
			default:0.2
		},
		wiggle: {
			range:[0,180],
			default:50
		},
		interaction_radius:{
			range : [0,5],
			default : 3
		},
		number_of_particles : {
			choices:[50,100,200,400],
		default:2
		},
		color_by_heading: {
			default: true
		}
}

