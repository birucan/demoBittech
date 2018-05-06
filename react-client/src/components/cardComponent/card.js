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

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://bitcoin.org/img/icons/opengraph.png"
          title="crypto bb"
        />
        <CardContent>
          <Typography gutterBottom variant="display2" component="h2">
            Crypto-Currencies
          </Typography>
          <Typography component="h1" variant="caption">
            The crypto-currency market is a profitable investment.
             Here are some of the basics you should probably know about before investing in the
            world of crypto-currencies.
          </Typography>
        </CardContent>
        <CardActions>
          <li className="navButton"><Link to="/crypto">
          <Button size="Big" color="primary">
            Learn More
          </Button>
          </Link></li>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
