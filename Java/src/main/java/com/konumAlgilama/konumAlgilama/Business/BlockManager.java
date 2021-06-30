package com.konumAlgilama.konumAlgilama.Business;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Block;
import com.konumAlgilama.konumAlgilama.IData.IBlokcData;
import com.konumAlgilama.konumAlgilama.Interfaces.IBlockService;

@Service
public class BlockManager implements IBlockService {
	private IBlokcData blockData;

	@Autowired
	public BlockManager(IBlokcData blockData) {
		this.blockData = blockData;
	}

	@Override
	@Transactional
	public List<Block> getAll() {
		return this.blockData.getAll();
	}

	@Override
	@Transactional
	public void add(Block block) {
		this.blockData.add(block);
	}

	@Override
	@Transactional
	public void update(Block block) {
		this.blockData.update(block);
	}

	@Override
	@Transactional
	public void delete(Block block) {
		this.blockData.delete(block);
	}

	@Override
	@Transactional
	public Block getById(int id) {
		return this.blockData.getById(id);
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		return blockData.getInfo();

	}

}
