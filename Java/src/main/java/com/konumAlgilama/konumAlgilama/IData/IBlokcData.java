package com.konumAlgilama.konumAlgilama.IData;

import java.util.List;
import java.util.Map;

import com.konumAlgilama.konumAlgilama.Entities.Block;

public interface IBlokcData {
	List<Block> getAll();

	void add(Block block);

	void update(Block block);

	void delete(Block block);

	Block getById(int id);

	List<Map<String, Object>> getInfo();

}
