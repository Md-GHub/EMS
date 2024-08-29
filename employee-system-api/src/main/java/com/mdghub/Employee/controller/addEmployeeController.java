package com.mdghub.Employee.controller;

import com.mdghub.Employee.model.Employee;
import com.mdghub.Employee.service.employeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v1")
public class addEmployeeController {

    @Autowired
    private employeeService service;

    @PostMapping("/employees")
    public String addEmployee(@RequestBody Employee employee){
        return service.addUser(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return service.getAllEmployee();
    }


    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployeeById(@PathVariable Long id){
        boolean deleted = false;
        System.out.println("hi");
        deleted = service.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee empl = null;
        empl = service.getEmployeeById(id);
        return ResponseEntity.ok(empl);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        boolean updated = false;
        updated = service.updateEmployee(id,employee);
        return ResponseEntity.ok(employee);
    }
}
