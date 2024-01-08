export default {
  meEndpoint: process.env.NEXT_PUBLIC_API_BASE_URL + '/auth_me/',
  superAdminLogin: process.env.NEXT_PUBLIC_API_BASE_URL + '/super_admin/',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  subDomainName: 'subDomainName',
  fetchRoleData: '/get_auth_group'
}
