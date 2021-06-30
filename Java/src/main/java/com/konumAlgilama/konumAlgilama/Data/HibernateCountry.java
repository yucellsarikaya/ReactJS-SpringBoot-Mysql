package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Country;
import com.konumAlgilama.konumAlgilama.IData.ICountryData;

@Repository
public class HibernateCountry implements ICountryData {
	private EntityManager entityManager;

	@Autowired
	public HibernateCountry(EntityManager entityManager) {
		super();
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Country> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Country> country = session.createQuery("from Country", Country.class).getResultList();
		return country;
	}

	@Override
	@Transactional
	public void add(Country country) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(country);
	}

	@Override
	@Transactional
	public void update(Country country) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(country);
	}

	@Override
	@Transactional
	public void delete(Country country) {
		Session session = entityManager.unwrap(Session.class);
		Country countryToDelete = session.get(Country.class, country.getId());
		session.delete(countryToDelete);
	}

	@Override
	@Transactional
	public Country getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Country country = session.get(Country.class, id);
		return country;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> country = session
				.createQuery(
						"select new Map(city.cityname as cityName,country.countryname as countryName, country.id as countryId ) "
								+ "from City city,Country country where " + "city.id=country.countryFk ")
				.getResultList();
		return country;
	}

}
