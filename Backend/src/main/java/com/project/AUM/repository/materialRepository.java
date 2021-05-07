package com.project.AUM.repository;

import com.project.AUM.Material;
import org.springframework.data.repository.Repository;
import java.util.List;


@org.springframework.stereotype.Repository
public interface materialRepository extends Repository<Material,Integer> {
    List<Material> findAll();
    Material findById(int id);
    Material save(Material m);
    void delete(Material m);

}
