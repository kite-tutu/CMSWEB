/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'camp_admin') return '/home'
  else return '/dashboards/admin'
}

export default getHomeRoute
