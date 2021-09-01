import axios from 'axios';


const getCharacters = (currentPage) => (
  axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)
)

export default getCharacters

