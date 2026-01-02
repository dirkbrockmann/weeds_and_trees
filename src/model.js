// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each} from "lodash-es"
import {Cos,Sin, rd1} from "./utils"
 

var tree,links=[];

const origin = {depth:0, x:0, y:0, l:1, dx:0, dy:0, parent:[]};
var node   = {depth:0, x:0, y:1, l:1, dx:0, dy:1, children:[], parent:origin};


const N = param.N;



const makelinks = (node,links) => {
	if(node.parent != null){ links.push([node,node.parent]) }
	if(node.children.length>0){ each(node.children,d => {makelinks(d,links)})}
}


const maketree = (node,N) => {

		const r1 = param.length_left_branch.widget.value();
		const r2 = param.length_central_branch.widget.value();
		const r3 = param.length_right_branch.widget.value();
		const theta1 = param.angle_left_branch.widget.value();
		const theta2 = param.angle_central_branch.widget.value();
		const theta3 = param.angle_right_branch.widget.value();
		const sigma = param.noise_angle.widget.value();
		const eta = param.noise_length.widget.value();

		if (node.depth < N) {
			let t = node.depth + 1;
			
			node.sigma1theta = rd1();
			node.sigma2theta = rd1();
			node.sigma3theta = rd1();
			node.sigma1r = rd1();
			node.sigma2r = rd1();
			node.sigma3r = rd1();
		
			let R1 = r1*(1+eta*node.sigma1r);
			let R2 = r2*(1+eta*node.sigma2r);
			let R3 = r3*(1+eta*node.sigma3r);
			let TH1 = theta1*(1+sigma*node.sigma1theta);
			let TH2 = theta2*(1+sigma*node.sigma2theta);
			let TH3 = theta3*(1+sigma*node.sigma3theta);
		
			let dx1=(R1*Cos(TH1)*node.dx-R1*Sin(TH1)*node.dy);
			let dy1=(R1*Sin(TH1)*node.dx+R1*Cos(TH1)*node.dy);
			let dx2=(R2*Cos(TH2)*node.dx-R2*Sin(TH2)*node.dy);
			let dy2=(R2*Sin(TH2)*node.dx+R2*Cos(TH2)*node.dy);
			let dx3=(R3*Cos(TH3)*node.dx-R3*Sin(TH3)*node.dy);
			let dy3=(R3*Sin(TH3)*node.dx+R3*Cos(TH3)*node.dy);
			
			node.children=[];
			
			node.children.push({depth:t, dx:dx1, dy:dy1, x:node.x+dx1, y:node.y+dy1, l:node.l*R1, children:[], parent:node});
			node.children.push({depth:t, dx:dx2, dy:dy2, x:node.x+dx2, y:node.y+dy2, l:node.l*R2, children:[], parent:node});
			node.children.push({depth:t, dx:dx3, dy:dy3, x:node.x+dx3, y:node.y+dy3, l:node.l*R3, children:[], parent:node});
			node.children.forEach(function(d){maketree(d,N)});
		}
		return node
}

const updatetree = (node) =>{

	const r1 = param.length_left_branch.widget.value();
	const r2 = param.length_central_branch.widget.value();
	const r3 = param.length_right_branch.widget.value();
	const theta1 = param.angle_left_branch.widget.value();
	const theta2 = param.angle_central_branch.widget.value();
	const theta3 = param.angle_right_branch.widget.value();
	const sigma = param.noise_angle.widget.value();
	const eta = param.noise_length.widget.value();

	if (node.children.length != 0) {

		
		let R1 = r1*(1+eta*node.sigma1r);
		let R2 = r2*(1+eta*node.sigma2r);
		let R3 = r3*(1+eta*node.sigma3r);
		let TH1 = theta1*(1+sigma*node.sigma1theta);
		let TH2 = theta2*(1+sigma*node.sigma2theta);
		let TH3 = theta3*(1+sigma*node.sigma3theta);
		
		let dx1=(R1*Cos(TH1)*node.dx-R1*Sin(TH1)*node.dy);
		let dy1=(R1*Sin(TH1)*node.dx+R1*Cos(TH1)*node.dy);
		let dx2=(R2*Cos(TH2)*node.dx-R2*Sin(TH2)*node.dy);
		let dy2=(R2*Sin(TH2)*node.dx+R2*Cos(TH2)*node.dy);
		let dx3=(R3*Cos(TH3)*node.dx-R3*Sin(TH3)*node.dy);
		let dy3=(R3*Sin(TH3)*node.dx+R3*Cos(TH3)*node.dy);
		node.children[0].dx=dx1;
		node.children[0].dy=dy1;
		node.children[0].x=node.x+dx1;
		node.children[0].y=node.y+dy1;
		node.children[0].l=node.l*r1;
		node.children[1].dx=dx2;
		node.children[1].dy=dy2;
		node.children[1].x=node.x+dx2;
		node.children[1].y=node.y+dy2;
		node.children[1].l=node.l*r2;
		node.children[2].dx=dx3;
		node.children[2].dy=dy3;
		node.children[2].x=node.x+dx3;
		node.children[2].y=node.y+dy3;
		node.children[2].l=node.l*r3;
			
		node.children.forEach(function(d){updatetree(d)});
	} 
}


const initialize = () => {
	param.presets.widget.update(); // to make sure presets is initialized
	tree = maketree(node,N);
	makelinks(node,links);
};

const update = () => {
	updatetree(node);
};

export {initialize,update,tree,links,node}
