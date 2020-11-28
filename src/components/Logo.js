import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { Typography, makeStyles } from '@material-ui/core';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const useStyles = makeStyles(() => ({
  root: {
    color: '#FFFFFF'
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

const Logo = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <WhiteTextTypography 
      variant="h3" 
      gutterBottom>
    Newport Carriers
  </WhiteTextTypography>
    // <img
    //   alt="Logo"
    //   src="/static/logo.svg"
    //   {...props}
    // />
  );
};

Logo.propTypes = {
  className: PropTypes.string
};
export default Logo;
