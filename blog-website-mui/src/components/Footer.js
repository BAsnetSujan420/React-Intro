import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));

const Footer = ({ description, title }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          varaint="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©
          <Link color="inherit" href="https://material-ui.com/">
            Blogging Website
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
