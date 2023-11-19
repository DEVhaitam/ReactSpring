import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(()=>{
        EmployeeService.getEmployeeById(id)
        .then(res => setEmployee(res.data));
    },[])


    return (
        <div>
            {
                employee && <p>Full name: {employee.firstName} + {employee.lastName} </p> 
            }
        </div>
          
        
     );
}
 
export default ViewEmployee;