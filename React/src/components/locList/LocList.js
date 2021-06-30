import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import LocListService from '../../services/locListServices/locListService'

export default function LocList() {
    const [lists, setList] = useState([])

    useEffect(() => {
        LocListService.getList().then(result => {
            setList(result.data)
        })
    }, [])

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Şehir</th>
                        <th>İlçe</th>
                        <th>Kampus</th>
                        <th>Site</th>
                        <th>Blok</th>
                        <th>Bina</th>
                        <th>Kat</th>
                        <th>Oda</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        lists.map((list, index) => (
                            <tr key={index}>
                                <th>{index}</th>
                                <td>{list.cityName}</td>
                                <td>{list.countryName}</td>
                                <td>{list.campusName}</td>
                                <td>{list.complexName}</td>
                                <td>{list.blockName}</td>
                                <td>{list.buildingName}</td>
                                <td>{list.floorName}</td>
                                <td>{list.roomName}</td>
                            </tr>
                        ))
                    } 
                </tbody>
            </Table>
        </div>
    )
}
