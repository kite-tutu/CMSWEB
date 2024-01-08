// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    title: 'Percipient',
    amount: '120',
    icon: 'vaadin:child',
    trendNumber: '94%',
    avatarColor: 'success'
  },
  {
    title: 'Assign Teacher',
    amount: 'Mosh Navin',
    avatarColor: 'info',
    icon: 'mdi:teacher'
  },
  {
    amount: '110',
    title: 'Parents',
    trend: 'positive',
    trendNumber: '85%',
    icon: 'ri:parent-fill',
    avatarColor: 'warning'
  }
]

const CardMonthlyCampaignState = () => {
  return (
    <Card>
      <CardHeader
        title='Bunk 2'
        subheader='150 children'
        action={
          <OptionsMenu
            options={['Details', 'Delete']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 6.5 : undefined
              }}
            >
              <CustomAvatar
                skin='light'
                variant='rounded'
                color={item.avatarColor}
                sx={{ mr: 4, width: 34, height: 34 }}
              >
                <Icon icon={item.icon} />
              </CustomAvatar>
              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6'>{item.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 4, fontWeight: 500, color: 'text.secondary' }}>{item.amount}</Typography>
                  <Typography sx={{ color: `${item.trend === 'negative' ? 'error' : 'success'}.main` }}>
                    {item.trendNumber}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
        <br></br>
        <Button variant='contained' color='info'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardMonthlyCampaignState
