"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/Item';

var str = 'Short<br>text<br>with<br/>breaks<br />.';


ReactDOM.render(
  <Item text = {str}/>
  , document.getElementById('container') 
);

