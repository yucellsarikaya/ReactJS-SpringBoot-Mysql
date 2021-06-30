package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "room")
public class Room {
	@Id
	@Column(name = "room_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "room_no")
	private int roomname;

	@Column(name = "room_floorfk")
	private int roomfk;

	public Room() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRoomname() {
		return roomname;
	}

	public void setRoomname(int roomname) {
		this.roomname = roomname;
	}

	public int getRoomfk() {
		return roomfk;
	}

	public void setRoomfk(int roomfk) {
		this.roomfk = roomfk;
	}

}
