import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
//import Link from '@material-ui/core/Link';
//import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Reservation from './Reservation';
import About_Activity from './About_Activity';
import Home from './Home';
import Notice from './Notice';
import ReactPlayer from 'react-player';




const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    borderBottom: '1px dotted lightgray'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://www.casadecampo.com.do/wp-content/uploads/2019/03/aerial-minitas-beach-shoreline.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: 'lightgray',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    //border: 'px solid black',
  },
  Linkcss: {
    textDecoration: 'none',
    color:'black',
  },
  aa: {
    textDecoration: 'none',
    color:'black'
  },
  youtubeplay: {
    align:'center'
  }
}));


const sections = [
  {
    title:'홈',
    LinkT:'Home'
  },
  {
    title:'액티비티',
    LinkT:'About_Activity'
  },
  {
    title:'예약하기',
    LinkT:'Reservation'
  },
  {
    title:'공지',
    LinkT:'Notice'
  }
];

const social = [
  {
    kind: 'KakaoTalk',
    Linkto: 'https://pf.kakao.com/_xlvrxlxl'
  },
  {
    kind: 'Instagram',
    Linkto: 'https://www.instagram.com/comma_gh/'
  }
];

componentDidMount(){
  this._dbTest();
}


export default function Blog() {
  const classes = useStyles();

  componentDidMount(){
    this._dbTest();
  }

  _dbTest = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data)
  }

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Router>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link to={section.LinkT} className={classes.Linkcss}>
              <h2>{section.title}</h2>
            </Link>   
          ))}
        </Toolbar>
        
        <main>
          <Route path="/Home" component={Home} />
          <Route path="/Reservation" component={Reservation} />
          <Route path="/About_Activity" component={About_Activity} />
          <Route path="/Notice" component={Notice} />

          <Grid container spacing={5} className={classes.mainGrid}>
            <ReactPlayer url='https://www.youtube.com/watch?v=oYOVyCN06GU&t' playing controls loop width="100%" height="600px"/>
          </Grid>

        </main>
        </Router>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid item xs={12}>
              <Typography variant="h5" gutterBottom className={classes.sidebarSection} align="center">
                Social
              </Typography>
              {social.map(network => (
                <div align="center">
                  <a href={network.Linkto} className={classes.aa}> {network.kind} </a>
                </div>
              ))}
            </Grid>
          {/* <Copyright /> */}
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}