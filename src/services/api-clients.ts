import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key:'9cfcf52b5249493b93396d80ff2a432f'
  }
})