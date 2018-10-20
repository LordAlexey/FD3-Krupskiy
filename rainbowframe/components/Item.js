import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {

    static propTypes = {
    //    colors:PropTypes.arrayOf("string"),
    };

    render () {

        if(this.props.colors.length===1)
        return (
            <div style={{borderColor:this.props.colors[0],borderStyle:"solid"}}>
                {this.props.children}
            </div>
        );
    else {
        var colors = this.props.colors.slice(1);
        console.log(colors)
            return (
                <div style={{borderColor:this.props.colors[0],borderStyle:"solid"}}>
                    <Item colors = {colors}>
                        Something
                    </Item>
                </div>
            );
        }

    }

}

export default Item;