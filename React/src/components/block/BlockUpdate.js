import React, { useState, useEffect } from 'react'
import complexService from '../../services/complexServices/complexService'
import blockService from '../../services/blockServices/blockService'
import alertify from "alertifyjs"

export default function BlockUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [blockName, setBlockName] = useState("")
    const [blockfk, setBlockfk] = useState("")
    const [compleies, setCompleies] = useState([])
    const [site, setSite] = useState("")

    const editBlock = (e) => {
        e.preventDefault()
        let block = { id: id, blockname: blockName, blockfk: blockfk };
        blockService.updateBlock(block).then(res => alertify.success("Blok Güncellendi", 1.5), props.history.push('/block')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    useEffect(() => {
        complexService.listComplex().then(result => {
            setCompleies(result.data)
        })
        blockService.getBlockId(id).then((res) => {
            let block = res.data
            setBlockName(block.blockname)
            setBlockfk(block.blockfk)
            complexService.getComplexId(block.blockfk).then((res) => {
                let complex = res.data;
                setSite(complex.complexname)
            })
        })
    }, [])

    const handleChange = (e) => {
        setBlockfk(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Blok Güncelle</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Blok İsmi</label>
                                <input
                                    placeholder="Blok İsmi Giriniz"
                                    name="blockName"
                                    className="form-control"
                                    onChange={e => setBlockName(e.target.value)}
                                    value={blockName}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <select class="form-select" onChange={handleChange}>
                                    <option selected>{site}</option>
                                    {
                                        compleies.map((complex) => (
                                            <option value={complex.id}>{complex.complexname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={editBlock}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
