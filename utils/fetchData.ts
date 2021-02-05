import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function fetchData(path: string, params: string = null): Promise<any> {
  let url: string

  if (params !== null) {
    url = `${apiUrl}/${path}${params}`
  } else {
    url = `${apiUrl}/${path}`
  }

  const response = await axios.get(`${url}`)
  const data = await response.data
  return data
}

export { apiUrl, fetchData }
