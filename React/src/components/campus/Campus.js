import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import campusService from '../../services/campusServices/campusService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Campus(props) {
    const [test, setTest] = useState((0))
    const [campuss, setCampuss] = useState([])
    let history = useHistory();

    useEffect(() => {
        campusService.getCampus().then(result => {
            setCampuss(result.data)
        })
    }, [test])

    const editCampus = (id) => {
        history.push(`/campusUpdate/${id}`)
    }

    const delCampus = (id) => {
        setTest(test => test + 1)
        let del = { id }
        campusService.deleteCampus(del).then(res => alertify.success("Kampus Silindi", 1.5)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Kampus İsmi</th>
                        <th>Bulunduğu İlçe İsmi</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        campuss.map((campus, index) => (
                            <tr key={campus.campusId}>
                                <th>{index}</th>
                                <td>{campus.campusName}</td>
                                <td>{campus.countryName}</td>
                                <td><button onClick={() => editCampus(campus.campusId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delCampus(campus.campusId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
