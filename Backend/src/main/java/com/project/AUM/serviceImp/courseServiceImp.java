package com.project.AUM.serviceImp;

import com.project.AUM.Course;
import com.project.AUM.repository.courseRepository;
import com.project.AUM.service.courseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class courseServiceImp implements courseService {
    @Autowired
    private courseRepository repository;
    @Override
    public List<Course> courses(){
        return  repository.findAll();
    }

    @Override
    public Course coursesId(int id) {
       return repository.findById(id);
    }

    @Override
    public Course add(Course c) {
        return repository.save(c);
    }

    @Override
    public Course edit(Course c) {
        return repository.save(c);
    }

    @Override
    public Course delete(int id) {
        Course c= repository.findById(id);
        if(c!=null)
            repository.delete(c);
        return c;
    }
//    @Override
//    public Course delete(int id) {
//        throw new UnsupportedOperationException("not expected");
//    }
}
