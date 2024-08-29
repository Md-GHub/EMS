package com.mdghub.Employee.repository;

import com.mdghub.Employee.entity.employeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface employeeRepo extends JpaRepository<employeeEntity,Long> {
}
