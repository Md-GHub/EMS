import React, { useState, useEffect } from 'react';
import Add from '../Services/Add';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const {id} = useParams();
    const nav = useNavigate();
  const [employee, setEmployee] = useState({
    fname: '',
    lname: '',
    email: ''
  });
  const [add, setAdd] = useState(false);
  
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const empl = await Add.getEmployeeById(id);
        setEmployee(empl.data);
      } catch (err) {
        console.error("Failed to fetch employee data", err);
      }
    };
    fetchEmployee();
  }, [id]);
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await Add.updateEmployeeById(id,employee);  
      setAdd(true); // Show success message
      nav('/getusers')
    } catch (err) {
      console.error("Failed to save employee", err);
    }
  };

  const reset = () => {
    setEmployee({
      fname: '',
      lname: '',
      email: ''
    });
    setAdd(false); // Hide success message
  };

  return (
    <div className="p-4">
      <div className="bg-gray-200 flex flex-col mx-auto max-w-2xl p-6 shadow-lg rounded">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-center">Update Employee</h1>
          {add && <div className='text-sm bg-green-300 text-center mx-auto max-w-fit p-2'>Employee saved!</div>}
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="fname" className="block mb-2">First Name</label>
            <input
              type="text"
              id="fname"
              name='fname'
              value={employee.fname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lname" className="block mb-2">Last Name</label>
            <input
              type="text"
              id="lname"
              name='lname'
              value={employee.lname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              value={employee.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              onClick={saveEmployee}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
            <button
              type="reset"
              onClick={reset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
