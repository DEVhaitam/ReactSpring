import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8091/api/v1/employees";

const getEmployees = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
};

export default getEmployees;