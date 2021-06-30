package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.*;

@Entity
@Table(name = "city")
public class City {
	@Id
	@Column(name = "city_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "city_name")
	private String cityname;

	@Column(name = "city_no")
	private int cityno;

	public City() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}

	public int getCityno() {
		return cityno;
	}

	public void setCityno(int cityno) {
		this.cityno = cityno;
	}

}