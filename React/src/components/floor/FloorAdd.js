import React, { useState, useEffect } from 'react'
import buildingService from '../../services/buildingServices/buildingService'
import floorService from '../../services/floorServices/floorService'
import alertify from "alertifyjs"
import { useHistory } from "react-router-dom";

export default function FloorAdd() {
    const [buildings, setBuildings] = useState([])
    const [floorName, setFloorName] = useState("")
    const [floorFk, setFloorFk] = useState("")
    let history = useHistory();

    useEffect(() => {
        buildingService.listBuilding().then(result => {
            setBuildings(result.data)
        })
    }, [])

    const handleChange = (e) => {
        setFloorFk(e.target.value)
    }

    const saveFloor = (e) => {
        e.preventDefault()
        let floor = { floorname: floorName, floorfk: floorFk };
        floorService.createFloor(floor).then(res => alertify.success("Kat Eklendi", 1.5), history.push('/floor')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }


    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Kat Ekle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Kat Numarası</label>
                                <input
                                    placeholder="Kat Numarsı Giriniz"
                                    name="floorName"
                                    type="number"
                                    className="form-control"
                                    onChange={e => setFloorName(e.target.value)}
                                    value={floorName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected></option>
                                    {
                                        buildings.map((building) => (
                                            <option value={building.id}>{building.buildingname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={saveFloor}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
