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
- often we might need to bind data to DOM elements that do not exist, and create them on the fly
	- this is because we do not know the number of elements that will be needed in a dataset with a variable number of elements
	- `d3.enter()` solves this problem
		- creates a placeholder, and allows you to insert elements on the fly
- R-click and inspect element on the newly created nodes
	- nothing is present in the DOM
- Now eneter the following into the console
	- `d3.selectAll('p')[0][0].__data__`
	- `d3.selectAll('p')[0][1].__data__`
	- etc... we see that the data has actually been saved against the elements
- Another way: R-clickand select element on one of the paragraphs
	- now in the console enter `$0.__data__`
	- In chrome dev tools, `$0` refers to the last selected element

## using your data

- when you call `d3.data(..)`
	- in any of the subsequent methods along the chain of d3 calls it makes available
	- an anonymous function that gets passed the data for the current object as its first argument
	- various d3 functions taken it a single argument
		- if that argument is a primitive, it will simply be used as is
		- that argument is a function instead, the function will be called with the data ofthe current element, and thevalue returned by the function will be used instead

## drawing divs

- to add a class to an element, use `d3.attr(..)`
- to add a style to an element, use `d3.style(..)`
- for display properties
	- classes should be set using `attr(..)` for setting properties that are shared between multiple elements
	- styles should be set using `style(..)` when setting display properties that are specific to single elements
- there is a convenienced method that can be used to toggle classes
	- `d3.classed('className', trueOrFalse)`
- use a combination of `attr`, `style`, and `classed`, to achieve binding between the data set and the DOM

## the power of data()

- you can throw different data sets at the same d3 code, and it will work
- the `data(..)` function is responsbile for this

## an SVG primer

- d3 is most useful when used to generate and manipulate SVG visuals
	- HTML elements are a little unwieldy for data visualisations
	- vector drawing programs, such as SVG, are much better suited
- the svg element can be defined using markup similar to HTML
	- however, note that some element do not have a closing tag, and are "self closing"
	- e.g. `<element />`
	- the root element is an `<svg>` tag
- svg provides a means to draw using a coordinate system
	- the options available are simple shapes (rect, circle, ellipse, line), text, and path (for complex shapes)
	- elements within svg can be styled using either CSS, or inline
		- all elements: fill, stroke, stroke-width, opacity
		- text: font-family, font-size
- you can apply styles to elements within svg using CSS selectors
- when you programmatically add svg elements, use `attr` to add properties 
