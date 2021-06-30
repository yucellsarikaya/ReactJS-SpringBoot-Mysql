package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Building;
import com.konumAlgilama.konumAlgilama.IData.IBuildingData;

@Repository
public class HibernateBuilding implements IBuildingData {

	private EntityManager entityManager;

	@Autowired
	public HibernateBuilding(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Building> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Building> building = session.createQuery("from Building", Building.class).getResultList();
		return building;
	}

	@Override
	@Transactional
	public void add(Building building) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(building);
	}

	@Override
	@Transactional
	public void update(Building building) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(building);
	}

	@Override
	@Transactional
	public void delete(Building building) {
		Session session = entityManager.unwrap(Session.class);
		Building buildingToDelete = session.get(Building.class, building.getId());
		session.delete(buildingToDelete);
	}

	@Override
	@Transactional
	public Building getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Building building = session.get(Building.class, id);
		return building;
	}

	@Override
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> building = session.createQuery(
				"select new Map(block.blockname as blockName,building.buildingname as buildingName, building.id as buildingId) "
						+ "from Block block, Building building where "
						+ "block.id=building.buildingfk")
				.getResultList();
		return building;
	}

}
