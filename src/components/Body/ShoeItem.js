import React from 'react'
import { Grid } from '@material-ui/core'
import Image from './Image'

export default function ShoeItem({images}) {
    return (
        <Grid container justify="center" style={{overflow:'hidden'}}>
            {
                images.map((imageURL, id) => (
                    <Grid xs='auto' lg='auto' md='auto' key={id} item style={{padding : '0% 0.2%', marginTop:'0.1%'}} >
                        <Image src={imageURL}></Image>
                    </Grid>
                ))
            }
        </Grid>
    )
}
