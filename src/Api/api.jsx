import axios from "axios";

export const api = axios.create(
   {baseURL: "https://6787c621c4a42c91610830e0.mockapi.io/"} 
)

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    // console.log(respuesta)
    setData(respuesta.data)
}