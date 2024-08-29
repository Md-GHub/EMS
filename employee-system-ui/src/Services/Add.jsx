import axios from "axios";

const url = "http://localhost:8080/api/v1/employees"; // Use HTTP

class Add {
    saveEmployee(employee) {
        return axios.post(url, employee);
    }
    getAllEmployee(){
        return axios.get(url);
    }
    deleteEmployee(id){
        console.log(id);
        return axios.delete(url+'/'+id)
    }
    getEmployeeById(id){
        return axios.get(url+'/'+id)
    }
    updateEmployeeById(id,employee){
        return axios.put(url+'/'+id,employee);
    }
}

export default new Add();
