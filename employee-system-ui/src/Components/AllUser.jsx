import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../Services/Add";

const AllUser = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState([]);

  const handleNavigate = () => {
    nav("/add");
  };

  const deleteEmployee = async (id) => {
    try {
      await Add.deleteEmployee(id);
      // Refresh employee list after deletion
      setEmployee(employee.filter((emp) => emp.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const updateEmployee=(id)=>{
    nav(`/edit/${id}`);
  }

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await Add.getAllEmployee();
        setEmployee(response.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div className="mx-auto container my-8">
      <div className="h-12">
        <button
          onClick={handleNavigate}
          className="rounded bg-green-600 text-white px-6 py-2"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide p-3">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide p-3">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide p-3">
                Email
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wide p-3">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employee.length > 0 ? (
                employee.map((emp) => (
                  <tr key={emp.id}>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{emp.fname}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{emp.lname}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{emp.email}</div>
                    </td>
                    <td className="text-right font-medium text-sm px-6 py-4 whitespace-nowrap">
                      <a onClick={()=>updateEmployee(emp.id)} className="text-indigo-600 px-4 cursor-pointer hover:text-indigo-800">
                        Edit
                      </a>
                      <a
                        onClick={() => deleteEmployee(emp.id)}
                        className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AllUser;
