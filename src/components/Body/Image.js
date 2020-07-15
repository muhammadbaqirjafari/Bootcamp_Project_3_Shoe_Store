import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    media: {
        width: '650px',
    },
  });

export default function Image({src}){
    const classes = useStyles();

    return (
        <img src={src} alt="Nick Shoe" className={classes.media}></img>
    )
}