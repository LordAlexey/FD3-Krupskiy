import React from 'react';
import PropTypes from 'prop-types';

import './good.css';

class Good extends React.Component{

   static propTypes = {
        goods:PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
                code: PropTypes.number,
                cbselectItem:PropTypes.func,
                selected:PropTypes.bool,
                cbdeleteItem:PropTypes.func,
                cbeditIdem:PropTypes.func,
            })
        ),
    };
    //
    itemClick = () => {
        this.props.cbselectItem(this.props.code);
       // console.log(this.props.code)
    };
    //
    deleteItem = () =>{
        if(confirm("Действительно удалить?"))
        this.props.cbdeleteItem(this.props.code);
    };

    editItem = () => {
        this.props.cbeditItem(this.props);
        //console.log(this.props)
    };

    render () {
        return (
            <div key={this.props.code} className={(this.props.selected===this.props.code)?'good col-4 sel':'good col-4'} onClick={this.itemClick}>
                <div className="wrap">
                    <h3 className="name">{this.props.name}</h3>
                    <img src={this.props.url} className="img" alt=""/>
                    <div className="description">
                        <span className="price col-6">Цена: {this.props.price}</span>
                        <span className="count col-6">Количество: {this.props.count}</span>
                    </div>
                    <div className="buttons">
                        <div className="btn btn-danger" onClick={this.deleteItem}>Удалить</div>
                        <div className="btn btn-primary" onClick={this.editItem}>Редактировать</div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Good;