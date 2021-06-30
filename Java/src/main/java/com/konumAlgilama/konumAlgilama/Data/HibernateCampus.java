package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Campus;
import com.konumAlgilama.konumAlgilama.IData.ICampusData;

@Repository
public class HibernateCampus implements ICampusData {
	private EntityManager entityManager;

	@Autowired
	public HibernateCampus(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Campus> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Campus> campus = session.createQuery("from Campus", Campus.class).getResultList();
		return campus;
	}

	@Override
	@Transactional
	public void add(Campus campus) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(campus);
	}

	@Override
	@Transactional
	public void update(Campus campus) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(campus);
	}

	@Override
	@Transactional
	public void delete(Campus campus) {
		Session session = entityManager.unwrap(Session.class);
		Campus campusToDelete = session.get(Campus.class, campus.getId());
		session.delete(campusToDelete);
	}

	@Override
	@Transactional
	public Campus getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Campus campus = session.get(Campus.class, id);
		return campus;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> campus = session.createQuery(
				"select new Map(country.countryname as countryName,campus.campusname as campusName, campus.id as campusId) "
						+ "from Country country,Campus campus where "
						+ "country.id=campus.campusfk")
				.getResultList();
		return campus;
	}

}
