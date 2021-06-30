package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "campus")
public class Campus {
	@Id
	@Column(name = "campus_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "campus_name")
	private String campusname;

	@Column(name = "campus_countryfk")
	private int campusfk;

	public Campus() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCampusname() {
		return campusname;
	}

	public void setCampusname(String campusname) {
		this.campusname = campusname;
	}

	public int getCampusfk() {
		return campusfk;
	}

	public void setCampusfk(int campusfk) {
		this.campusfk = campusfk;
	}

}
