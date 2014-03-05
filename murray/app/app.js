"use strict";

document.addEventListener('DOMContentLoaded', function() {
	//d3.select('body').append('p').text('new paragraph!');

	var dataset
		// = [5, 10, 15, 20, 25];
		// = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
        //     14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
        //     24, 18, 25, 9, 3 ];
        = [];
    for (var i = 0; i < 25; ++i) {
    	dataset.push(Math.round(Math.random() * 30));
    }

	d3.select('.my-bar-chart')
		.selectAll('div')
		.data(dataset) // this is what makes the code respond to the differen data sets
		.enter()
		.append('div')
		.classed('bar', true)
		.style('height', function(d) {
			return d*5 + 'px';
		});

	var dataOverlapRects = [[0,-10,'red'],[10,10,'orange'],[20,30,'yellow'],[30,50,'green'],[40,70,'blue']];

	d3.select('.layered-svg')
		.selectAll('rect')
		.data(dataOverlapRects)
		.enter()
		.append('rect')
		.classed('first', true)
		.attr('width', 20)
		.attr('height', 35)
		.attr('x', function(d) { return d[0]; })
		.attr('y', function(d) { return d[1]; })
		.attr('fill', function(d) { return d[2]; });

	d3.select('.layered-svg')
		.selectAll('rect.second')
		.data(dataOverlapRects)
		.enter()
		.append('rect')
		.classed('second', true)
		.attr('width', 75)
		.attr('height', function(d) { return 10 + d[0] * 1.25 })
		.attr('x', function(d) { return d[1] * 3 - 30; })
		.attr('y', function(d) { return d[0] + 10; })
		.attr('opacity', 0.5)
		.attr('fill', function(d) { return d[2]; });

	var createdSvg = d3.select('.my-svg')
		.append('svg')
		.classed('created-svg', true)
		.attr('width', 300)
		.attr('height', 200);

	var ds2 = [5,10,15,20,25];
	
	var circles = createdSvg.selectAll('circle')
		.data(ds2)
		.enter()
		.append('circle');

	circles
		.attr('cx', function(d,i) {
			// the 2nd parameter in the callback is index
			return i * 50 + 25;
		})
		.attr('cy', 25)
		.attr('r', function(d) {
			return d;
		});

	circles
		.attr('fill', 'yellow')
		.attr('stroke', 'orange')
		.attr('stroke-width', function(d) {
			return d / 2;
		});

	// bar chart
	var width = 500,
		height = 150,
		barPadding = 1;

	var svgBarChart = d3.select('.my-svg')
		.append('svg')
		.classed('bar-chart', true)
		.attr('width', width)
		.attr('height', height);

	var barWidth = (width / dataset.length - barPadding);
	var barHeightScale = 4;

	var bars = svgBarChart.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect');

	//add basics: position and dimension
	bars
		.attr('x', function(d, i) { 
			return i * (width / dataset.length);
		 })
		.attr('y', function(d) {
			return height - d * barHeightScale;
		})
		.attr('width', barWidth)
		.attr('height', function(d) {
			return d * barHeightScale;
		});

	//add some colour
	bars
		.attr('fill', function(d) {
			return 'rgb(0,0,'+d*7+')';
		});

	//add some labels
	var barLabels = svgBarChart.selectAll('text')
		.data(dataset)
		.enter()
		.append('text');

	barLabels
		.text(function(d) {
			return d;
		})
		.attr('x', function(d,i) {
			// return i * width / dataset.length;
			return i * width / dataset.length
				+ 0.5 * (width / dataset.length - barPadding);
		})
		.attr('y', function(d) {
			// return height - d * barHeightScale + 15;
			return height - d * barHeightScale + 14;
		})
		.attr('font-family', 'sans-serif')
		.attr('font-size', '11px')
		.attr('fill', 'white')
		.attr('text-anchor', 'middle');

	var scatterDataSet =[
			[ 5,     20 ],
			[ 480,   90 ],
			[ 250,   50 ],
			[ 100,   33 ],
			[ 330,   95 ],
			[ 410,   12 ],
			[ 475,   44 ],
			[ 25,    67 ],
			[ 85,    21 ],
			[ 220,   88 ]
		];

	var svgScatter = d3.select('.my-svg')
		.append('svg')
		.classed('scatter-plot', true)
		.attr({
			width: width,
			height: height
		});

	var scatterCircles = svgScatter
		.selectAll('circle')
		.data(scatterDataSet)
		.enter()
		.append('circle');

	//basics: positions
	scatterCircles
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		})
		.attr('r', function(d) {
			return Math.sqrt(height - d[1]);
		});

	// add labels
	var scatterLabels = svgScatter.selectAll('text')
		.data(scatterDataSet)
		.enter()
		.append('text');

	scatterLabels
		.text(function(d) {
			return ''+d[0]+','+d[1];
		})
		.attr('x', function(d) {
			return d[0];
		})
		.attr('y', function(d) {
			return d[1];
		})
		.attr({
			'font-family': 'sans-serif',
			'font-size': '11px',
			fill: 'red'
		});
});

