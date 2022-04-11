import axios from 'axios'
const instance=axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'c4d57deb2fmshdc6bca0cae81529p1a5196jsnb1605fb70ac1'
    }
})
export const getCoins=()=>instance.get("/coins").then(res=>res.data)