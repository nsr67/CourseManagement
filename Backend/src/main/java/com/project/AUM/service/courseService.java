package com.project.AUM.service;


import com.project.AUM.Course;

import java.util.List;


public interface courseService {
    List<Course>courses();
    Course coursesId(int id);
    Course add(Course c);
    Course edit(Course c);
    Course delete(int id);
}
