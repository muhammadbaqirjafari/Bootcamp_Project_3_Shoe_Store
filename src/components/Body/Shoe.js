import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '3% 3%',
  },
  media: {
    height: 245,
    width: 335,
  },
  text: {
    fontFamily: 'Roboto',
  }
});

export default function Shoe(props) {
  const classes = useStyles();
  const navigate = useNavigate();  

  return (
    <Card className={classes.root} onClick={()=>{navigate(props.url)}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.main_image}
          title={props.image_title}
        />
        <CardContent>
          <Grid container className={classes.text}>
              <Grid xs={10} item>
                <h2>
                    {props.image_title}
                </h2>
              </Grid>
              <Grid item>
                <h2>
                    ${props.price}
                </h2>    
              </Grid>    
          </Grid>
          <Typography gutterBottom variant="body1" color="textSecondary" component="h2">
                {props.type}
            </Typography>
            <Typography gutterBottom variant="body1" color="textSecondary" component="h2">
                {props.colors} Color
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
