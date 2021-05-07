package com.project.AUM.serviceImp;

import com.project.AUM.Material;
import com.project.AUM.repository.materialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.AUM.service.materialService;

import java.util.List;

@Service
public class materialServiceImp implements materialService{

    @Autowired
    private materialRepository repository;

    public List<Material> materials() {
        return repository.findAll();
    }

    public Material materialId(int id) {
        return repository.findById(id);
    }


    public Material add(Material m) {
        return repository.save(m);
    }

    public Material edit(Material m) {
        return repository.save(m);
    }

    public Material delete(int id) {
        Material m= repository.findById(id);
        if(m!=null)
            repository.delete(m);
        return m;
    }
}
