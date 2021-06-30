import React, { useState, useEffect } from 'react'
import floorService from '../../services/floorServices/floorService'
import roomService from '../../services/roomServices/roomService'
import alertify from "alertifyjs"
import { useHistory } from "react-router-dom";

export default function RoomAdd() {
    const [roomName, setRoomName] = useState("")
    const [roomFk, setRoomFk] = useState("")
    const [floors, setFloors] = useState([])
    let history = useHistory();

    useEffect(() => {
        floorService.listFloor().then(result => {
            setFloors(result.data)
        })
    }, [])

    const handleChange = (e) => {
        setRoomFk(e.target.value)
    }

    const saveRoom = (e) => {
        e.preventDefault()
        let room = { roomname: roomName, roomfk: roomFk };
        roomService.createRoom(room).then(res => alertify.success("Oda Eklendi", 1.5), history.push('/room')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Oda Ekle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Oda Numarası</label>
                                <input
                                    placeholder="Oda Numarsı Giriniz"
                                    name="roomName"
                                    type="number"
                                    className="form-control"
                                    onChange={e => setRoomName(e.target.value)}
                                    value={roomName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected></option>
                                    {
                                        floors.map((floor) => (
                                            <option value={floor.id}>{floor.floorname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={saveRoom}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
