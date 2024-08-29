package com.mdghub.Employee.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "employee")
public class employeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(
            name = "f_name"
    )
    private String fname;
    @Column(
            name = "l_name"
    )
    private String lname;
    @Column(
            name = "email",
            unique = true
    )
    private String email;
}
