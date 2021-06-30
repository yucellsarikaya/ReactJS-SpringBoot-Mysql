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

import com.konumAlgilama.konumAlgilama.Entities.Campus;
import com.konumAlgilama.konumAlgilama.Interfaces.ICampusService;

@RestController
@RequestMapping("/api/campus")
@CrossOrigin
public class CampusApi {
	private ICampusService campusService;

	public CampusApi(ICampusService campusService) {
		this.campusService = campusService;
	}

	@GetMapping("/")
	public List<Campus> get() {
		return campusService.getAll();
	}

	@PostMapping("/campusAdd")
	public void add(@RequestBody Campus campus) {
		campusService.add(campus);
	}

	@PostMapping("/campusUpdate")
	public void update(@RequestBody Campus campus) {
		campusService.update(campus);
	}

	@DeleteMapping("/campusDelete")
	public void delete(@RequestBody Campus campus) {
		campusService.delete(campus);
	}

	@GetMapping("/{id}")
	public Campus getById(@PathVariable int id) {
		return campusService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return campusService.getInfo();
	}
}
