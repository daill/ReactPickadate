# ReactPickadate

## About

This little file has been created to provide the materializecss pickadate implementation to React.js. In my case I had to mock the opening event to make it work. Feel free to use it.

## Usage

Just include this and create the element via ES6 syntax

```javascript
var picker = <ReactPickadate id="someId" onChange={this.onChange.bind(this)} classNames="my_fancy_css_class" value={this.state.value}/>;

```