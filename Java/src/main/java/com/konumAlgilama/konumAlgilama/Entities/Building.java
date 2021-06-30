package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "building")
public class Building {
	@Id
	@Column(name = "building_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "building_name")
	private String buildingname;

	@Column(name = "building_blockfk")
	private int buildingfk;

	public Building() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBuildingname() {
		return buildingname;
	}

	public void setBuildingname(String buildingname) {
		this.buildingname = buildingname;
	}

	public int getBuildingfk() {
		return buildingfk;
	}

	public void setBuildingfk(int buildingfk) {
		this.buildingfk = buildingfk;
	}

}
