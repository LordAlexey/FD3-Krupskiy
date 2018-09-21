var GoodsBlock = React.createClass({

    propTypes: {
        category: React.PropTypes.string.isRequired,
        goods: React.PropTypes.array.isRequired,
        
        goods:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired,
            count: React.PropTypes.number.isRequired,
            code: React.PropTypes.number,
          })
        )
      },

      render : function() {
        var goods = [];
       this.props.goods.forEach(function(item,key){
               // console.log(item.name)
            goods[key] = React.DOM.div({
                   key:item.code,className:"good col-4"
                },
                  React.DOM.div({className:"wrap"},
                    React.DOM.h3({className:"name"},item.name),
                      React.DOM.img({className:"img",src:item.url}),
                      React.DOM.div({className:"description"},
                        React.DOM.span({className:"price col-6"},"Цена: " + item.price),
                        React.DOM.span({className:"count col-6"},"Количество: " + item.count),
                      )
                    
                  )
                )
            })

            console.log(
               // this.props.goods
               // goods
                );
                    
           return React.DOM.div({className:"container"},
           React.DOM.div({className:"row"},
           React.DOM.h1({className:"title"}, this.props.category),
           ),
           React.DOM.div({className:"row all-goods"},
           goods
      ));


      }
});