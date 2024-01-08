import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import { useState } from 'react'
import { Grid } from '@mui/material'
import Layout from './Layout'

const Home = () => {
  return (
    <KeenSliderWrapper>
      <Grid container spacing={6}>
        <Layout />
      </Grid>
    </KeenSliderWrapper>
  )
}

Home.acl = {
  action: 'read',
  subject: 'home-page'
}

export default Home
