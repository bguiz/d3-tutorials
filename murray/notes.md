# D3 tutorials

Following along [this tutorial] by Scott Murray.

## Fundamentals

- d3 requires you to know: HTML, DOM, CSS, Javascript, Browser Dev Tools
- optinally requires you to know SVG (scalable vector graphics)

## setup

- wget http://d3js.org/d3.v3.js
	- or wget http://d3js.org/d3.v3.min.js
	- or git clone git@github.com:mbostock/d3.git
- put the d3 source within a lib/d3 subfolder
- then create a HTML file and use a script tage to reference it
- then start a simple web server to view it in browser, e.g.
	- python -m SimpleHTTPServer

## adding elements

- chainable syntax
	- e.g. `d3.select("body").append("p").text("New paragraph!");`
- since we are including the script instead of inlining it, we need to ensure that it is only run when 'DOMContentLoaded' is fired.

## chaining syntax

- chaining methods allow us to perform several actions in a single line of code
- a deconstruction
	- `d3.select("body").append("p").text("New paragraph!");`
	- `d3` global object for d3
	- `.select(..)`, `.append(..)`, and `.text(..)`
		- each of these do something to the DOM, and return a d3 object that wraps around the actual return value
		- this wrapping allows the chaining to occur
- important to note that the order of chaining matters

## binding data

- mapping visual properties to data attributes
	- that is what data visualisation is
- in d3 binding is the process of attaching specific data attributes to specific DOM elements
	- done using `selection.data()`, some data, and some DOM elements
- d3 can handlemany different data formats"
	- JS arrays, JS objects, JSON, GeoJSON, CSV
