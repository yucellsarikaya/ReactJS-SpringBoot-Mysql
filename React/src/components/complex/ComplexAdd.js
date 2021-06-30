import React, { useState, useEffect } from 'react'
import campusService from '../../services/campusServices/campusService'
import complexService from '../../services/complexServices/complexService'
import alertify from "alertifyjs"
import { useHistory } from "react-router-dom";

export default function ComplexAdd() {
    const [complexesName, setComplexesName] = useState("")
    const [complexesFk, setComplexesFk] = useState("")
    const [campuss, setCampus] = useState([])
    let history = useHistory();

    useEffect(() => {
        campusService.listCampus().then(result => {
            setCampus(result.data)
        })
    }, [])

    const saveComplex = (e) => {
        e.preventDefault()
        let complex = { complexname: complexesName, complexfk: complexesFk };
        complexService.createComplex(complex).then(res => alertify.success("Site Eklendi", 1.5),  history.push('/complex')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    const handleChange = (e) => {
        setComplexesFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Site Ekle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Site İsmi</label>
                                <input
                                    placeholder="Site İsmi Giriniz"
                                    name="complexesName"
                                    className="form-control"
                                    onChange={e => setComplexesName(e.target.value)}
                                    value={complexesName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected></option>
                                    {
                                        campuss.map((campus) => (
                                            <option value={campus.id}>{campus.campusname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={saveComplex}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
