package com.konumAlgilama.konumAlgilama.Interfaces;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Building;

public interface IBuildingService {
	List<Building> getAll();

	void add(Building building);

	void update(Building building);

	void delete(Building building);

	Building getById(int id);

	List<Map<String, Object>> getInfo();

}
