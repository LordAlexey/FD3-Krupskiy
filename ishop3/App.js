"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Goods from './components/Goods';

import './components/style.css';

//let questionText='Как вы относитесь к программированию?';
//let answersArr=require('./answers.json');
//let defaultFreeAnswerText="???";

let goods = require('./goods.json');
let errors = require('./errors.json');

ReactDOM.render(
  <Goods
    category="Все товары" goods={goods}
    errors={errors}
  />
  , document.getElementById('container') 
);

