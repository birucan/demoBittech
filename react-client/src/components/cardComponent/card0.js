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
          image="http://downloadicons.net/sites/default/files/shipping-icon-63169.png"
          title="products bb"
        />
        <CardContent>
          <Typography gutterBottom variant="display2" component="h2">
            CDT Products
          </Typography>
          <Typography component="h1" variant="caption">
            Here you can find our CDT products to safetly invest your cryto-currencies at a standard rate.
          </Typography>
        </CardContent>
        <CardActions>
          <li className="navButton"><Link to="/product">
          <Button size="Big" color="primary">
            Learn More
          </Button>
          </Link></li>
        </CardActions>
      </Card>
    </div>
  );
}

Test.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Test);
