import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Paper from '../cardComponent/paper.js';
import Grid from 'material-ui/Grid';

class CryptoPage extends Component {



  render() {
    return (

      <div>
        

        <Grid container spacing={24}>
          <Grid item xs>
            <Paper/>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default CryptoPage;
