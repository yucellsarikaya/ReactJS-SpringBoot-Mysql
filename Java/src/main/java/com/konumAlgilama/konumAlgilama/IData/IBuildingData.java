package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Building;

public interface IBuildingData {
	List<Building> getAll();

	void add(Building building);

	void update(Building building);

	void delete(Building building);

	Building getById(int id);
	
	List<Map<String, Object>> getInfo();

}
