import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import {Toolbar, Box, Fab} from '@material-ui/core'
import {Card, CardActionArea, CardContent, CardMedia, Typography, Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import {animateScroll as Scroll, Link, Element, scrollSpy} from 'react-scroll'
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors'
import {Intro} from './components/Intro'
import BgImg from './bgimg.jpg'
import { Faqs } from './components/Faqs'
import {Faq} from './components/Faq'
const styles = theme => ({
  root: {
    position: 'relative',
    minHeight: 200,
    // backgroundImage: BgImg,
    // backgroundColor: '#666',
    margin:0,
    padding:0
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
})


class TabBar extends Component {
  constructor(props) {
    super(props);
    let result = []
    
    for(let i = 0; i<1000;i++){
      result.push(<h2>{i}</h2>)
    }
    this.state = {
      value: 0,
      result
    }
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
  scrollToTop = () => {
    Scroll.scrollToTop();
  }
  render() {
    // const classes = useStyles();
    
    let fab =  {
      color: 'inherit' ,
      
      icon: <UpIcon />,
      label: 'Expand'
    }
    const { classes } = this.props;
    return (

      <div className={{
        flexGrow: 1,
        backgroundColor: 'red'
      }}>
        <AppBar position="sticky" style={{overflowX:'hidden'}}>
          <Toolbar>
            
            <Box flexGrow={1}>
              <Typography variant="h6" >
                SPEC
              </Typography>
            </Box>
            <Box >
              <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                <Tab label="SPEC 소계" {...this.a11yProps(0)} />
                <Tab label="FAQ" {...this.a11yProps(1)} />
                <Tab label="투자소식구독" {...this.a11yProps(2)} />
              </Tabs>
            </Box>
           
          </Toolbar>
        
        </AppBar>
        <Box className={classes.root}>
     
          
            <TabPanel value={this.state.value} index={0} >
              <Intro/>
              <Fab aria-label={fab.label} color={fab.color}
              onClick={() => this.scrollToTop()} className={ classes.fab}>
                {fab.icon}
              </Fab>
            </TabPanel>
          
            <TabPanel value={this.state.value} index={1}>
              <Faqs/>
            </TabPanel>
       
            <TabPanel value={this.state.value} index={2}>
              <Faq/>
              Item Three
            </TabPanel>
            
            
            
   
        
        </Box>
       
      </div>
    );
  }
}
export default withStyles(styles)(TabBar);