package com.konumAlgilama.konumAlgilama.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "block")
public class Block {
	@Id
	@Column(name = "block_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "block_name")
	private String blockname;

	@Column(name = "block_complexfk")
	private int blockfk;

	public Block() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBlockname() {
		return blockname;
	}

	public void setBlockname(String blockname) {
		this.blockname = blockname;
	}

	public int getBlockfk() {
		return blockfk;
	}

	public void setBlockfk(int blockfk) {
		this.blockfk = blockfk;
	}

}
