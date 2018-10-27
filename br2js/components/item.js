import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {

    static propTypes = {
        text:PropTypes.string
    };
    render () {
        let text = this.props.text.replace(/<br\/>/g,'\n');
        text = text.replace(/<br \/>/g,'\n');
        text = text.replace(/<br>/g,'\n');
     //  let arr = text.split('<br>');
      // console.log(arr);
            return (
                <p>{text}</p>
            );
    }

}

export default Item;