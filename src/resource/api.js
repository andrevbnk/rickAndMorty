import axios from 'axios';


export default function useApi(){
    async function getPagination(page=1){
        try{
            const result = await  axios.get(`/character/?page=${page}`);
            return result.data.results;
        }catch(e){
            return '=-('; //show global message
        }
    }

    async function getCharacter(id=1){
        try{
            const result = await  axios.get(`/character/${id}`);
            return result.data;
        }catch(e){
            return '=-('; //show global message
        }
    }


    return {getPagination,getCharacter}
}