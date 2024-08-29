package com.mdghub.Employee.service;

import com.mdghub.Employee.entity.employeeEntity;
import com.mdghub.Employee.model.Employee;
import com.mdghub.Employee.repository.employeeRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class employeeService {

    @Autowired
    private employeeRepo employeeRepo;
    public String addUser(Employee employee){
        employeeEntity emp = new employeeEntity();
        BeanUtils.copyProperties(employee,emp);
        employeeRepo.save(emp);
        return "saved";
    }

    public List<Employee> getAllEmployee() {
        List<employeeEntity> emp = employeeRepo.findAll();

        List<Employee> employees = emp
                .stream()
                .map(empl -> new Employee(
                        empl.getId(),
                        empl.getFname(),
                        empl.getLname(),
                        empl.getEmail()
                ))
                .collect(Collectors.toList());

        return employees;
    }

    public boolean deleteById(long id) {
        employeeEntity empl = employeeRepo.findById(id).get();
        employeeRepo.delete(empl);
        return true;
    }

    public Employee getEmployeeById(Long id){
        employeeEntity empl = employeeRepo.findById(id).get();
        Employee employee = new Employee(empl.getId(),empl.getFname(),empl.getLname(),empl.getEmail());
        BeanUtils.copyProperties(empl,employee);
        return employee;
    }
    public boolean updateEmployee(long id,Employee employee){
        employeeEntity empl = employeeRepo.findById(id).get();
        BeanUtils.copyProperties(employee,empl);
        employeeRepo.save(empl);
        return true;
    }
}
