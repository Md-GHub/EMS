import React, { useState } from 'react';
import Add from '../Services/Add'
import { useNavigate } from 'react-router-dom';
const AddEmployee = () => {
    const [employee,setEmployee] = useState({
        id:"",
        fname:"",
        lname:"",
        email:""
    })
    const [add,setAdd] = useState(false);
    const nav = useNavigate();

    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    }
    const reset = ()=>{
      setEmployee(
        {
          id:"",
          fname:"",
          lname:"",
          email:""
      }
      )
    }
    const saveEmployee = async (e)=>{
        e.preventDefault();
        const response = await Add.saveEmployee(employee);
        nav("/getusers")
        if(response.data === "saved"){
            setAdd(true);
        }
    }

  return (
    <div className="p-4">
      <div className="bg-gray-200 flex flex-col mx-auto max-w-2xl p-6 shadow-lg rounded">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-center">Add Employee</h1>
          {add && <div className='text-sm bg-green-300 text-center mx-auto max-w-fit p-2'>Employee saved!</div>}
        </div>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="fname" className="block mb-2">First Name</label>
            <input
              type="text"
              id="fname"
              name='fname'
              value={employee.fname}
              onChange={(e)=>handleChange(e)}
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
              onChange={(e)=>handleChange(e)}
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
              onChange={(e)=>handleChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              onClick={saveEmployee}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              type="reset"
              onClick={reset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
