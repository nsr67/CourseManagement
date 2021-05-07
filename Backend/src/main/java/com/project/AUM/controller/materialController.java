package com.project.AUM.controller;

import com.project.AUM.Material;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.project.AUM.serviceImp.materialServiceImp;

import java.util.List;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping({"/material"})
public class materialController {

    @Autowired
    materialServiceImp service;

    @GetMapping
    public List<Material> materials(){
        return service.materials();
    }

    @PostMapping
    public Material newMaterial(@RequestBody Material m){
        return service.add(m);
    }
    @GetMapping(path={"/{id}"})
    public Material materialId(@PathVariable("id")int id){
        return service.materialId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Material edit(@RequestBody Material m,@PathVariable("id")int id){
        m.setId(id);
        return service.edit(m);
    }

    @DeleteMapping(path = {"/{id}"})
    public Material delete(@PathVariable("id")int id){
        return service.delete(id);
    }

}
