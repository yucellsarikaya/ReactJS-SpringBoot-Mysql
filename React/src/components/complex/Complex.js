import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import complexService from '../../services/complexServices/complexService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Complex() {
    const [test, setTest] = useState((0))
    let history = useHistory();
    const [complexes, setComplexes] = useState([])

    useEffect(() => {
        complexService.getComplex().then(result => {
            setComplexes(result.data)
        })
    }, [test])

    const editComplex = (id) => {
        history.push(`/complexUpdate/${id}`)
    }

    const delComplex = (id) => {
        setTest(test => test + 1)
        let del = {id}
        complexService.deleteComplex(del).then(res => alertify.success("Site Silindi", 1.5)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Site İsmi</th>
                        <th>Bulunduğu Kampus İsmi</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        complexes.map((complex, index) => (
                            <tr key={complex.complexId}>
                                <th>{index}</th>
                                <td>{complex.complexName}</td>
                                <td>{complex.campusName}</td>
                                <td><button onClick={() => editComplex(complex.complexId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delComplex(complex.complexId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
