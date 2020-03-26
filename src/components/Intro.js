import React, { Component } from 'react'
import {Paper, Grid, Typography ,Avatar, Container ,Box} from '@material-ui/core'
import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core'
import {withStyles} from '@material-ui/styles'
import './Intro.css'
const styles = theme => ({
  back: {
    justify: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    color:'blue'
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    border: "none",
 
  },
  media: {
    height: 300,
    justify: 'center',
    alignItems: 'center',
  },
  paper: {
    maxWidth: 400,
    justify: 'center',
    alignItems: 'center',
    // margin: `${theme.spacing(1)}px auto`,
    // padding: theme.spacing(2),
  },
  message: {
    ...theme.typography.button,
    backgroundColor: 'red',
    padding: theme.spacing(1),

  }
});

export class Intro extends Component {
  render() {
    let classes = this.props
    let intro_message = "전문가를　위한　특별한　투자　SPEC에서　시작하세요"
    let detail_messages =["전문투자자등록", "계좌개설", "전용상품　투자까지　한번에！","SPEC!"].map( message => {
    return (<Typography component="div" style={{ height: '5vh' }}>{message}</Typography>)} )   
  
    return (
    
      <Grid container spacing={3} direction="row" >
        <Grid item xs={6}  className={classes.paper}>
          <Typography gutterBottom variant="h5" component="h2">
            SPEC
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {intro_message}
          </Typography>
              
        </Grid>
        <Grid item xs={6} >
          <img style={{height: 300}} src="/bgimg.jpg"/>
        </Grid>
           
        <Grid item xs={6}  >
      
          {detail_messages}
          <Typography variant="body2" color="textSecondary" component="p">
            gg
          </Typography>
          
        </Grid>
        <Grid item xs={6} >
        <img style={{height: 300}} src="/bgimg.jpg"/>
        </Grid>
           
      </Grid>
  
   
     
      
         



      
    )
  }
}

export default withStyles(styles)(Intro)
