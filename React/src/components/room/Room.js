import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import roomServices from '../../services/roomServices/roomService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Room() {
    const [test, setTest] = useState((0))
    const [rooms, setRooms] = useState([])
    let history = useHistory();

    useEffect(() => {
        roomServices.getRoom().then(result => {
            setRooms(result.data)
        })
    }, [test])

    const editRoom = (id) => {
        history.push(`/roomUpdate/${id}`)
    }

    const delRoom = (id) => {
        setTest(test => test + 1)
        let del = { id }
        roomServices.deleteRoom(del).then(res => alertify.success("Oda Silindi", 1.5)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bulanan oda numaraları</th>
                        <th>Bağlı olduğu kat numarsı</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map((room, index) => (
                            <tr key={room.roomId}>
                                <th>{index}</th>
                                <td>{room.roomName}</td>
                                <td>{room.floorName}</td>
                                <td><button onClick={() => editRoom(room.roomId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delRoom(room.roomId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
