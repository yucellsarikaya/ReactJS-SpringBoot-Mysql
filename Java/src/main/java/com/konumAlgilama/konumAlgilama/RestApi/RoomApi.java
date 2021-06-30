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

import com.konumAlgilama.konumAlgilama.Entities.Room;
import com.konumAlgilama.konumAlgilama.Interfaces.IRoomService;

@RestController
@RequestMapping("/api/room")
@CrossOrigin
public class RoomApi {
	private IRoomService roomService;

	public RoomApi(IRoomService roomService) {
		this.roomService = roomService;
	}

	@GetMapping("/")
	public List<Room> get() {
		return roomService.getAll();
	}

	@PostMapping("/roomAdd")
	public void add(@RequestBody Room room) {
		roomService.add(room);
	}

	@PostMapping("/roomUpdate")
	public void update(@RequestBody Room room) {
		roomService.update(room);
	}

	@DeleteMapping("/roomDelete")
	public void delete(@RequestBody Room room) {
		roomService.delete(room);
	}

	@GetMapping("/{id}")
	public Room getById(@PathVariable int id) {
		return roomService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return roomService.getInfo();
	}
	
	@GetMapping("/loc")
	public List<Map<String, Object>> getEntitiesInfo() {
		return roomService.getEntitiesInfo();
	}
}
