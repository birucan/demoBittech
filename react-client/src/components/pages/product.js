import React, { Component } from 'react';
import { Link } from 'react-router';
import  Card  from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Test from '../cardComponent/cardpro.js';

const divStyle = {
  margin: '40px',
  padding: '5px',
  alignItems: 'center',
  textalign: 'center'
};

const divStyle2 = {
  margin: '15px',
  padding: '10% 1% 10% 30%',
  textalign: 'center'
};

class Product extends Component {



  render() {
    return (

      <div style={divStyle}>

          <Test/>



      </div>

    )
  }
}

export default Product;
