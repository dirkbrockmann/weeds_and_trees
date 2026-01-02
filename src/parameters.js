// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:8,
		lw_min:.5,
		L:100,
		length_left_branch: {
			range:[0,0.95],
			default:0.39
		},
		length_central_branch: {
			range:[0,0.95],
			default:0.89
		},
		length_right_branch: {
			range:[0,0.95],
			default:0.37
		},
		angle_left_branch: {
			range:[0,50],
			default:18.34
		},
		angle_central_branch: {
			range:[-20,20],
			default:3
		},
		angle_right_branch: {
			range:[-50,0],
			default:-16
		},
		noise_angle: {
			range:[0,1],
			default:0.0
		},
		noise_length: {
			range:[0,0.5],
			default:0.0
		},
		thickness_scale: {
			range:[0.5,30],
			default:0.5
		},
		presets : {
			choices:[
				{
					name:"Boring",
					r1:0.8,
					r2:0.8,
					r3:0.8,
					theta1:-24,
					theta2:0,
					theta3:24,
					sigma:0,
					eta:0,
					lw_max:0.5
				},
				{
					name:"Weed",
					r1:0.37,
					r2:0.89,
					r3:0.39,
					theta1:-16,
					theta2:3,
					theta3:18.34,
					sigma:0,
					eta:0,
					lw_max:0.5
				},
				{
					name:"Tree",
					r1:0.72,
					r2:0.82,
					r3:0.69,
					theta1:-26.25,
					theta2:-0.83,
					theta3:33.75,
					sigma:0.77,
					eta:0.10,
					lw_max:12.66
				},
				{
					name:"Phragmites",
					r1:0.4,
					r2:0.73,
					r3:0.32,
					theta1:-23,
					theta2:4,
					theta3:43,
					sigma:0.77,
					eta:0.13,
					lw_max:0.5
				},
				{
					name:"Tim Burton Tree",
					r1:0.73,
					r2:0.15,
					r3:0.8,
					theta1:-20,
					theta2:0,
					theta3:33,
					sigma:0.42,
					eta:0.5,
					lw_max:9
				},
				{
					name:"Fir",
					r1:0.51,
					r2:0.9,
					r3:0.46,
					theta1:-29.1,
					theta2:-0.60,
					theta3:34,
					sigma:0.42,
					eta:0.0,
					lw_max:16
				}
			],
			default:3
		}
}

