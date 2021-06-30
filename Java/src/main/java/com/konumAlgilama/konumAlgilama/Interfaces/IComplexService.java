package com.konumAlgilama.konumAlgilama.Interfaces;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Complex;

public interface IComplexService {
	List<Complex> getAll();

	void add(Complex complex);

	void update(Complex complex);

	void delete(Complex complex);

	Complex getById(int id);

	List<Map<String, Object>> getInfo();

}
