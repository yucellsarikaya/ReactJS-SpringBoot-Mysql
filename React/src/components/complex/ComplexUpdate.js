import React, { useState, useEffect } from 'react'
import campusService from '../../services/campusServices/campusService'
import complexService from '../../services/complexServices/complexService'
import alertify from "alertifyjs"

export default function ComplexUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [complexesName, setComplexesName] = useState("")
    const [complexesFk, setComplexesFk] = useState("")
    const [campuss, setCampus] = useState([])
    const [kampus, setKampus] = useState("")

    const editComplex = (e) => {
        e.preventDefault()
        let complex = { id: id, complexname: complexesName, complexfk: complexesFk };
        complexService.updateComplex(complex).then(res => alertify.success("Site Güncellendi", 1.5), props.history.push('/complex')).catch(err => alertify.error("Bir hata oluştu", 1.5));

    }

    useEffect(() => {
        campusService.listCampus().then(result => {
            setCampus(result.data)
        })
        complexService.getComplexId(id).then((res) => {
            let complex = res.data
            setComplexesName(complex.complexname)
            setComplexesFk(complex.complexfk)
            campusService.getCampusId(complex.complexfk).then((res) => {
                let campus = res.data;
                setKampus(campus.campusname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setComplexesFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Site Güncelle</div>
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
                                    <option selected>{kampus}</option>
                                    {
                                        campuss.map((campus) => (
                                            <option value={campus.id}>{campus.campusname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={editComplex}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
