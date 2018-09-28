var GoodsBlock = React.createClass({

    propTypes: {
        category: React.PropTypes.string.isRequired,
      },

    getInitialState : function () {
        return {
            selected:null
        }
    },

    selectItem : function (code) {
        console.log(code);
        this.setState({selected:code});
    },

      render : function() {
        var goods = this.props.goods.map(value =>
          React.createElement(Good,{
              name:value.name,
              price:value.price,
              url:value.url,
              count:value.count,
              code:value.code,
              key:value.code,
              selected:this.state.selected,
              cbselectItem:this.selectItem
          })
      )
            console.log(
               // this.props.goods
               // goods
                );
                    
           return React.DOM.div({className:"container"},
           React.DOM.div({className:"row"},
           React.DOM.h1({className:"title"}, this.props.category)
           ),
           React.DOM.div({className:"row all-goods"},
           goods
      ));


      }
});