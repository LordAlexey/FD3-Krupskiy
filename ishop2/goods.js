var GoodsBlock = React.createClass({

    propTypes: {
        category: React.PropTypes.string.isRequired,
      },

    getInitialState : function () {
        return {
            selected:null,
            items:this.props.goods,
            mode:'button',
            editData:null,
            lastKey:this.props.goods.length
        }
    },

    cancel: function () {
        this.setState({mode:'button'})
    },

    addForm : function () {
        this.setState({mode:'new'})
    },

    editItem : function (data) {
       // console.log(data);
        this.setState({mode:'edit',editData:data})
    },

    nameChange: function (text) {
        this.setState({new:{name:text}});
    },

    priceChange: function (text) {
        this.setState({new:{price:text}});
    },

    urlChange: function (text) {
        this.setState({new:{url:text}});
    },

    countChange: function (text) {
        this.setState({new:{count:text}});
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
       // console.log(this.state.editData);

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
              cbdeleteItem:this.deleteItem,
              cbeditItem:this.editItem
          })
      )
            console.log(
               // this.props.goods
               // goods
                );

          var Under;
          if(this.state.mode==='button')
              Under =  React.DOM.div({className:'btn btn-primary new',onClick:this.addForm},"Новый товар");

          if(this.state.mode==='edit')
              Under = React.createElement(Edit,{
                  id:this.state.editData.code,
                  name:this.state.editData.name,
                  price:this.state.editData.price,
                  url:this.state.editData.url,
                  count:this.state.editData.count,
                  cbcancel:this.cancel
              });

          if(this.state.mode==='new')
              Under = React.createElement(New,{
                  id:(this.state.lastKey+1),
                  cbcancel:this.cancel
              });

           return React.DOM.div({className:"container"},
           React.DOM.div({className:"row"},
           React.DOM.h1({className:"title"}, this.props.category)
           ),
           React.DOM.div({className:"row all-goods"},
           goods,Under
      ));
      }
});