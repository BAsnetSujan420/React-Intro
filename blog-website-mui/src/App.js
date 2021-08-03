import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import {
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import FeaturedPost from "./components/FeaturedPost";
import { featuredPosts, sidebar } from "./data/Data";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  MainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.MainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer title="Footer" description="This is footer" />
    </ThemeProvider>
  );
}

export default App;
