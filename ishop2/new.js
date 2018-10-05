var New = React.createClass({

    propTypes : {
        id: React.PropTypes.number,
        cbcancel: React.PropTypes.func,
        cbnameChange: React.PropTypes.func,
        cbpriceChange: React.PropTypes.func,
        cburlChange: React.PropTypes.func,
        cbcountChange: React.PropTypes.func,
    },


    nameChange: function (eo) {
        this.props.cbnameChange(eo.target.value);
    },

    priceChange: function (eo) {
        this.props.cbpriceChange(eo.target.value);
    },

    urlChange: function (eo) {
        this.props.cburlChange(eo.target.value)
    },

    countChange: function (eo) {
        this.props.cbcountChange(eo.target.value)
    },


    cancelNew : function () {
        this.props.cbcancel();
    },

    addNew : function () {

    },

    render:function () {

        console.log(this.props.name);

        return React.DOM.div({className:"container"},
            React.DOM.div({className:"row"},'Добавление элемента'),
            React.DOM.div({className:"row d-flex flex-column inputs"},
                // React.DOM.div("ID:" + this.props.id),
                React.DOM.label(null,"Название",
                    React.DOM.input({type:'text',onChange:this.nameChange})),
                React.DOM.label(null,"Цена",
                    React.DOM.input({type:'text',onChange:this.priceChange})),
                React.DOM.label(null,"Картинка",
                    React.DOM.input({type:'text',onChange:this.urlChange})),
                React.DOM.label(null,"Количество",
                    React.DOM.input({type:'text',onChange:this.countChange}))
            ),

            React.DOM.div({className:"row"},
                React.DOM.button({className:"btn btn-success",onClick:this.addNew},"Добавить"),
                React.DOM.button({className:"btn btn-danger",onClick:this.cancelNew},"Отмена")
            )
        );
    }
});