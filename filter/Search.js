var Search = React.createClass({
    displayName: 'Search',

    propsTypes : {
        defval: React.PropTypes.string
    },

    render : function () {
        return React.DOM.input({type:'text',defaultValue:this.props.defval});
    }
});