import axios from 'axios';
//get from NASA
const URL = 'https://'

const options = {
    //come form NASA 
}

const getNasaImages = async () => {
    try {
        //request
        const {data : {data}} = await axios.get(URL, options)

        return data;

    } catch (error) {
        console.log(error);
        
    }
}