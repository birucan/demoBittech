import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';


const styles = {
  card: {
    maxWidth: 700,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Test(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://image.freepik.com/free-vector/investment-background-design_1223-114.jpg"
          title="products bb"
        />
        <CardContent>
          <Typography gutterBottom variant="display2" component="h2">
            Example cdt product
          </Typography>
          <Typography component="h1" variant="caption">
            This is a 500 Tether investment with a undefined profit and time.
          </Typography>
        </CardContent>
        <CardActions>
        <Button target="_blank" href="https://commerce.coinbase.com/checkout/e297bea9-3ded-4e12-a33a-5a73927042d5">Go to checkout</Button>

        </CardActions>
      </Card>
    </div>
  );
}

Test.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Test);
