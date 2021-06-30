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

import com.konumAlgilama.konumAlgilama.Entities.Building;
import com.konumAlgilama.konumAlgilama.Interfaces.IBuildingService;

@RestController
@RequestMapping("/api/building")
@CrossOrigin
public class BuildingApi {
	private IBuildingService buildingService;

	public BuildingApi(IBuildingService buildingService) {
		this.buildingService = buildingService;
	}

	@GetMapping("/")
	public List<Building> get() {
		return buildingService.getAll();
	}

	@PostMapping("/buildingAdd")
	public void add(@RequestBody Building building) {
		buildingService.add(building);
	}

	@PostMapping("/buildingUpdate")
	public void update(@RequestBody Building building) {
		buildingService.update(building);
	}

	@DeleteMapping("/buildingDelete")
	public void delete(@RequestBody Building building) {
		buildingService.delete(building);
	}

	@GetMapping("/{id}")
	public Building getById(@PathVariable int id) {
		return buildingService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return buildingService.getInfo();
	}
}
