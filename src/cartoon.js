import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import styles from "./styles.module.css"


const sc_x = d3.scaleLinear().domain([0,2]).range([0, cfg.plot.width]);
const sc_y = d3.scaleLinear().domain([-1,1]).range([cfg.plot.height,0]);

const line = d3.line()
    .x(function(d) { return sc_x(d.x); })
    .y(function(d) { return sc_y(d.y); });
	

const initialize = (controls,grid) => {

	const r1 = param.length_left_branch.widget.value();
	const r2 = param.length_central_branch.widget.value();
	const r3 = param.length_right_branch.widget.value();
	const theta1 = param.angle_left_branch.widget.value();
	const theta2 = param.angle_central_branch.widget.value();
	const theta3 = param.angle_right_branch.widget.value();
		
	const pos=grid.position(cfg.plot.anchor.x,cfg.plot.anchor.y);		
	
	console.log("cartoon init at ",pos);

	const cartoon = controls.append("g").attr("class",styles.cartoon)
	.attr("transform","translate("+pos.x+","+pos.y+")")

	cartoon.append("line").attr("class",styles.trunk)
		.attr("x1",0).attr("y1",0)
		.attr("x2",0).attr("y2", - cfg.plot.height / 2);
			
	cartoon.selectAll("."+styles.branch)
		.data([[r3,theta3],[r2,theta2],[r1,theta1]]).enter()
		.append("line").attr("class",styles.branch)
		.attr("x1",0)
		.attr("x2",function(d){return - cfg.plot.width / 2 * d[0] * Math.sin(d[1]/180*Math.PI)})
		.attr("y1", - cfg.plot.height / 2)
		.attr("y2",function(d){return  - cfg.plot.height / 2 - cfg.plot.height / 2 * d[0] * Math.cos(d[1]/180*Math.PI)})

	
}

const update = (controls) => {
	
	const r1 = param.length_left_branch.widget.value();
	const r2 = param.length_central_branch.widget.value();
	const r3 = param.length_right_branch.widget.value();
	const theta1 = param.angle_left_branch.widget.value();
	const theta2 = param.angle_central_branch.widget.value();
	const theta3 = param.angle_right_branch.widget.value();

	console.log(r1)
	const cartoon = controls.select("."+styles.cartoon);

	cartoon.selectAll("."+styles.branch)
		.data([[r3,theta3],[r2,theta2],[r1,theta1]])
		.attr("x1",0)
		.attr("x2",function(d){return - cfg.plot.width / 2 * d[0] * Math.sin(d[1]/180*Math.PI)})
		.attr("y1", - cfg.plot.height / 2)
		.attr("y2",function(d){return  - cfg.plot.height / 2 - cfg.plot.height / 2 * d[0] * Math.cos(d[1]/180*Math.PI)})
}

export {initialize,update}

