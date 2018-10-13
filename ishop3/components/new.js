import React from 'react';
import PropTypes from 'prop-types';

class New extends React.Component{

   static propTypes = {
       name: PropTypes.string,
       price: PropTypes.number,
       url: PropTypes.string,
       count: PropTypes.number,
        id: PropTypes.number,
        cbcancel: PropTypes.func,
        cbnameChange: PropTypes.func,
        cbpriceChange: PropTypes.func,
        cburlChange: PropTypes.func,
        cbcountChange: PropTypes.func,
       cbaddItem: PropTypes.func,
    };

    nameChange = (eo) => {
      //  this.props.cbnameChange(eo.target.value);
    };

    priceChange =  (eo) => {
     //   this.props.cbpriceChange(eo.target.value);
    };

    urlChange= (eo)=> {
       // this.props.cburlChange(eo.target.value)
    };

    countChange= (eo)=> {
      //  this.props.cbcountChange(eo.target.value)
    };


    cancelNew = ()=>{
        this.props.cbcancel();
    };

    addNew =() =>{
      this.props.cbaddItem(document.getElementsByName("name")[0]['value'],
        document.getElementsByName("price")[0]['value'],
        document.getElementsByName("url")[0]['value'],
        document.getElementsByName("count")[0]['value']);

    };

    render() {
        console.log(this.props.errors);
        return (
            <div className="container">
                <div className="row">Добавление элемента</div>
                <div className="row d-flex flex-column inputs">
                    <label htmlFor="">Название
                        <input type="text" name="name" onChange={this.nameChange} defaultValue={this.name}/>
                    </label>
                    {
                        this.props.errors.name&&
                        <div className="alert alert-danger">
                            {this.props.errors.name}
                        </div>
                    }
                    <label htmlFor="">Цена
                        <input type="text" name="price" onChange={this.priceChange} defaultValue={this.price}/>
                    </label>
                    {
                        this.props.errors.price&&
                        <div className="alert alert-danger">
                            {this.props.errors.price}
                        </div>
                    }
                    <label htmlFor="">Картинка
                        <input type="text" name="url" onChange={this.urlChange} defaultValue={this.url}/>
                    </label>
                    {
                        this.props.errors.url&&
                        <div className="alert alert-danger">
                            {this.props.errors.url}
                        </div>
                    }
                    <label htmlFor="">Количество
                        <input type="text" name="count" onChange={this.countChange} defaultValue={this.count}/>
                    </label>
                    {
                        this.props.errors.count&&
                        <div className="alert alert-danger">
                            {this.props.errors.count}
                        </div>
                    }
                </div>
                <div className="row">
                    <div className="btn btn-success" onClick={this.addNew}>Добавить</div>
                    <div className="btn btn-danger" onClick={this.cancelNew}>Отмена</div>
                </div>
            </div>
        );

        //         // React.DOM.div("ID:" + this.props.id),
    }
}

export default New;