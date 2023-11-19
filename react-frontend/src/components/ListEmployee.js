import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useFetch from "../hooks/useFetch";
import getEmployees from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";


const ListEmployee = () => {
    
    const navigate = useNavigate();
    const employees = useAxios();
    const viewEmployee = (employee) => {
        console.log(employee);
        navigate("/employees/"+employee.id);
    }

    return (   
    <div>
        <h2 className="text-center">Employees List</h2>

        <br/>

        <button className="btn" style={{ backgroundColor: "blue", color: "white" }}> Add Employee</button>

        <br/>
        <br/>
        <div className="row">

        <table className = "table table-striped table-bordered">
            <thead>
                <tr>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email Id</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody>
                {console.log(employees)}
                {employees && employees.map((employee) => (
                    <tr key = {employee.id}>
                        <td> { employee.firstName} </td>   
                        <td> {employee.lastName}</td>
                        <td> {employee.emailId}</td>
                        <td>
                            <button className="btn btn-info">Update </button>
                            <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete </button>
                            <button 
                                style={{marginLeft: "10px"}} 
                                className="btn btn-info"
                                onClick={()=>viewEmployee(employee)}>View </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>

    </div>
    );
}
 
export default ListEmployee;