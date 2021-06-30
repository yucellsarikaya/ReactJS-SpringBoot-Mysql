import React, { useState, useEffect } from 'react'
import floorService from '../../services/floorServices/floorService'
import roomService from '../../services/roomServices/roomService'
import alertify from "alertifyjs"


export default function RoomUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [roomName, setRoomName] = useState("")
    const [roomFk, setRoomFk] = useState("")
    const [floors, setFloors] = useState([])
    const [kat, setKat] = useState("")

    const editRoom = (e) => {
        e.preventDefault()
        let room = { id: id, roomname: roomName, roomfk: roomFk };
        roomService.updateRoom(room).then(res => alertify.success("Oda Güncellendi", 1.5), props.history.push('/room')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    useEffect(() => {
        floorService.listFloor().then(result => {
            setFloors(result.data)
        })
        roomService.getRoomId(id).then((res) => {
            let room = res.data
            setRoomName(room.roomname)
            setRoomFk(room.roomfk)
            floorService.getFloorId(room.roomfk).then((res) => {
                let floor = res.data;
                setKat(floor.floorname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setRoomFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Oda Güncelle</div>
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
                                    <option selected>{kat}</option>
                                    {
                                        floors.map((floor) => (
                                            <option value={floor.id}>{floor.floorname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={editRoom}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
