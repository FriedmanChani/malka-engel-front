import axios from "axios";


// const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api/CommonQuestions/`
const API_BASE_URL = "https://localhost:7297/api/orders/"

export const getUserHistory=async()=>{
  
try{
let result = await axios.get(`${API_BASE_URL}GetOrdById/1`)       

return result.data
}
catch(ch){
  console.log(ch)
}
}
