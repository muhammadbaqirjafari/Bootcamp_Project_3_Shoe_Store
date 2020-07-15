import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './ShoeItem.module.css'
import Image from './Image'

export default function ShoeItem({images}) {
    return (
        <Grid xs={12} container className={styles.container}>
            {
                images.map((imageURL) => (
                    <Grid xs={6} item >
                        <Image src={imageURL} alt={imageURL}></Image>
                    </Grid>
                ))
            }
        </Grid>
    )
}
