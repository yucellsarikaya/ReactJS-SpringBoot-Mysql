import React, { useState, useEffect } from 'react'
import blockService from '../../services/blockServices/blockService'
import buildingService from '../../services/buildingServices/buildingService'
import alertify from "alertifyjs"
import { useHistory } from "react-router-dom";

export default function BuildingAdd() {
    const [blocks, setBlock] = useState([])
    const [buildingName, setBuildingName] = useState("")
    const [buildingFk, setBuildingfk] = useState("")
    let history = useHistory();

    useEffect(() => {
        blockService.listBlock().then(result => {
            setBlock(result.data)
        })
    }, [])

    const handleChange = (e) => {
        setBuildingfk(e.target.value)
    }

    const saveBuilding = (e) => {
        e.preventDefault()
        let building = { buildingname: buildingName, buildingfk: buildingFk };
        buildingService.createBuilding(building).then(res => alertify.success("Bina Eklendi", 1.5), history.push('/building')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Bina Ekle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Bina İsmi</label>
                                <input
                                    placeholder="Bina İsmi Giriniz"
                                    name="buildingName"
                                    className="form-control"
                                    onChange={e => setBuildingName(e.target.value)}
                                    value={buildingName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected></option>
                                    {
                                        blocks.map((block) => (
                                            <option value={block.id}>{block.blockname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={saveBuilding}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
