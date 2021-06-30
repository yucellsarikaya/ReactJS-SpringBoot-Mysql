package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Building;
import com.konumAlgilama.konumAlgilama.IData.IBuildingData;
import com.konumAlgilama.konumAlgilama.Interfaces.IBuildingService;

@Service
public class BuildingManager implements IBuildingService {
	private IBuildingData buildingData;

	@Autowired
	public BuildingManager(IBuildingData buildingData) {
		this.buildingData = buildingData;
	}

	@Override
	@Transactional
	public List<Building> getAll() {
		return this.buildingData.getAll();
	}

	@Override
	@Transactional
	public void add(Building building) {
		this.buildingData.add(building);
	}

	@Override
	@Transactional
	public void update(Building building) {
		this.buildingData.update(building);

	}

	@Override
	@Transactional
	public void delete(Building building) {
		this.buildingData.delete(building);

	}

	@Override
	@Transactional
	public Building getById(int id) {
		return this.buildingData.getById(id);

	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return this.buildingData.getInfo();
	}

}
