import authConfig from 'src/configs/auth'
import axios from 'axios'

const fetchRolesData = async () => {
  axios
    .get(authConfig.fetchRolesData)
    .then(async response => {
      const data = await response.json()

      return data
    })
    .catch(err => {
      if (errorCallback) errorCallback(err)
    })
}

export default fetchRolesData
