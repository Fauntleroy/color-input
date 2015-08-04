import './index.css';

import React from 'react';

var App = React.createClass({
    getInitialState: function(){
        return {};
    },
    render: function(){
        var displayStyle = {
            backgroundColor: this.state.color
        };
        return (
            <div className="app">
                <input
                    className="color"
                    type="text"
                    placeholder="Enter a color or code"
                    value={this.state.color}
                    onChange={this._onInputChange}
                />
                <div className="color-display" style={displayStyle}></div>
            </div>
        );
    },
    _onInputChange: function( event ){
        this.setState({
            color: event.target.value
        });
    }
});

document.addEventListener( 'DOMContentLoaded', function(){
    React.render( <App />, document.body );
});