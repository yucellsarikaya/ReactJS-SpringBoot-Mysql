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

import com.konumAlgilama.konumAlgilama.Entities.Country;
import com.konumAlgilama.konumAlgilama.Interfaces.ICountryService;

@RestController
@RequestMapping("/api/country")
@CrossOrigin
public class CountryApi {
	private ICountryService countryService;

	public CountryApi(ICountryService countryService) {
		this.countryService = countryService;
	}

	@GetMapping("/")
	public List<Country> get() {
		return countryService.getAll();
	}

	@PostMapping("/countryAdd")
	public void add(@RequestBody Country country) {
		countryService.add(country);
	}

	@PostMapping("/countryUpdate")
	public void update(@RequestBody Country country) {
		countryService.update(country);
	}

	@DeleteMapping("/countryDelete")
	public void delete(@RequestBody Country country) {
		countryService.delete(country);
	}

	@GetMapping("/{id}")
	public Country getById(@PathVariable int id) {
		return countryService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return countryService.getInfo();
	}
}
