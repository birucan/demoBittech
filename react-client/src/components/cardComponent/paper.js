import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="display3" component="h1" align= "center">
          What are cryptocurrencies.
        </Typography>
        <Typography component="p" variant="body3">
        Cryptocurrencies, also often referred to as coins, are digital currencies that are secured through one-way cryptography, the enciphering and deciphering of messages in secret code or cipher. Many of them rely on public blockchain technology—a distributed ledger of all transactions that is decentralized and unable to be changed under most circumstances as long as nobody controls more than 50% of the computing power on the network.

Unlike traditional currencies, they are not controlled by any central government or authority. In the case of some of them (Bitcoin, Monero, and Litecoin for example), the supply of new coins is controlled by a process called mining, a computationally intensive process where computers (mining nodes) compete against each other to secure the network by solving mathematical equations, collecting bitcoins as a reward if they are the first to create a new valid block, which is then broadcasted to the rest of the network and added to the blockchain.

Other coins are pre-mined, where the mining occurs before the public launch of the coin. Pre-mined coins are sometimes viewed in a negative light as they are often heavily promoted to increase demand and drive up the price, allowing developers to cash out.

Since many of them have been created as open-source software, they continue to evolve as developers work to implement solutions to address problems that arise. Some of the common problems include scalability and security issues.
        </Typography>
        <li className="navButton"><Link to="">
          <Button variant="raised" color="primary">
            back
          </Button>
        </Link></li>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
