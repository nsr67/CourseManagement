package com.project.AUM;

import javax.persistence.*;

@Entity
@Table(name="material")
public class Material {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="courseName")
    private String courseName;
    @Column(name = "trainingMaterial")
    @Lob
    private byte[] trainingMaterial;

    public Material(String fileName, String contentType, byte[] bytes){

    }
    public Material(int id, String courseName, byte[] trainingMaterial) {
        this.id = id;
        this.courseName = courseName;
        this.trainingMaterial = trainingMaterial;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public byte[] getTrainingMaterial() {
        return trainingMaterial;
    }

    public void setTrainingMaterial(byte[] trainingMaterial) {
        this.trainingMaterial = trainingMaterial;
    }
}
