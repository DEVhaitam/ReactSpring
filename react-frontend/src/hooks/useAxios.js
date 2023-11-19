import { useEffect, useState } from "react";
import getEmployees from "../services/EmployeeService";

const useAxios = () => {
    const [employees, setEmployees] = useState(null);
    
    useEffect(() =>{
        getEmployees().then(res => setEmployees(res.data));
    },[]);
    

    return employees;
}
 
export default useAxios;