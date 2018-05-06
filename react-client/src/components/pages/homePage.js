import React, { Component } from 'react';
import SimpleMediaCard from '../cardComponent/card.js';
import Test from '../cardComponent/card0.js';
import Grid from 'material-ui/Grid';
class HomePage extends Component {



  render() {
    return (

      <div>
        <Grid container spacing={2} justify="center" alignContent="center" alignItems="center" align="center" >
          <Grid item xs>
        <SimpleMediaCard style={{padding: '10px 10px 10px 10px'}}/>

        </Grid>

        <Grid item xs>
      <Test style={{padding: '10px 10px 10px 10px'}}/>

      </Grid>

      </Grid>

      </div>
    )
  }
}

export default HomePage;
