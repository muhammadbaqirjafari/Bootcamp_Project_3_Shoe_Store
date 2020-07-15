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
        <img src={src} alt="Nike Shoe Image" className={classes.media}></img>
    )
}