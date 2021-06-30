import React, { useState, useEffect } from 'react'
import countryService from '../../services/countryServices/countryService';
import campusService from '../../services/campusServices/campusService'
import alertify from "alertifyjs"

export default function CampusUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [campusName, setCampusName] = useState("")
    const [campusFk, setCampusFk] = useState("")
    const [countries, setCountries] = useState([])
    const [ilce, setIlce] = useState("")

    const editCampus = (e) => {
        e.preventDefault()
        let campus = { id: id, campusname: campusName, campusfk: campusFk };
        campusService.updateCampus(campus).then(res => alertify.success("Kampus Güncellendi", 1.5), props.history.push('/campus')).catch(err => alertify.error("Bir hata oluştu", 1.5));

    }

    useEffect(() => {
        countryService.listCountry().then(result => {
            setCountries(result.data)
        })
        campusService.getCampusId(id).then((res) => {
            let campus = res.data
            setCampusName(campus.campusname)
            setCampusFk(campus.campusfk)
            countryService.getCountryId(campus.campusfk).then((res) => {
                let country = res.data;
                setIlce(country.countryname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setCampusFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Kampus Güncelle</div>
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
                                    <option selected>{ilce}</option>
                                    {
                                        countries.map((country) => (
                                            <option value={country.id}>{country.countryname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={editCampus}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
