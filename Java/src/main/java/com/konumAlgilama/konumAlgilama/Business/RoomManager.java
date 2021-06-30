package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Room;
import com.konumAlgilama.konumAlgilama.IData.IRoomData;
import com.konumAlgilama.konumAlgilama.Interfaces.IRoomService;

@Service
public class RoomManager implements IRoomService {
	private IRoomData roomData;

	@Autowired
	public RoomManager(IRoomData roomData) {
		this.roomData = roomData;
	}

	@Override
	@Transactional
	public List<Room> getAll() {
		return this.roomData.getAll();
	}

	@Override
	@Transactional
	public void add(Room room) {
		this.roomData.add(room);
	}

	@Override
	@Transactional
	public void update(Room room) {
		this.roomData.update(room);
	}

	@Override
	@Transactional
	public void delete(Room room) {
		this.roomData.delete(room);
	}

	@Override
	@Transactional
	public Room getById(int id) {
		return this.roomData.getById(id);
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getEntitiesInfo() {
		return roomData.getEntitiesInfo();
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return roomData.getInfo();
	}

}
