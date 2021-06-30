package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Block;
import com.konumAlgilama.konumAlgilama.IData.IBlokcData;

@Repository
public class HibernateBlock implements IBlokcData {
	private EntityManager entityManager;

	@Autowired
	public HibernateBlock(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Block> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Block> block = session.createQuery("from Block", Block.class).getResultList();
		return block;
	}

	@Override
	@Transactional
	public void add(Block block) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(block);
	}

	@Override
	@Transactional
	public void update(Block block) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(block);
	}

	@Override
	@Transactional
	public void delete(Block block) {
		Session session = entityManager.unwrap(Session.class);
		Block blockToDelete = session.get(Block.class, block.getId());
		session.delete(blockToDelete);
	}

	@Override
	@Transactional
	public Block getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Block block = session.get(Block.class, id);
		return block;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> block = session.createQuery(
				"select new Map(complex.complexname as complexName, block.blockname as blockName, block.id as blockId) "
						+ "from Complex complex, Block block where "
						+ "complex.id=block.blockfk")
				.getResultList();
		return block;
	}

}
