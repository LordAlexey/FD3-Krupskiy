var ListBlock = React.createClass({
    displayName:'ListBlock',
    propTypes : {
        list:React.PropTypes.arrayOf (
            React.PropTypes.shape({
                text: React.PropTypes.string.isRequired,
                key: React.PropTypes.number.isRequired,
            })
        )
    },

    render : function () {
        var list = [];

        this.props.list.forEach(function (item,key) {
            list[key] = React.DOM.option(
                {
                    key:item.key,
                },
                item.text
                )
        })



        console.log(
           // list
        )

        return React.DOM.div (
            null,
            React.createElement(Sort,{defval:0}),
            React.createElement(Search,{defval:''}),
            React.DOM.select(
                {className:'list',multiple:'true'},
                list
            )
        )



    },



});