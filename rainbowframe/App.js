"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/Item';

var colors = ['red','green','blue','yellow','black','white','orange'];

ReactDOM.render(
  <Item
  colors = {colors}
  >
    Something
  </Item>
  , document.getElementById('container') 
);

