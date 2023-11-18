package com.reactspring.crudproject.model;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table
public class Employee {

    private int id;
    private String firstName;
    private String lastName;
    private String emailId;

}
