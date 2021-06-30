import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import countryService from '../../services/countryServices/countryService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Country() {
    const [test, setTest] = useState((0))
    const [countries, setCountries] = useState([])
    let history = useHistory();

    useEffect(() => {
        countryService.getCountry().then(result => {
            setCountries(result.data)
        })
    }, [test])

    const editCounrty = (id) => {
        history.push(`/countryUpdate/${id}`)
     }

     const delCounrty = (id) => {
        let del = {id}
        countryService.deleteCountry(del).then(res => alertify.success("İlçe Silindi", 1.5), setTest(test => test + 1)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>İlçe İsmi</th>
                        <th>Bulunduğu Şehir İsmi</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map((country, index) => (
                            <tr key={country.countryId}>
                                <th>{index}</th>
                                <td>{country.countryName}</td>
                                <td>{country.cityName}</td>
                                <td><button onClick={() => editCounrty(country.countryId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delCounrty(country.countryId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
