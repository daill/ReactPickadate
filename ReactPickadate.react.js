var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');

/**
 * A small es6 class to provide pickadate functionality of materializecss framework combined
 * with react.js.
 * @author Christian Kramer
 */
export default class ReactPickadate extends React.Component {
    constructor(props){
        super(props);
        this.picker = null;
        this.state = {value: this.props.value};
        this.classes = this.props.classNames;

    }

    initPicker(){
        var self = this;
        var inputElement = jQuery(ReactDOM.findDOMNode(this));
        inputElement.pickadate({
            format: 'dd.mm.yyyy',
            formatSubmit: 'dd.mm.yyyy',
            closeOnSelect: true,
            hiddenName: false,
            min: new Date('01.01.2013'),
            max: new Date('01.01.2090'),
            selectYears: true,
            selectMonths: true,
            onOpen: function() {},
            onClose: function() {},
            onRender: function() {},
            onStop: function() {},
            onSet: function(event) {
                if (event.select){
                    // date selected
                    // decide wehter you want to select the date via event or the pickadate hidden field
                    //self.onChange(jQuery('input[name="' + self.props.id + self.suffix + '"]').val());
                    self.onChange(new Date(event.select).toLocaleDateString());
                    self.picker.close();
                }
            }
        });
        if (!this.picker){
            // set picker reference for opening and closing
            this.picker = inputElement.pickadate('picker');
        }
    }

    componentDidMount(){
        // init the date picker
        this.initPicker();
    }

    onChange(date){
        // propagate the change, if there is one
        // since this is a timestamp it's up to you to format it
        this.props.onChange(date);
        this.setState({value: date})
    }

    onClick(){
        // this is the part where we have to open the picker manually
        this.picker.open();
    }

    render(){
        return (<input id={this.props.id} 
            data-value={new Date()} 
            onClick={this.onClick.bind(this)} 
            type="text" 
            className={this.classes} 
            value={this.state.value}/>)
    }
}