// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

import getSubdomain from 'src/utils/get-subdomain'

import camp_api from 'src/configs/camp_api'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        const subdomain = getSubdomain(window.location.href)
        if (subdomain) {
          await axios
            .get(process.env.NEXT_PUBLIC_PROTOCOL + subdomain + '.' + process.env.NEXT_PUBLIC_HOST + camp_api.authMe, {
              headers: {
                Authorization: `Bearer ${storedToken}`,
                'Content-Type': 'application/json'
              }
            })
            .then(async response => {
              setLoading(false)
              setUser({ ...response.data.userData })
            })
            .catch(() => {
              localStorage.removeItem('userData')
              localStorage.removeItem('refreshToken')
              localStorage.removeItem('accessToken')
              setUser(null)
              setLoading(false)
              if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
                router.replace('/login')
              }
            })
        } else {
          await axios
            .get(authConfig.meEndpoint, {
              headers: {
                Authorization: `Bearer ${storedToken}`,
                'Content-Type': 'application/json'
              }
            })
            .then(async response => {
              setLoading(false)
              setUser({ ...response.data.userData })
            })
            .catch(() => {
              localStorage.removeItem('userData')
              localStorage.removeItem('refreshToken')
              localStorage.removeItem('accessToken')
              setUser(null)
              setLoading(false)
              if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
                router.replace('/login')
              }
            })
        }
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback) => {
    const subdomain = getSubdomain(params.url)
    console.log(process.env.NEXT_PROTOCOL)
    console.log("subdomain",subdomain)
    if (subdomain && subdomain !== 'campcloudpro') {
      console.log("subdomain",params)
      axios
        .post(
          process.env.NEXT_PUBLIC_PROTOCOL + subdomain + '.' + process.env.NEXT_PUBLIC_HOST + camp_api.loginApi,
          params
        )
        .then(async response => {
          params.rememberMe
            ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
            : null
          const returnUrl = router.query.returnUrl
          setUser({ ...response.data.userData })
          params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL)
        })
        .catch(err => {
          if (errorCallback) errorCallback(err)
        })
    } else {
      console.log("super admin",params)
      axios
        .post(authConfig.superAdminLogin, params)
        .then(async response => {
          console.log("response",response)
          if(response.data != "Super Admin access only")
          {
            params.rememberMe
            ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
            : null
            const returnUrl = router.query.returnUrl
            setUser({ ...response.data.userData })
            params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
            const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
            router.replace(redirectURL)
          }
          else
          {
            console.log("error",response)
            errorCallback(err)
          }
        })
        .catch(err => {
          if (errorCallback) errorCallback(err)
        })
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
