package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Country;
import com.konumAlgilama.konumAlgilama.IData.ICountryData;
import com.konumAlgilama.konumAlgilama.Interfaces.ICountryService;

@Service
public class CountryMananager implements ICountryService {
	private ICountryData countryData;

	@Autowired
	public CountryMananager(ICountryData countryData) {
		this.countryData = countryData;
	}

	@Override
	@Transactional
	public List<Country> getAll() {
		return this.countryData.getAll();
	}

	@Override
	@Transactional
	public void add(Country country) {
		this.countryData.add(country);
	}

	@Override
	@Transactional
	public void update(Country country) {
		this.countryData.update(country);
	}

	@Override
	@Transactional
	public void delete(Country country) {
		this.countryData.delete(country);
	}

	@Override
	@Transactional
	public Country getById(int id) {
		return this.countryData.getById(id);
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return this.countryData.getInfo();
	}

}
