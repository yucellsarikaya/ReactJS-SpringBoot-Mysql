package com.konumAlgilama.konumAlgilama.RestApi;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.konumAlgilama.konumAlgilama.Entities.City;
import com.konumAlgilama.konumAlgilama.Interfaces.ICityService;

@RestController
@RequestMapping("/api/city")
@CrossOrigin
public class CityApi {
	private ICityService cityService;

	public CityApi(ICityService cityService) {
		this.cityService = cityService;
	}
	
	@GetMapping("/")
	public List<City> get(){
		return cityService.getAll();
	}
	
	@PostMapping("/cityAdd")
	public void add(@RequestBody City city) {
		cityService.add(city);
	}
	
	@PostMapping("/cityUpdate")
	public void update(@RequestBody City city) {
		cityService.update(city);
	}
	
	@DeleteMapping("/cityDelete")
	public void delete(@RequestBody City city) {
		cityService.delete(city);
	}
	
	@GetMapping("/{id}")
	public City getById(@PathVariable int id){
		return cityService.getById(id);
	}
}
