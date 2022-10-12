import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-f38e8-default-rtdb.firebaseio.com'
})

export default journalApi