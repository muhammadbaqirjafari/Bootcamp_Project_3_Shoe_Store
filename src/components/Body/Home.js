import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Grid} from '@material-ui/core'
import Shoe from './Shoe'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
      label : "Nike Air Max Plus III",
      imgPath : 
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f5ce4856-476f-40e9-be52-ac6dcbe4fb26/air-max-plus-iii-shoe-pcRszz.jpg",
      price : 220,
      type : "Men's Shoe",
      colors : 1,
    }, {
      label : "NikeCourt Air Zoom GP Turbo",
      imgPath : 
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/999ea062-7111-48c4-8066-a89613053227/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg",
      price : 320,
      type : "Women's Shoe",
      colors : 2,   
    }, {
      label : "Nike Air Max Plus",
      imgPath : 
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-1980b171-0f44-4074-bae6-71cbef2a2767/air-max-plus-shoe-pBf8wH.jpg",
      price : 230,
      type : "Sports Shoe",
      colors : 1,    
    }, {
      label : "Jordan React Elevation",
      imgPath : 
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/20894ca2-3198-4ff3-a8e0-18f3677122ad/jordan-react-elevation-basketball-shoe-5p3f3R.jpg",
      price : 250,
      type : "Women's Shoe",
      colors : 1, 
    } ,
  {
      label : "Nike Wildhorse 6",
      imgPath : 
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-ad95894c-4dee-40ea-9812-556a1dc9782c/wildhorse-6-trail-running-shoe-C2CwFh.jpg",
      price : 270,
      type : "Shoe",
      colors : 1, 
    } , {
      label : "Nike Blazer Mid '77",
      imgPath :
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/kxmb3lab5dmy00qpoyul/blazer-mid-77-vintage-shoe-CBDjT0.jpg",
      price : 250,
      type : "Women's Shoe",
      colors : 1,    
    }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text : {
    position: 'absolute',
    bottom: '8px',
    left: '16px',
    fontFamily: 'Modak',
    textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff',
    fontSize : '2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize : '5rem',
    } 
  },
  container : {
    overflow: 'hidden',
    position: 'relative',
  },  
  img: {
    width: '100%',
    marginTop: '-50%',
    marginBottom: '-35%',
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div className={classes.container}>
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                  <Typography variant="h1" className={classes.text}>{tutorialSteps[activeStep].label}</Typography>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
      <Grid container justify="center" spacing={3} style={{marginBottom:'0.5%'}}>
            {
                tutorialSteps.map((shoe, id) => (
                    <Grid item key={id} xs='auto' md='auto' lg={3}>
                        <Shoe
                        main_image={shoe.imgPath}
                        image_title={shoe.label}
                        price={shoe.price}
                        type={shoe.type}
                        colors={shoe.colors}
                        url="../shoe"
                        />
                    </Grid>    
                ))
            }
        </Grid>
    </div>
  );
}

export default Home;
