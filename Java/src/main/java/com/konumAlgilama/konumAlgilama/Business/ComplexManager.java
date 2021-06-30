package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Complex;
import com.konumAlgilama.konumAlgilama.IData.IComplexData;
import com.konumAlgilama.konumAlgilama.Interfaces.IComplexService;

@Service
public class ComplexManager implements IComplexService {
	private IComplexData complexData;

	@Autowired
	public ComplexManager(IComplexData complexData) {
		this.complexData = complexData;
	}

	@Override
	@Transactional
	public List<Complex> getAll() {
		return this.complexData.getAll();
	}

	@Override
	@Transactional
	public void add(Complex complex) {
		this.complexData.add(complex);

	}

	@Override
	@Transactional
	public void update(Complex complex) {
		this.complexData.update(complex);

	}

	@Override
	@Transactional
	public void delete(Complex complex) {
		this.complexData.delete(complex);

	}

	@Override
	@Transactional
	public Complex getById(int id) {
		return this.complexData.getById(id);
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return this.complexData.getInfo();
	}

}
