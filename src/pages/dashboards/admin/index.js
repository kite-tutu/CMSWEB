/* eslint-disable lines-around-comment */
// ** MUI Import
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
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
import AnalyticsProject from 'src/views/dashboards/analytics/AnalyticsProject'
import AnalyticsOrderVisits from 'src/views/dashboards/analytics/AnalyticsOrderVisits'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits'
import AnalyticsEarningReports from 'src/views/dashboards/analytics/AnalyticsEarningReports'
import AnalyticsSupportTracker from 'src/views/dashboards/analytics/AnalyticsSupportTracker'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/AnalyticsMonthlyCampaignState'
import AnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/AnalyticsWebsiteAnalyticsSlider'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'
import { Card } from '@mui/material'
import { maxWidth } from '@mui/system'

import LinearProgress from '@mui/material/LinearProgress'
import { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import CustomTextField from 'src/@core/components/mui/text-field'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import CardActions from '@mui/material/CardActions'
import { getcamplist } from '../../../api'

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

const Illustration = styled('img')(({ theme }) => ({
  right: 20,
  bottom: 0,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    right: 5,
    width: 110
  }
}))



const top100Films = [{ title: 'Camp 1' }, { title: 'Camp 2' }, { title: 'Camp 3' }, { title: 'Camp 4' }]

const AdminDashboard = () => {
  const [progress, setProgress] = useState(0)
  const [campList, setcampList] = useState([])
  const [campSingle, setcampSingle] = useState({})
  const [campValue, setcampValue] = useState()
  const [campListAll, setcampListAll] = useState([])

  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [DialogOpen, setDialogOpen] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))  
  const handleClose = () => setOpen(false)
  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })
// Handle Password
const handlePasswordChange = prop => event => {
  setValues({ ...values, [prop]: event.target.value })
  console.log("handlePasswordChange", values)
}

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword })
  console.log("handleClickShowPassword", values)
}

// Handle Confirm Password
const handleConfirmChange = prop => event => {
  setValues({ ...values, [prop]: event.target.value })
  console.log("handleConfirmChange", values)
}

const handleClickShowConfirmPassword = () => {
  setValues({ ...values, showPassword2: !values.showPassword2 })
  console.log("handleClickShowConfirmPassword", values)
}

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

  useEffect(() => {
    //getCampList()
    //setcampList(getcamplist)
    console.log('start effect')
    getcamplist()
      .then(response => {
        console.log(response)
        setcampList(response.data)
        setcampListAll(response.data)
        setcampSingle(response.data[0])
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
    
  }, [])

  useEffect(() => {
    console.log("Camp Value", campValue)
    console.log("camp list All", campListAll)
  },[campValue])

 
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose2 = () => {
    setAnchorEl(null)
  }

const handleClickOpen = () => setDialogOpen(true)
  
function handleInputChange(event, value) {   
  const filteredList = campListAll.filter(item =>
    item.camp_name.toLowerCase().includes(value.toLowerCase())
  );
  setcampList(filteredList);
  console.log("campListAll ", value,campListAll);
  console.log("filteredList", value,filteredList);
  //console.log("function", event);
}



  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
         
          <Grid item xs={12} md={4}>
            {/* <EcommerceCongratulationsJohn /> */}
            <Card sx={{ position: 'relative' }}>
              <CardContent>
                <Typography variant='h5' sx={{ mb: 0.5 }}>
                  Congratulations {campSingle.camp_name}! 🎉
                </Typography>
                <Typography sx={{ mb: 2, color: 'text.secondary' }}>Best camp of the month</Typography>
                <Typography variant='h4' sx={{ mb: 0.75, color: 'primary.main' }}>
                  $48.9k
                </Typography>
                <Button variant='contained'>View Sales</Button>
                <Illustration width={116} alt='congratulations john' src='/images/cards/congratulations-john.png' />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <EcommerceStatistics /> */}
            <Card>
              <CardHeader
                title='Statistics'
                sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}
                action={
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    Updated 1 month ago
                  </Typography>
                }
              />
              <CardContent
                sx={{ pt: theme => `${theme.spacing(7)} !important`, pb: theme => `${theme.spacing(7.5)} !important` }}
              >
                <Grid container spacing={6}>
                  {/* {renderStats()} */}
                  <Grid item xs={6} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CustomAvatar skin='light' color='primary' sx={{ mr: 4, width: 42, height: 42 }}>
                        <Icon icon='tabler:chart-pie-2' fontSize='1.5rem' />
                      </CustomAvatar>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h5'>{campSingle.camp_domain}</Typography>
                        <Typography variant='body2'>domain</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CustomAvatar skin='light' color='primary' sx={{ mr: 4, width: 42, height: 42 }}>
                        <Icon icon='tabler:chart-pie-2' fontSize='1.5rem' />
                      </CustomAvatar>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h5'>{campSingle.students}</Typography>
                        <Typography variant='body2'>Student</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CustomAvatar skin='light' color='primary' sx={{ mr: 4, width: 42, height: 42 }}>
                        <Icon icon='tabler:chart-pie-2' fontSize='1.5rem' />
                      </CustomAvatar>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h5'>{campSingle.teachers}</Typography>
                        <Typography variant='body2'>Teacher</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CustomAvatar skin='light' color='primary' sx={{ mr: 4, width: 42, height: 42 }}>
                        <Icon icon='tabler:chart-pie-2' fontSize='1.5rem' />
                      </CustomAvatar>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h5'>{campSingle.parents}</Typography>
                        <Typography variant='body2'>Parents</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
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
                        options={campListAll.map(option => option.camp_name)}  
                        onInputChange={handleInputChange}                     
                        // onChange={(event, newValue) => {
                        //   setcampValue(newValue);
                        // }}
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
              {campList.map(camp => {
                return (
                  <div key={camp.id}>
                    {/* <h2>name: {employee.camp_name}</h2>
                    <h2>country: {employee.country}</h2>

                    <hr /> */}
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
                              <ListItemText primary={camp.camp_name} />
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
                                  {camp.created_on}
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
                              <ListItemText primary={camp.camp_admin_name} />
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
                                  <Typography variant='caption'>{camp.camp_admin_email}</Typography>
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
                                  {camp.students}
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
                                  {camp.teachers}
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
                                    <FormControlLabel
                                      control={<Switch defaultChecked color='success' />}
                                      label='Live'
                                    />
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
                  </div>
                )
              })}
            </StyledList>
          </Grid>
          <Dialog fullScreen={fullScreen} open={DialogOpen} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
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
AdminDashboard.acl = {
  action: 'read',
  subject: 'page-dashboard'
}

export default AdminDashboard
