import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import buildingService from '../../services/buildingServices/buildingService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Building() {
    const [test, setTest] = useState((0))
    const [buildings, setBuildings] = useState([])
    let history = useHistory();

    useEffect(() => {
        buildingService.getBuilding().then(result => {
            setBuildings(result.data)
        })
    }, [test])

    const editBuilding = (id) => {
        history.push(`/buildingUpdate/${id}`)
    }

    const delBuilding = (id) => {
        setTest(test => test + 1)
        let del = { id }
        buildingService.deleteBuilding(del).then(res => alertify.success("Bina Silindi", 1.5)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bina İsmi</th>
                        <th>Bulunduğu Blok İsmi</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buildings.map((building, index) => (
                            <tr key={building.buildingId}>
                                <th>{index}</th>
                                <td>{building.buildingName}</td>
                                <td>{building.blockName}</td>
                                <td><button onClick={() => editBuilding(building.buildingId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delBuilding(building.buildingId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
