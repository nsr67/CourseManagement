package com.project.AUM.repository;

import com.project.AUM.Course;
import org.springframework.data.repository.Repository;

import java.util.List;

//import org.springframework.stereotype.Repository;

@org.springframework.stereotype.Repository
public interface courseRepository extends Repository<Course, Integer> {
    List<Course>findAll();
    Course findById(int id);
    Course save(Course c);
    void delete(Course c);
}
