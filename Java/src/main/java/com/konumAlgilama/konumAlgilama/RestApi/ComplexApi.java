package com.konumAlgilama.konumAlgilama.RestApi;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.konumAlgilama.konumAlgilama.Entities.Complex;
import com.konumAlgilama.konumAlgilama.Interfaces.IComplexService;

@RestController
@RequestMapping("/api/complex")
@CrossOrigin
public class ComplexApi {
	private IComplexService complexService;

	public ComplexApi(IComplexService complexService) {
		this.complexService = complexService;
	}

	@GetMapping("/")
	public List<Complex> get() {
		return complexService.getAll();
	}

	@PostMapping("/complexAdd")
	public void add(@RequestBody Complex complex) {
		complexService.add(complex);
	}

	@PostMapping("/complexUpdate")
	public void update(@RequestBody Complex complex) {
		complexService.update(complex);
	}

	@DeleteMapping("/complexDelete")
	public void delete(@RequestBody Complex complex) {
		complexService.delete(complex);
	}

	@GetMapping("/{id}")
	public Complex getById(@PathVariable int id) {
		return complexService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return complexService.getInfo();
	}
}
