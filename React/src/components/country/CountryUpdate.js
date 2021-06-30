import React, { useState, useEffect } from 'react'
import cityService from '../../services/cityServices/cityService'
import countryService from '../../services/countryServices/countryService';
import alertify from "alertifyjs"

export default function CountryUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [countryName, setCountryname] = useState("")
    const [countryfk, setCountryFk] = useState("")
    const [cities, setCities] = useState([])
    const [sehir, setSehir] = useState("")

    const countryEdit = (e) => {
        e.preventDefault()
        let country = { id: id, countryname: countryName, countryFk: countryfk };
        countryService.updateCountry(country).then(res => alertify.success("İlçe Güncellendi", 1.5), props.history.push('/country')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    useEffect(() => {
        cityService.getCity().then(result => {
            setCities(result.data)
        })
        countryService.getCountryId(id).then((res) => {
            let country = res.data
            setCountryname(country.countryname)
            setCountryFk(country.countryFk)
            cityService.getCityId(country.countryFk).then((res) => {
                let city = res.data;
                setSehir(city.cityname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setCountryFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">İlçe Güncelle</div>
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
                                    <option selected>{sehir}</option>
                                    {
                                        cities.map((city) => (
                                            <option value={city.id}>{city.cityname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={countryEdit} >Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

