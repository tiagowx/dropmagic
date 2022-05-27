import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Aside from '../../components/default/Aside'
import Feed from '../../components/default/Feed'

const Home = () => {
  return (
    <>
      <Grid container sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Aside />

        <Feed />

      </Grid>
    </>
  )
}

export default Home