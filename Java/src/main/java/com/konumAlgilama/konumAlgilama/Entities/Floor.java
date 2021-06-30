package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "floor")
public class Floor {
	@Id
	@Column(name = "floor")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "floor_no")
	private int floorname;

	@Column(name = "floor_buildingfk")
	private int floorfk;

	public Floor() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getFloorname() {
		return floorname;
	}

	public void setFloorname(int floorname) {
		this.floorname = floorname;
	}

	public int getFloorfk() {
		return floorfk;
	}

	public void setFloorfk(int floorfk) {
		this.floorfk = floorfk;
	}

}
