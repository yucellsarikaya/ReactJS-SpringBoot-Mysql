package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Country;

public interface ICountryData {
	List<Country> getAll();

	void add(Country country);

	void update(Country country);

	void delete(Country country);

	Country getById(int id);
	
	List<Map<String, Object>> getInfo();

}
