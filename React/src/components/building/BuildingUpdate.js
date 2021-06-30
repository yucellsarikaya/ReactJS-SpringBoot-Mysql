import React, { useState, useEffect } from 'react'
import blockService from '../../services/blockServices/blockService'
import buildingService from '../../services/buildingServices/buildingService'
import alertify from "alertifyjs"


export default function BuildingUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [blocks, setBlock] = useState([])
    const [buildingName, setBuildingName] = useState("")
    const [buildingFk, setBuildingfk] = useState("")
    const [blok, setBlok] = useState("")

    const editBuilding = (e) => {
        e.preventDefault()
        let building = { id: id, buildingname: buildingName, buildingfk: buildingFk };
        buildingService.updateBuilding(building).then(res => alertify.success("Bina Güncellendi", 1.5), props.history.push('/building')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    useEffect(() => {
        blockService.listBlock().then(result => {
            setBlock(result.data)
        })
        buildingService.getBuildingId(id).then((res) => {
            let building = res.data
            setBuildingName(building.buildingname)
            setBuildingfk(building.buildingfk)
            blockService.getBlockId(building.buildingfk).then((res) => {
                let block = res.data;
                setBlok(block.blockname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setBuildingfk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Bina Güncelle</div>
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
                                    <option selected>{blok}</option>
                                    {
                                        blocks.map((block) => (
                                            <option value={block.id}>{block.blockname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={editBuilding}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
