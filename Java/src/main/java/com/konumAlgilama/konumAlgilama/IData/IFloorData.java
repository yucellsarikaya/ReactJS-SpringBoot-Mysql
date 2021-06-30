package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Floor;

public interface IFloorData {
	List<Floor> getAll();

	void add(Floor floor);

	void update(Floor floor);

	void delete(Floor floor);

	Floor getById(int id);
	
	List<Map<String, Object>> getInfo();

}
