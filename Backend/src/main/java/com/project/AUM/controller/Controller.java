package com.project.AUM.controller;

import com.project.AUM.Course;
import com.project.AUM.service.courseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping({"/courses"})
public class Controller {
    @Autowired
    courseService service;

    @GetMapping
    public List<Course> courses(){
        return service.courses();
    }

    @PostMapping
    public Course newCourse(@RequestBody Course c){
        return service.add(c);
    }
    @GetMapping(path={"/{id}"})
    public Course courseId(@PathVariable("id")int id){
        return service.coursesId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Course edit(@RequestBody Course c,@PathVariable("id")int id){
        c.setId(id);
        return service.edit(c);
    }

    @DeleteMapping(path = {"/{id}"})
    public Course delete(@PathVariable("id")int id){
        return service.delete(id);
    }

}
