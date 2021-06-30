import React, { useState, useEffect } from 'react'
import cityService from '../../services/cityServices/cityService'
import countryService from '../../services/countryServices/countryService';
import alertify from "alertifyjs"
import { Label } from 'reactstrap';
import { useHistory } from "react-router-dom";

export default function CountryAdd() {
    const [countryName, setCountryname] = useState("")
    const [countryFk, setCountryFk] = useState("")
    const [cities, setCities] = useState([])
    let history = useHistory();

    useEffect(() => {
        cityService.getCity().then(result => {
            setCities(result.data)
        })
    }, [])

    const countryAdd = (e) => {
        e.preventDefault()
        let country = { countryname: countryName, countryFk: countryFk };
        countryService.createCountry(country).then(res => alertify.success("İlçe Eklendi", 1.5), history.push('/country')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    const handleChange = (e) => {
        setCountryFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">İlçe Ekle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>İlçe İsmi</label>
                                <input
                                    placeholder="İlçe İsmi Giriniz"
                                    name="cityName"
                                    className="form-control"
                                    onChange={e => setCountryname(e.target.value)}
                                    value={countryName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected></option>
                                    {
                                        cities.map((city) => (
                                            <option value={city.id}>{city.cityname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={countryAdd} >Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
