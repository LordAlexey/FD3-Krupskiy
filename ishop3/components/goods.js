import React from 'react';
import PropTypes from 'prop-types';

import Good from  './Good';
import Edit from  './Edit';
import New from  './New';

//import './goods.css';

class Goods extends  React.Component{

   static propTypes = {
        category: PropTypes.string.isRequired,
      };

    state = {
            selected:null,
            items:this.props.goods,
            mode:'button',
            editData:null,
            lastKey:this.props.goods.length+1,
            editKey:1,
            errorName:null,
            errorPrice:null,
            errorUrl:null,
            errorCount:null,
    };

    cancel= ()=> {
        this.setState({mode:'button'})
    };

    addForm = () => {
        this.setState({mode:'new'})
    };
    //
    editItem = (data)=>{
       // console.log(data);
        this.setState({mode:'edit',editData:data})
    };

    nameChange = (text)=> {
        this.setState({form:{name:text}});
    };

    priceChange = (text)=> {
        this.setState({form:{price:text}});
    };

    urlChange=(text)=> {
        this.setState({form:{url:text}});
    };

    countChange= (text)=> {
        this.setState({form:{count:text}});
    };


    addItem = (name,price,url,count) => {
        this.setState({errorName:null});
        this.setState({errorPrice:null});
        this.setState({errorUrl:null});
        this.setState({errorCount:null});

        let create = true;

        if(name.length<1) { this.setState({errorName:true}); create=false;}
        if(price<=0 || isNaN(price)) {this.setState({errorPrice:true});create=false;}
        if(url.length<1){ this.setState({errorUrl:true});create=false;}
        if(count%1!==0 || !count>0 || isNaN(count)) {this.setState({errorCount:true});create=false;}

        if(create) {
            let items = [];
            items = this.state.items;
            items.push({
                name:name,
                price:price,
                url:url,
                count:count,
                code:this.state.lastKey
            });
            this.setState({items:items});
            this.setState({lastKey:this.state.lastKey+1});
            this.setState({mode:'button'});
        }
    };

    saveEdit = (name,price,url,count,code) => {
        this.setState({errorName:null});
        this.setState({errorPrice:null});
        this.setState({errorUrl:null});
        this.setState({errorCount:null});

        let create = true;

        if(name.length<1) { this.setState({errorName:true}); create=false;}
        if(price<=0 || isNaN(price)) {this.setState({errorPrice:true});create=false;}
        if(url.length<1){ this.setState({errorUrl:true});create=false;}
        if(count%1!==0 || !count>0 || isNaN(count)) {this.setState({errorCount:true});create=false;}

        if(create) {
            let items = [];
            items = this.state.items;

            console.log(items);
            for(var i=0;i<items.length;i++) {
                if(items[i].code===code){
                    console.log(items[i]);
                    items[i] = {
                        name:name,
                        price:price,
                        url:url,
                        count:count,
                        code:code
                    };
                    console.log(items[i]);
                }
            }
            this.setState({items:items});
            this.setState({mode:'button'});
        }
    };

    deleteItem = (code) => {
       // console.log(code)
        let items = [];
        this.state.items.splice();
            for(var i=0;i<this.state.items.length;i++) {
                if(this.state.items[i].code!==code){
                    items[items.length] = this.state.items[i];
                }
            }
        this.setState({items:items})
    };
    //
    selectItem = (code) => {
      //  console.log(code);
        this.setState({selected:code});
    };

      render() {
        // console.log(this.state.editData);
         // console.log(this.state.items);
        let goods = this.state.items.map(value =>

            <Good
            name={value.name} price={value.price} url={value.url}
            key={value.code} count={value.count} code={value.code}
            selected={this.state.selected} cbselectItem={this.selectItem}
            cbdeleteItem={this.deleteItem} cbeditItem={this.editItem}
            />
      );

           var Under;
          if(this.state.mode==='button')
              Under = <div className="btn btn-primary new" onClick={this.addForm}>Новый товар</div>;


           if(this.state.mode==='edit')
           {
               Under = <Edit id={this.state.editData.code} name={this.state.editData.name}
                             price={this.state.editData.price} url={this.state.editData.url}
                             count={this.state.editData.count} cbcancel={this.cancel}
                             code={this.state.editKey} errors = {{
                   name: this.state.errorName?this.props.errors.name:null,
                   price: this.state.errorPrice?this.props.errors.price:null,
                   url:this.state.errorUrl?this.props.errors.url:null,
                   count:this.state.errorCount?this.props.errors.count:null
               }}
                             cbsaveEdit={this.saveEdit}
               />
               this.state.editKey+=1;
           }

          if(this.state.mode==='new')
              Under = <New id={this.state.lastKey+1} cbcancel={this.cancel}
                           cbaddItem={this.addItem}
                            errors = {{
                                name: this.state.errorName?this.props.errors.name:null,
                                price: this.state.errorPrice?this.props.errors.price:null,
                                url:this.state.errorUrl?this.props.errors.url:null,
                                count:this.state.errorCount?this.props.errors.count:null
                            }}
                        //   name={this.state.form.name}
                         //  price={this.state.form.price}
                          // url={this.state.form.url}
                         //  count={this.state.form.count}
              />

          return (
              <div className="container">
                  <div className="row">
                      <h2 className="title">{this.props.category}</h2>
                  </div>
                  <div className="row all-goods">
                      {goods}{Under}
                  </div>
              </div>
          );

      }
}

export default Goods;