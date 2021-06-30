package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Complex;
import com.konumAlgilama.konumAlgilama.IData.IComplexData;

@Repository
public class HibernateComplex implements IComplexData {
	private EntityManager entityManager;

	@Autowired
	public HibernateComplex(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Complex> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Complex> complex = session.createQuery("from Complex", Complex.class).getResultList();
		return complex;
	}

	@Override
	@Transactional
	public void add(Complex complex) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(complex);
	}

	@Override
	@Transactional
	public void update(Complex complex) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(complex);// TODO Auto-generated method stub

	}

	@Override
	@Transactional
	public void delete(Complex complex) {
		Session session = entityManager.unwrap(Session.class);
		Complex complexToDelete = session.get(Complex.class, complex.getId());
		session.delete(complexToDelete);

	}

	@Override
	@Transactional
	public Complex getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Complex complex = session.get(Complex.class, id);
		return complex;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> complex = session.createQuery(
				"select new Map(campus.campusname as campusName, complex.complexname as complexName, complex.id as complexId) "
						+ "from Campus campus, Complex complex where "
						+ "campus.id=complex.complexfk")
				.getResultList();
		return complex;
	}

}
