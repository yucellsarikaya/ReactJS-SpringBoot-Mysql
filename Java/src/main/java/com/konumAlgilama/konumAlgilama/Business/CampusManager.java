package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Campus;
import com.konumAlgilama.konumAlgilama.IData.ICampusData;
import com.konumAlgilama.konumAlgilama.Interfaces.ICampusService;

@Service
public class CampusManager implements ICampusService {
	private ICampusData campusData;

	@Autowired
	public CampusManager(ICampusData campusData) {
		this.campusData = campusData;
	}

	@Override
	@Transactional
	public List<Campus> getAll() {
		return this.campusData.getAll();
	}

	@Override
	@Transactional
	public void add(Campus campus) {
		this.campusData.add(campus);
	}

	@Override
	@Transactional
	public void update(Campus campus) {
		this.campusData.update(campus);
	}

	@Override
	@Transactional
	public void delete(Campus campus) {
		this.campusData.delete(campus);
	}

	@Override
	@Transactional
	public Campus getById(int id) {
		return this.campusData.getById(id);
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return this.campusData.getInfo();
	}

}
