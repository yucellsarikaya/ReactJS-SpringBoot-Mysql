package com.konumAlgilama.konumAlgilama.Interfaces;

import java.util.List;

import com.konumAlgilama.konumAlgilama.Entities.City;

public interface ICityService {
	List<City> getAll();

	void add(City city);

	void update(City city);

	void delete(City city);

	City getById(int id);
}
