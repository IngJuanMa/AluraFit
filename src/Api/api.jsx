import axios from "axios";

export const api = axios.create(
   {baseURL: "https://6787c621c4a42c91610830e0.mockapi.io/"} 
)

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    // console.log(respuesta)
    setData(respuesta.data)
}

 export const PostDatos = async (url, datos)=> {
    try{

        //Realiza la solicitud POST con axios
        const response = await axios.post(url,datos);
        console.log("Datos enviados con éxito: ", response.data);// devuelve la respuesta en caso de exito

        return response.data;       
    } catch (error) {
        console.error("error al enviar los datos: ", error)
        throw error; // lanza el error para manejarlo en quien llame la función

    }
}