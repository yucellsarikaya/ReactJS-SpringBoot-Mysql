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

import com.konumAlgilama.konumAlgilama.Entities.Block;
import com.konumAlgilama.konumAlgilama.Interfaces.IBlockService;

@RestController
@RequestMapping("/api/block")
@CrossOrigin
public class BlockApi {
	private IBlockService blockService;

	public BlockApi(IBlockService blockService) {
		this.blockService = blockService;
	}

	@GetMapping("/")
	public List<Block> get() {
		return blockService.getAll();
	}

	@PostMapping("/blockAdd")
	public void add(@RequestBody Block block) {
		blockService.add(block);
	}

	@PostMapping("/blockUpdate")
	public void update(@RequestBody Block block) {
		blockService.update(block);
	}

	@DeleteMapping("/blockDelete")
	public void delete(@RequestBody Block block) {
		blockService.delete(block);
	}

	@GetMapping("/{id}")
	public Block getById(@PathVariable int id) {
		return blockService.getById(id);
	}
	
	@GetMapping("/address")
	public List<Map<String, Object>> getInfo() {
		return blockService.getInfo();
	}
}
