// ** MUI Import
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Component Imports
import AnalyticsOrderVisits from 'src/views/dashboards/analytics/AnalyticsOrderVisits'
import AnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/AnalyticsWebsiteAnalyticsSlider'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'
import { Card } from '@mui/material'

import LinearProgress from '@mui/material/LinearProgress'
import { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import Fab from '@mui/material/Fab'

import InputAdornment from '@mui/material/InputAdornment'

import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CustomTextField from 'src/@core/components/mui/text-field'
import Checkbox from '@mui/material/Checkbox'

const top100Films = [{ title: 'Camp 1' }, { title: 'Camp 2' }, { title: 'Camp 3' }, { title: 'Camp 4' }]

const StyledList = styled(List)(({ theme }) => ({
  '& .MuiListItem-container': {
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

const AnalyticsDashboard = () => {
  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10

        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const [open, setOpen] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose2 = () => {
    setAnchorEl(null)
  }

  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <AnalyticsWebsiteAnalyticsSlider />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <AnalyticsOrderVisits />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardStatsWithAreaChart
              stats='97.5k'
              chartColor='success'
              avatarColor='success'
              title='Revenue Generated'
              avatarIcon='tabler:credit-card'
              chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledList disablePadding>
              <Card style={{ padding: '10px' }}>
                <Grid container spacing={6}>
                  <Grid item xs={6} md={9}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                      <Autocomplete
                        freeSolo
                        id='free-solo-2-demo'
                        disableClearable
                        options={top100Films.map(option => option.title)}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label='Camp Search'
                            InputProps={{
                              ...params.InputProps,
                              type: 'search',
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <Icon icon='gala:search' fontSize='1.5rem' />
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <Button
                      variant='contained'
                      startIcon={<Icon icon='tabler:plus' />}
                      size='medium'
                      onClick={handleClickOpen}
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}
                    >
                      Add New Camp
                    </Button>
                  </Grid>
                </Grid>
              </Card>
              <Card style={{ marginTop: '10px' }}>
                <ListItem>
                  <Grid container spacing={6}>
                    <Grid item xs={12} md={1}>
                      <center>
                        <ListItemAvatar>
                          <img src={`/images/cards/camp.jpg`} style={{ maxWidth: '70px', borderRadius: '5px' }} />
                          {/* <Icon icon='tabler:affiliate' fontSize='2.5rem' /> */}
                        </ListItemAvatar>
                      </center>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={3}
                      style={{
                        paddingLeft: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <div>
                        <ListItemText primary='Camp Test' />
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                          <Box
                            sx={{
                              mr: 3,
                              display: 'flex',
                              alignItems: 'center',
                              '& svg': { mr: 1, color: 'success.main' }
                            }}
                          >
                            <Icon icon='mdi:circle' fontSize='0.625rem' />
                            <Typography variant='caption'>Live</Typography>
                          </Box>
                          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                            5 Jan 2023
                          </Typography>
                        </Box>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={2}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <div>
                        <ListItemText primary='Admin Name' />
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                          <Box
                            sx={{
                              mr: 3,
                              display: 'flex',
                              alignItems: 'center',
                              '& svg': { mr: 1 }
                            }}
                          >
                            <Icon icon='clarity:email-line' fontSize='.8rem' />
                            <Typography variant='caption'>admin@gmail.com</Typography>
                          </Box>
                        </Box>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={2}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <div>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                          <ListItemText primary='Total Student' />
                        </Box>
                        <Box
                          sx={{
                            mr: 3,
                            display: 'flex',
                            alignItems: 'center',
                            '& svg': { mr: 1, color: 'success.main' }
                          }}
                        >
                          <Icon icon='mdi:circle' fontSize='0.625rem' />
                          <Typography variant='caption' sx={{ fontSize: '.8rem' }}>
                            175
                          </Typography>
                        </Box>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={2}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <div>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                          <ListItemText primary='# Teacher' />
                        </Box>
                        <Box
                          sx={{
                            mr: 3,
                            display: 'flex',
                            alignItems: 'center',
                            '& svg': { mr: 1, color: 'success.main' }
                          }}
                        >
                          <Icon icon='mdi:circle' fontSize='0.625rem' />
                          <Typography variant='caption' sx={{ fontSize: '.8rem' }}>
                            4
                          </Typography>
                        </Box>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <ListItemSecondaryAction>
                        <div>
                          <Fab color='primary' aria-label='edit' size='small' sx={{ marginRight: '5px' }}>
                            <Icon icon='carbon:folder-details-reference' />
                          </Fab>
                          <IconButton
                            aria-label='more'
                            aria-controls='long-menu'
                            aria-haspopup='true'
                            onClick={handleClick}
                          >
                            <Icon icon='tabler:dots-vertical' />
                          </IconButton>
                          <Menu
                            keepMounted
                            id='long-menu'
                            anchorEl={anchorEl}
                            onClose={handleClose2}
                            open={Boolean(anchorEl)}
                          >
                            <MenuItem>
                              <FormControlLabel control={<Switch defaultChecked color='success' />} label='Live' />
                            </MenuItem>
                            <MenuItem>
                              <FormControlLabel control={<Switch color='success' />} label='Pause' />
                            </MenuItem>
                            <MenuItem>
                              <FormControlLabel control={<Switch color='success' />} label='Finish' />
                            </MenuItem>
                            <MenuItem>
                              <FormControlLabel control={<Switch color='success' />} label='Re   ject' />
                            </MenuItem>
                          </Menu>
                        </div>
                      </ListItemSecondaryAction>
                    </Grid>
                  </Grid>
                </ListItem>
              </Card>

              <Card style={{ marginTop: '10px' }}>
                <ListItem>
                  <ListItemAvatar>
                    <img src={`/images/cards/camp.jpg`} style={{ maxWidth: '75px', borderRadius: '5px 0 0 5px' }} />
                    {/* <Icon icon='tabler:affiliate' fontSize='2.5rem' /> */}
                  </ListItemAvatar>
                  <div>
                    <ListItemText primary='Camp Test' />
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Box
                        sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}
                      >
                        <Icon icon='mdi:circle' fontSize='0.625rem' />
                        <Typography variant='caption'>Live</Typography>
                      </Box>
                      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                        13 Days ago
                      </Typography>
                    </Box>
                  </div>

                  <div style={{ marginLeft: '25px', width: '40%' }}>
                    <Typography sx={{ fontWeight: 500, mb: 2 }}>Camp Capacity</Typography>
                    <LinearProgress variant='determinate' value={95} />
                  </div>

                  <ListItemSecondaryAction>
                    <div>
                      <IconButton
                        aria-label='more'
                        aria-controls='long-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        <Icon icon='tabler:dots-vertical' />
                      </IconButton>
                      <Menu
                        keepMounted
                        id='long-menu'
                        anchorEl={anchorEl}
                        onClose={handleClose2}
                        open={Boolean(anchorEl)}
                      >
                        <MenuItem>
                          <FormControlLabel control={<Switch defaultChecked color='success' />} label='Live' />
                        </MenuItem>
                        <MenuItem>
                          <FormControlLabel control={<Switch color='success' />} label='Pause' />
                        </MenuItem>
                        <MenuItem>
                          <FormControlLabel control={<Switch color='success' />} label='Finish' />
                        </MenuItem>
                        <MenuItem>
                          <FormControlLabel control={<Switch color='success' />} label='Re   ject' />
                        </MenuItem>
                      </Menu>
                    </div>
                  </ListItemSecondaryAction>
                </ListItem>
              </Card>

              <Card style={{ marginTop: '10px' }}>
                <ListItem>
                  <ListItemAvatar>
                    <img src={`/images/cards/camp.jpg`} style={{ maxWidth: '75px', borderRadius: '5px 0 0 5px' }} />
                    {/* <Icon icon='tabler:affiliate' fontSize='2.5rem' /> */}
                  </ListItemAvatar>
                  <div>
                    <ListItemText primary='Camp Test' />
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Box
                        sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'warning.main' } }}
                      >
                        <Icon icon='mdi:circle' fontSize='0.625rem' />
                        <Typography variant='caption'>Pause</Typography>
                      </Box>
                      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                        13 Days ago
                      </Typography>
                    </Box>
                  </div>

                  <div style={{ marginLeft: '25px', width: '40%' }}>
                    <Typography sx={{ fontWeight: 500, mb: 2 }}>Camp Capacity</Typography>
                    <LinearProgress variant='determinate' value={35} />
                  </div>

                  <ListItemSecondaryAction>
                    <FormControlLabel control={<Switch color='success' />} label='Change Status' />
                    <Button variant='contained' size='small' onClick={handleClickOpen}>
                      Details
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </Card>

              <Card style={{ marginTop: '10px' }}>
                <ListItem>
                  <ListItemAvatar>
                    <img src={`/images/cards/camp.jpg`} style={{ maxWidth: '75px', borderRadius: '5px 0 0 5px' }} />
                    {/* <Icon icon='tabler:affiliate' fontSize='2.5rem' /> */}
                  </ListItemAvatar>
                  <div>
                    <ListItemText primary='Camp Test' />
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Box
                        sx={{
                          mr: 3,
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { mr: 1, color: 'secondary.main' }
                        }}
                      >
                        <Icon icon='mdi:circle' fontSize='0.625rem' />
                        <Typography variant='caption'>Finished</Typography>
                      </Box>
                      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                        13 Days ago
                      </Typography>
                    </Box>
                  </div>

                  <div style={{ marginLeft: '25px', width: '40%' }}>
                    <Typography sx={{ fontWeight: 500, mb: 2 }}>Camp Capacity</Typography>
                    <LinearProgress variant='determinate' value={65} />
                  </div>

                  <ListItemSecondaryAction>
                    <FormControlLabel control={<Switch color='success' />} label='Change Status' />
                    <Button variant='contained' size='small' onClick={handleClickOpen}>
                      Details
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </Card>

              <Card style={{ marginTop: '10px' }}>
                <ListItem>
                  <ListItemAvatar>
                    <img src={`/images/cards/camp.jpg`} style={{ maxWidth: '75px', borderRadius: '5px 0 0 5px' }} />
                    {/* <Icon icon='tabler:affiliate' fontSize='2.5rem' /> */}
                  </ListItemAvatar>
                  <div>
                    <ListItemText primary='Camp Test' />
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Box
                        sx={{
                          mr: 3,
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { mr: 1, color: 'error.main' }
                        }}
                      >
                        <Icon icon='mdi:circle' fontSize='0.625rem' />
                        <Typography variant='caption'>Rejected</Typography>
                      </Box>
                      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                        13 Days ago
                      </Typography>
                    </Box>
                  </div>

                  <div style={{ marginLeft: '25px', width: '40%' }}>
                    <Typography sx={{ fontWeight: 500, mb: 2 }}>Camp Capacity</Typography>
                    <LinearProgress variant='determinate' value={25} />
                  </div>

                  <ListItemSecondaryAction>
                    <FormControlLabel control={<Switch color='success' />} label='Change Status' />
                    <Button variant='contained' size='small' onClick={handleClickOpen}>
                      Details
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </Card>
            </StyledList>
          </Grid>
          <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
            <Card>
              <CardHeader title='Add New Camp' startIcon={<Icon icon='tabler:plus' />} />
              <Divider sx={{ m: '0 !important' }} />
              <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField fullWidth label='Camp Name' placeholder='Camp Name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField fullWidth label='Domain for Camp' placeholder='Domain for Camp' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField fullWidth label='Camp Admin Name' placeholder='Camp Admin Name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField fullWidth type='email' label='Camp Admin Email' placeholder='admin@gmail.com' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Password'
                        value={values.password}
                        id='form-layouts-separator-password'
                        onChange={handlePasswordChange('password')}
                        type={values.showPassword ? 'text' : 'password'}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                edge='end'
                                onClick={handleClickShowPassword}
                                onMouseDown={e => e.preventDefault()}
                                aria-label='toggle password visibility'
                              >
                                <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        value={values.password2}
                        label='Confirm Password'
                        id='form-layouts-separator-password-2'
                        onChange={handleConfirmChange('password2')}
                        type={values.showPassword2 ? 'text' : 'password'}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                edge='end'
                                onMouseDown={e => e.preventDefault()}
                                aria-label='toggle password visibility'
                                onClick={handleClickShowConfirmPassword}
                              >
                                <Icon
                                  fontSize='1.25rem'
                                  icon={values.showPassword2 ? 'tabler:eye' : 'tabler:eye-off'}
                                />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControlLabel
                        label='I agree to privacy policy & terms'
                        control={<Checkbox name='basic-checked' required />}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ mb: '0 !important' }} />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button type='submit' sx={{ mr: 2 }} variant='contained'>
                    Submit
                  </Button>
                  <Button type='reset' color='secondary' variant='tonal'>
                    Reset
                  </Button>
                </CardActions>
              </form>
            </Card>
          </Dialog>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}
AnalyticsDashboard.acl = {
  action: 'read',
  subject: 'page-dashboard'
}

export default AnalyticsDashboard
