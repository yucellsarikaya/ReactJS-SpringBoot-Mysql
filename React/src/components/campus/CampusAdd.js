import React, { useState, useEffect } from 'react'
import countryService from '../../services/countryServices/countryService'
import campusService from '../../services/campusServices/campusService'
import alertify from "alertifyjs"
import { useHistory } from "react-router-dom";

export default function CampusAdd() {
    const [campusName, setCampusName] = useState("")
    const [campusFk, setCampusFk] = useState("")
    const [countries, setCountries] = useState([])
    let history = useHistory();

    useEffect(() => {
        countryService.listCountry().then(result => {
            setCountries(result.data)
        })
    }, [])

    const saveCampus = (e) => {
        e.preventDefault()
        let campus = { campusname: campusName, campusfk: campusFk };
        console.log(campus)
        campusService.createCampus(campus).then(res => alertify.success("Kampus Eklendi", 1.5), history.push('/campus')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    const handleChange = (e) => {
        setCampusFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Kampus Ekle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Kampus İsmi</label>
                                <input
                                    placeholder="Kampüs İsmi Giriniz"
                                    name="campusName"
                                    className="form-control"
                                    onChange={e => setCampusName(e.target.value)}
                                    value={campusName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected></option>
                                    {
                                        countries.map((country) => (
                                            <option value={country.id}>{country.countryname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={saveCampus}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
