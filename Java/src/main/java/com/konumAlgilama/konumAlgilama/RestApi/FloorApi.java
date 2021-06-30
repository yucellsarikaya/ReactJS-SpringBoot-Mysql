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

import com.konumAlgilama.konumAlgilama.Entities.Floor;
import com.konumAlgilama.konumAlgilama.Interfaces.IFloorService;

@RestController
@RequestMapping("/api/floor")
@CrossOrigin
public class FloorApi {
	private IFloorService floorService;

	public FloorApi(IFloorService floorService) {
		this.floorService = floorService;
	}

	@GetMapping("/")
	public List<Floor> get() {
		return floorService.getAll();
	}

	@PostMapping("/floorAdd")
	public void add(@RequestBody Floor floor) {
		floorService.add(floor);
	}

	@PostMapping("/floorUpdate")
	public void update(@RequestBody Floor floor) {
		floorService.update(floor);
	}

	@DeleteMapping("/floorDelete")
	public void delete(@RequestBody Floor floor) {
		floorService.delete(floor);
	}

	@GetMapping("/{id}")
	public Floor getById(@PathVariable int id) {
		return floorService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return floorService.getInfo();
	}
}
