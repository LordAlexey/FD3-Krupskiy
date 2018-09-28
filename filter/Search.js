var Search = React.createClass({
    displayName: 'Search',

    propsTypes : {
        defval: React.PropTypes.string,
        cbtextChanged:React.PropTypes.func.isRequired,
    },

    textChanged: function (EO) {
        this.props.cbtextChanged(EO.target.value);
        //console.log(EO.target.value);
    },

    render : function () {
        return React.DOM.input({type:'text',defaultValue:this.props.defval,onChange:this.textChanged});
    }
});