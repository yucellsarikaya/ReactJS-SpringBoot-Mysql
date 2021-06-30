import React, { Component } from 'react'
import cityService from '../../services/cityServices/cityService'
import alertify from "alertifyjs"

class CityAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityname: '',
            cityno: ''
        }
    }
    saveCity = (e) => {
        e.preventDefault()
        let city = { cityname: this.state.cityname, cityno: this.state.cityno };
        cityService.createCity(city).then(res => alertify.success("Şehir Eklendi", 1.5), this.props.history.push('/city')).catch(err =>alertify.error("Bir hata oluştu", 1.5));
    }
    changeCityNameHandler = (event) => {
        this.setState({ cityname: event.target.value })
    }

    changeCityNoHandler = (event) => {
        this.setState({ cityno: event.target.value })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="text-center">Şehir Ekle</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Şehir İsmi</label>
                                    <input
                                        placeholder="Şehir İsmi Giriniz"
                                        name="cityname"
                                        className="form-control"
                                        value={this.state.cityname}
                                        onChange={this.changeCityNameHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Şehir Plaka</label>
                                    <input
                                        placeholder="Şehir Plaka Giriniz"
                                        type="number"
                                        name="cityno"
                                        className="form-control"
                                        value={this.state.cityno}
                                        onChange={this.changeCityNoHandler}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={this.saveCity} >Kayıt Et</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CityAdd