package com.konumAlgilama.konumAlgilama.Data;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.konumAlgilama.konumAlgilama.Entities.Room;
import com.konumAlgilama.konumAlgilama.IData.IRoomData;

@Repository
public class HibernateRoom implements IRoomData {
	private EntityManager entityManager;

	@Autowired
	public HibernateRoom(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<Room> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Room> room = session.createQuery("from Room", Room.class).getResultList();
		return room;
	}

	@Override
	@Transactional
	public void add(Room room) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(room);
	}

	@Override
	@Transactional
	public void update(Room room) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(room);
	}

	@Override
	@Transactional
	public void delete(Room room) {
		Session session = entityManager.unwrap(Session.class);
		Room roomToDelete = session.get(Room.class, room.getId());
		session.delete(roomToDelete);
	}

	@Override
	@Transactional
	public Room getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Room room = session.get(Room.class, id);
		return room;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getEntitiesInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> rooms = session.createQuery(
				"select new Map(city.cityname as cityName,country.countryname as countryName,campus.campusname as campusName, complex.complexname as complexName, block.blockname as blockName,building.buildingname as buildingName, floor.floorname as floorName, room.roomname as roomName) "
						+ "from City city,Country country,Campus campus, Complex complex, Block block, Building building, Floor floor, Room room where "
						+ "city.id=country.countryFk and country.id=campus.campusfk and campus.id=complex.complexfk and complex.id=block.blockfk and block.id=building.buildingfk and building.id=floor.floorfk and floor.id=room.roomfk")
				.getResultList();
		return rooms;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> getInfo() {
		Session session = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> rooms = session.createQuery(
				"select new Map(floor.floorname as floorName, room.roomname as roomName, room.id as roomId) "
						+ "from Floor floor, Room room where "
						+ "floor.id=room.roomfk")
				.getResultList();
		return rooms;
	}

}
