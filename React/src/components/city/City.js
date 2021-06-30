import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Table } from 'reactstrap';
import cityService from '../../services/cityServices/cityService'
import alertify from "alertifyjs"

export default function City(props) {
    const [test, setTest] = useState((0))
    const [cities, setCities] = useState([])
    let history = useHistory();

    useEffect(() => {
        cityService.getCity().then(result => {
            setCities(result.data)
        })
    }, [test])

    const editCity = (id) => {
        history.push(`/cityUpdate/${id}`)
    }

    const delCity = (id) => {
        setTest(test => test + 1)
        let del = { id }
        cityService.deleteCity(del).then(res => alertify.success("Şehir Silindi", 1.5)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Şehir İsmi</th>
                        <th>Plaka</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cities.map((city, index) => (
                            <tr key={city.id}>
                                <th>{index}</th>
                                <td>{city.cityname}</td>
                                <td>{city.cityno}</td>
                                <td><button onClick={() => editCity(city.id)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delCity(city.id)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
