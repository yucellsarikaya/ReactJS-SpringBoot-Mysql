package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;

import com.konumAlgilama.konumAlgilama.Entities.City;

public interface ICityData {
	List<City> getAll();

	void add(City city);

	void update(City city);

	void delete(City city);

	City getById(int id);

}
