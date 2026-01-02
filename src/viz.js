// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {links} from "./model.js"
import styles from "./styles.module.css"
import {each} from "lodash-es"


// const L = param.L;
// const X = d3.scaleLinear().domain([0,L]);
// const Y = d3.scaleLinear().domain([0,L]);
// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const lw_min = param.lw_min;
const N = param.N;

var ctx,W,H;

const X = d3.scaleLinear();
const Y = d3.scaleLinear();
const thickness = d3.scaleLinear().range([Math.log(param.thickness_scale.widget.value()),Math.log(lw_min)]).domain([0,N]);

const getPalette = (isDark) => isDark ? {
        pen: () => `rgba(255,255,255)`,
    } : {
        pen: () => `rgba(0,0,0)`,
    };

var palette = getPalette(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener('change', (e) => {
            palette = getPalette(e.matches);
            
			scaletocanvas();
	
	ctx.clearRect(0, 0, W, H);
	
	each(links,d=>{
		ctx.beginPath();
		ctx.moveTo(X(d[0].x), Y(d[0].y));
		ctx.lineTo(X(d[1].x), Y(d[1].y));
		ctx.lineWidth = Math.exp(thickness(d[0].depth));
		ctx.lineCap = "round"
		ctx.strokeStyle = palette.pen();
		ctx.stroke();
	})
            // ctx.clearRect(0, 0,canvas.width,canvas.height);
		    // //ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
		    // //ctx.fillRect(0,0,canvas.width,canvas.height);	
            //  lambda = lambda_0;
			// clearInterval(simulation);
		    // simulation = setInterval(go, 0)

        });
    }


function scaletocanvas(){
	var xr = [], yr=[];
	xr[0]=d3.min(links,function(d){return d[0].x < d[1].x ? d[0].x : d[1].x});
	xr[1]=d3.max(links,function(d){return d[0].x > d[1].x ? d[0].x : d[1].x});
	yr[0]=d3.min(links,function(d){return d[0].y < d[1].y ? d[0].y : d[1].y});
	yr[1]=d3.max(links,function(d){return d[0].y > d[1].y ? d[0].y : d[1].y});

	thickness.range([Math.log(param.thickness_scale.widget.value()),Math.log(lw_min)])
	var lx=xr[1]-xr[0];
	var ly=yr[1]-yr[0];
	if (ly>lx){
		Y.domain(yr);		
		X.domain([xr[0]/lx*ly,xr[1]/lx*ly]);
	} else {
		Y.domain([yr[0]/ly*lx,yr[1]/ly*lx]);
		X.domain(xr);		
	}
	
}

const initialize = (display,config) => {

	W = config.display_size.width;
 	H = config.display_size.height;

 	X.range([config.display_margin.left,W - config.display_margin.right]); Y.range([H - config.display_margin.bottom,config.display_margin.top]);
	
	scaletocanvas();
	
	ctx = display.node().getContext('2d');
 	ctx.clearRect(0, 0, W, H);
	
	each(links,d=>{
		ctx.beginPath();
		ctx.moveTo(X(d[0].x), Y(d[0].y));
		ctx.lineTo(X(d[1].x), Y(d[1].y));
		ctx.lineWidth = Math.exp(thickness(d[0].depth));
		ctx.lineCap = "round"
		ctx.strokeStyle = palette.pen();
		ctx.stroke();
	})

};

const update = (display,config) => {
	scaletocanvas();
	
	ctx = display.node().getContext('2d');
 	ctx.clearRect(0, 0, W, H);
	
	each(links,d=>{
		ctx.beginPath();
		ctx.moveTo(X(d[0].x), Y(d[0].y));
		ctx.lineTo(X(d[1].x), Y(d[1].y));
		ctx.lineWidth = Math.exp(thickness(d[0].depth));
		ctx.lineCap = "round"
		ctx.strokeStyle = palette.pen();
		ctx.stroke();
	})
	
}


export {initialize,update}
