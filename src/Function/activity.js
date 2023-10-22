import axios from 'axios'

export const removed = async (id) => {
    return await axios.delete(`http://localhost:8000/activity/`, { data: { id }, withCredentials: true });
 }

// รับพารามิเตอร์ data คือ ข้อมูลจากที่กด submit Form เข้ามา
export const create = async(data) => {
    return await axios.post(`http://localhost:8000/activity/`, data , {
        withCredentials: true, 
    })
}

/* export const readData = async (id) => {
    return await axios.get("http://localhost:8000/activity/",{data:{id}},{
        withCredentials: true, 
    })
} */

export const updated = async (data) => {
    console.log(data);
    return await axios.put(`http://localhost:8000/activity/` ,data , {
        withCredentials: true,
    })
}