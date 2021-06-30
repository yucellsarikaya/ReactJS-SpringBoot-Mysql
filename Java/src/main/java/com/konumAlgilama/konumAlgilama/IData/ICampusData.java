package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Campus;

public interface ICampusData {
	List<Campus> getAll();

	void add(Campus campus);

	void update(Campus campus);

	void delete(Campus campus);

	Campus getById(int id);

	List<Map<String, Object>> getInfo();

}
