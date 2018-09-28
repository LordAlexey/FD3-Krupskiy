var Sort = React.createClass({
    displayName: 'Sort',

    propsTypes : {
        defval: React.PropTypes.number
    },

    render : function () {

        return React.DOM.input({type:'checkbox'});
    }
});