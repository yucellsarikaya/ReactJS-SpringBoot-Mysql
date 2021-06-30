import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import floorService from '../../services/floorServices/floorService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Floor() {
    const [test, setTest] = useState((0))
    const [floors, setFloors] = useState([])
    let history = useHistory();

    useEffect(() => {
        floorService.getFloor().then(result => {
            setFloors(result.data)
        })
    }, [test])

    const editFloor = (id) => {
        history.push(`/floorUpdate/${id}`)
    }

    const delFloor = (id) => {
        setTest(test => test + 1)
        let obje = { id: id }
        floorService.deleteFloor(obje).then(res => alertify.success("Kat Silindi", 1.5)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bulanan Kat Numaralari</th>
                        <th>Bağlı Olduğu Bina İsimleri</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        floors.map((floor, index) => (
                            <tr key={floor.floorId}>
                                <th>{index}</th>
                                <td>{floor.floorName}</td>
                                <td>{floor.buildingName}</td>
                                <td><button onClick={() => editFloor(floor.floorId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delFloor(floor.floorId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
