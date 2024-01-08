export const getSubdomain = url => {
  let domain = url
  if (url.includes('://')) {
    domain = url.split('://')[1]
  }
  const subdomain = domain.split('.')[0]

  const containsColon = /:/.test(subdomain)
  if (containsColon) {
    return false
  } else {
    return subdomain
  }
}

export default getSubdomain
