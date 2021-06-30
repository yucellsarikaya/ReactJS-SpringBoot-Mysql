package com.konumAlgilama.konumAlgilama.Interfaces;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Floor;

public interface IFloorService {
	List<Floor> getAll();

	void add(Floor floor);

	void update(Floor floor);

	void delete(Floor floor);

	List<Map<String, Object>> getInfo();
	
	Floor getById(int id);
}
