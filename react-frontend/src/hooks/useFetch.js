import { useEffect, useState } from "react";
import getEmployees from "../services/EmployeeService";

const useFetch = () => {
    const url = "http://localhost:8000/employees";
    const [employees, setEmployees] = useState(null);
    
    useEffect(() =>{
        fetch(url)
        .then(res => {
            if(!res.ok) throw Error("coudln't fetch data")
            return res.json();
        })
        .then( res => setEmployees(res))
        .catch(err => console.log(err.message));
    },[]);
 

    return employees;
}
 
export default useFetch;