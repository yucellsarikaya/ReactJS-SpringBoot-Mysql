package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "complex")
public class Complex {
	@Id
	@Column(name = "complex_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "complex_name")
	private String complexname;

	@Column(name = "complex_campusfk")
	private int complexfk;

	public Complex() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getComplexname() {
		return complexname;
	}

	public void setComplexname(String complexname) {
		this.complexname = complexname;
	}

	public int getComplexfk() {
		return complexfk;
	}

	public void setComplexfk(int complexfk) {
		this.complexfk = complexfk;
	}

}
