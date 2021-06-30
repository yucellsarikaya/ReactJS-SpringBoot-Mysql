import React, { Component } from 'react'
import cityService from '../../services/cityServices/cityService'
import alertify from "alertifyjs"

class CityUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            cityname: '',
            cityno: ''
        }

    }
    updateCity = (e) => {
        e.preventDefault()
        let city = { id: this.state.id, cityname: this.state.cityname, cityno: this.state.cityno };
        cityService.updateCity(city).then(res => alertify.success("Şehir Güncellendi", 1.5), this.props.history.push('/city')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }
    changeCityNameHandler = (event) => {
        this.setState({ cityname: event.target.value })
    }

    changeCityNoHandler = (event) => {
        this.setState({ cityno: event.target.value })
    }

    componentDidMount() {
        cityService.getCityId(this.state.id).then((res) => {
            let city = res.data;
            this.setState({
                cityname: city.cityname,
                cityno: city.cityno
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="text-center">Şehir Güncelle</div>
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
                                        name="cityno"
                                        type="number"
                                        className="form-control"
                                        value={this.state.cityno}
                                        onChange={this.changeCityNoHandler}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={this.updateCity} >Kayıt Et</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CityUpdate