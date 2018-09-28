var Good = React.createClass({

    propTypes : {
        goods: React.PropTypes.array.isRequired,

        goods:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                count: React.PropTypes.number.isRequired,
                code: React.PropTypes.number,
                cbselectItem:React.PropTypes.func,
                selected:React.PropTypes.bool,
            })
        ),
    },

    itemClick : function () {
        this.props.cbselectItem(this.props.code)
        //console.log(this.props.code)
    },

    render:function () {


        return React.DOM.div({
                key:this.props.code,className:this.props.selected?"good col-4 sel":"good col-4",onClick:this.itemClick,
            },
            React.DOM.div({className:"wrap"},
                React.DOM.h3({className:"name"},this.props.name),
                React.DOM.img({className:"img",src:this.props.url}),
                React.DOM.div({className:"description"},
                    React.DOM.span({className:"price col-6"},"Цена: " + this.props.price),
                    React.DOM.span({className:"count col-6"},"Количество: " + this.props.count)
                )

            )
        )
    }


});