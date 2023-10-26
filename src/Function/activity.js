import axios from 'axios'

export const removed = async (id) => {
    return await axios.delete(`${import.meta.env.VITE_REACT_API_URL}activity/`, { data: { id }, withCredentials: true });
 }

// รับพารามิเตอร์ data คือ ข้อมูลจากที่กด submit Form เข้ามา
export const create = async(data) => {
    return await axios.post(`${import.meta.env.VITE_REACT_API_URL}activity/`, data , {
        withCredentials: true, 
    })
}

export const updated = async (data) => {
    console.log(data);
    return await axios.put(`${import.meta.env.VITE_REACT_API_URL}activity/` ,data , {
        withCredentials: true,
    })
}

/* export const getActivityName = async (data) => {
    return await axios.post(import.meta.env.VITE_REACT_API_URL+'diarycard',{
        "type":data   
    },{
        withCredentials: true,
    })
} */