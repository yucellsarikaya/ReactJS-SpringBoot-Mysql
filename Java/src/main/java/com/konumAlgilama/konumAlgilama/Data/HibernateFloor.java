package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Floor;
import com.konumAlgilama.konumAlgilama.IData.IFloorData;

@Repository
public class HibernateFloor implements IFloorData {
	private EntityManager entityManager;

	@Autowired
	public HibernateFloor(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Floor> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Floor> floor = session.createQuery("from Floor", Floor.class).getResultList();
		return floor;
	}

	@Override
	@Transactional
	public void add(Floor floor) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(floor);
	}

	@Override
	@Transactional
	public void update(Floor floor) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(floor);
	}

	@Override
	@Transactional
	public void delete(Floor floor) {
		Session session = entityManager.unwrap(Session.class);
		Floor floorToDelete = session.get(Floor.class, floor.getId());
		session.delete(floorToDelete);// TODO Auto-generated method stub

	}

	@Override
	@Transactional
	public Floor getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Floor floor = session.get(Floor.class, id);
		return floor;
	}

	@Override
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> floor = session.createQuery(
				"select new Map(building.buildingname as buildingName, floor.floorname as floorName, floor.id as floorId) "
						+ "from Building building, Floor floor where "
						+ "building.id=floor.floorfk")
				.getResultList();
		return floor;
	}

}
