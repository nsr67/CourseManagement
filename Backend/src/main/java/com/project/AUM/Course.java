package com.project.AUM;

import javax.persistence.*;

@Entity
@Table(name="courses")
public class Course {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="courseName")
    private String courseName;
    @Column(name = "skill")
    private String skill;
    @Column(name = "preRequisite")
    private String preRequisite;

    public Course(){

    }
    public Course(int id,String courseName, String skill, String preRequisite){
        this.id=id;
        this.courseName=courseName;
        this.skill=skill;
        this.preRequisite=preRequisite;
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

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getPreRequisite() {
        return preRequisite;
    }

    public void setPreRequisite(String preRequisite) {
        this.preRequisite = preRequisite;
    }
}
