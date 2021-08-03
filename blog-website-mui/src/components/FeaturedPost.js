import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { mainFeaturedPost } from "../data/Data";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  cover: {
    backgroundImage: `url(
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "35px 25px",
  },
  btn: {
    color: "skyblue",
  },
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          {mainFeaturedPost.title}
        </Typography>
        <Typography variant="h5">{mainFeaturedPost.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" className={classes.btn}>
          {mainFeaturedPost.linkText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
