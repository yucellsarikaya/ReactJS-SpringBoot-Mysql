package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.konumAlgilama.konumAlgilama.Entities.*;
import com.konumAlgilama.konumAlgilama.IData.ICityData;
import com.konumAlgilama.konumAlgilama.Interfaces.ICityService;

@Service
public class CityManager implements ICityService {
	private ICityData cityDat;

	@Autowired
	public CityManager(ICityData cityDat) {
		this.cityDat = cityDat;
	}

	@Override
	@Transactional
	public List<City> getAll() {
		return this.cityDat.getAll();
	}

	@Override
	@Transactional
	public void add(City city) {
		this.cityDat.add(city);
	}

	@Override
	@Transactional
	public void update(City city) {
		this.cityDat.update(city);
	}

	@Override
	@Transactional
	public void delete(City city) {
		this.cityDat.delete(city);
	}

	@Override
	@Transactional
	public City getById(int id) {
		return this.cityDat.getById(id);
	}

}
