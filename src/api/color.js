import axios from "axios"

export async function searchColor(queryParams) {
  const colorData = (await axios.get(`https://server.picular.co/${queryParams}`)).data;
  return colorData
}
