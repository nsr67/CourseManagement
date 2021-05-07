package com.project.AUM.service;

import com.project.AUM.Material;

import java.util.List;

public interface materialService {
    List<Material> materials();
    Material materialId(int id);
    Material add(Material m);
    Material edit(Material m);
    Material delete(int id);
}
