var Edit = React.createClass({

    propTypes : {
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                count: React.PropTypes.number.isRequired,
                id: React.PropTypes.number,
                cbcancel: React.PropTypes.func
    },

    cancelEdit : function () {
        this.props.cbcancel();
    },

    render:function () {

        console.log(this.props.name);

        return React.DOM.div({className:"container"},
            React.DOM.div({className:"row"},'Редактирование элемента'),
            React.DOM.div({className:"row d-flex flex-column inputs"},
               // React.DOM.div("ID:" + this.props.id),
                React.DOM.label(null,"Название",
                    React.DOM.input({type:'text',defaultValue:this.props.name})),
                React.DOM.label(null,"Цена",
                    React.DOM.input({type:'text',defaultValue:this.props.price})),
                React.DOM.label(null,"Картинка",
                    React.DOM.input({type:'text',defaultValue:this.props.url})),
                React.DOM.label(null,"Количество",
                    React.DOM.input({type:'text',defaultValue:this.props.count}))
                ),
            React.DOM.div({className:"row"},
                React.DOM.button({className:"btn btn-success"},"Сохранить"),
                React.DOM.button({className:"btn btn-danger",onClick:this.cancelEdit},"Отмена")
                )
            );
    }
});