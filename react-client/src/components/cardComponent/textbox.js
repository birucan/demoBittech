import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;

  return (


      <div className={classes.margin}>

          <Paper className={classes.paper}>
            <AccountCircle />

            <TextField id="input-with-icon-grid" label="Username" />


          </Paper>


      </div>

  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);
