package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Room;

public interface IRoomData {
	List<Room> getAll();

	void add(Room room);

	void update(Room room);

	void delete(Room room);

	Room getById(int id);

	List<Map<String, Object>> getEntitiesInfo();
	
	List<Map<String, Object>> getInfo();

}
