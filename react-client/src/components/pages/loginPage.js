import React, { Component } from 'react';
import { Link } from 'react-router';
import  Card  from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
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

class LoginPage extends Component {



  render() {
    return (

      <div style={divStyle}>

<Grid  container spacing={24} alignContent="center" alignItems="center" align="center" justify="center">
   <Grid item xs={6}>
        <Card className="container" style={divStyle2}>
          <h2 className="card-heading" style={{padding: '30px 30px 30px 10px', align: 'center'}}>Login</h2>

          <div className="field-line">
          <h4 className="card-1" style={{padding: '30px 30px 30px 10px', align: 'center'}}>Email</h4>
            <TextField
              floatingLabelText="Email"
              name="email"
            />
          </div>

          <div className="field-line">
          <h4 className="card-1"style={{padding: '30px 30px 30px 10px', align: 'center'}}>Password</h4>
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
            />
          </div>

          <div className="button-line" style={{padding: '30px 30px 30px 10px', align: 'center'}}>
          <Button variant="raised" color="secundary">
            Login
          </Button>
          </div>


          <div className="button-line" style={{padding: '30px 30px 30px 10px', align: 'center'}}>
          Dont have an account?  Create one
          </div>
        </Card>
        </Grid>
</Grid>
      </div>

    )
  }
}

export default LoginPage;
