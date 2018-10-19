import React from 'react';
import PropTypes from 'prop-types';

import './good.css';

class Good_card extends React.Component{

    static propTypes = {
        goods:PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
                code: PropTypes.number,
            })
        ),
    };

    render () {
        return (
            <div key={this.props.code}>
                <div className="wrap">
                    <h3 className="name">{this.props.name}</h3>
                    <img src={this.props.url} className="img" alt=""/>
                    <div className="description">
                        <span className="price col-6">Цена: {this.props.price}</span>
                        <span className="count col-6">Количество: {this.props.count}</span>
                    </div>
                </div>
            </div>
        );

    }
}

export default Good_card;