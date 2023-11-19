import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

const useAxios = () => {
    const [employees, setEmployees] = useState(null);
    
    useEffect(() =>{
        EmployeeService.getEmployees().then(res => setEmployees(res.data));
    },[]);
    

    return employees;
}
 
export default useAxios;