var GoodsBlock = React.createClass({

    propTypes: {
        category: React.PropTypes.string.isRequired,
      },

    getInitialState : function () {
        return {
            selected:null,
            items:this.props.goods
        }
    },

    deleteItem : function (code) {
       // console.log(code)
        var items = [];
        this.state.items.splice();
            for(var i=0;i<this.state.items.length;i++) {
                if(this.state.items[i].code!==code){
                    items[items.length] = this.state.items[i];
                }
            }
        this.setState({items:items})
    },

    selectItem : function (code) {
      //  console.log(code);
        this.setState({selected:code});
    },

      render : function() {
        var goods = this.state.items.map(value =>
          React.createElement(Good,{
              name:value.name,
              price:value.price,
              url:value.url,
              count:value.count,
              code:value.code,
              key:value.code,
              selected:this.state.selected,
              cbselectItem:this.selectItem,
              cbdeleteItem:this.deleteItem
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