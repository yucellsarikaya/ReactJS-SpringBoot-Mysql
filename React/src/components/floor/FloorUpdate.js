import React, { useState, useEffect } from 'react'
import floorService from '../../services/floorServices/floorService'
import buildingService from '../../services/buildingServices/buildingService'
import alertify from "alertifyjs"

export default function FloorUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [buildings, setBuildings] = useState([])
    const [floorName, setFloorName] = useState("")
    const [floorFk, setFloorFk] = useState("")
    const [bina, setBina] = useState("")

    const editFloor = (e) => {
        e.preventDefault()
        let floor = { id: id, floorname: floorName, floorfk: floorFk };
        floorService.updateFloor(floor).then(res => alertify.success("Kat Güncellendi", 1.5), props.history.push('/floor')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    useEffect(() => {
        buildingService.listBuilding().then(result => {
            setBuildings(result.data)
        })
        floorService.getFloorId(id).then((res) => {
            let floor = res.data
            setFloorName(floor.floorname)
            setFloorFk(floor.floorfk)
            buildingService.getBuildingId(floor.floorfk).then((res) => {
                let building = res.data;
                setBina(building.buildingname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setFloorFk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Kat Güncelle</div>
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
                                    <option selected>{bina}</option>
                                    {
                                        buildings.map((building) => (
                                            <option value={building.id}>{building.buildingname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={editFloor}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
