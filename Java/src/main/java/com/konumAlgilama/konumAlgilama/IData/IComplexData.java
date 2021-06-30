package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Complex;

public interface IComplexData {
	List<Complex> getAll();

	void add(Complex complex);

	void update(Complex complex);

	void delete(Complex complex);

	Complex getById(int id);
	
	List<Map<String, Object>> getInfo();
	
}
