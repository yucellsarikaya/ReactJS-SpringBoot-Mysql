package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Floor;
import com.konumAlgilama.konumAlgilama.IData.IFloorData;
import com.konumAlgilama.konumAlgilama.Interfaces.IFloorService;

@Service
public class FloorManager implements IFloorService {
	private IFloorData floorData;

	@Autowired
	public FloorManager(IFloorData floorData) {
		this.floorData = floorData;
	}

	@Override
	@Transactional
	public List<Floor> getAll() {
		return this.floorData.getAll();
	}

	@Override
	@Transactional
	public void add(Floor floor) {
		this.floorData.add(floor);
	}

	@Override
	@Transactional
	public void update(Floor floor) {
		this.floorData.update(floor);

	}

	@Override
	@Transactional
	public void delete(Floor floor) {
		this.floorData.delete(floor);
	}

	@Override
	@Transactional
	public Floor getById(int id) {
		return this.floorData.getById(id);
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return this.floorData.getInfo();
	}

}
