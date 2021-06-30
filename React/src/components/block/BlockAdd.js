import React, { useState, useEffect } from 'react'
import complexService from '../../services/complexServices/complexService'
import blockService from '../../services/blockServices/blockService'
import alertify from "alertifyjs"
import { useHistory } from "react-router-dom";

export default function BlockAdd() {
    const [blockName, setBlockName] = useState("")
    const [blockfk, setBlockfk] = useState("")
    const [compleies, setCompleies] = useState([])
    let history = useHistory();

    useEffect(() => {
        complexService.listComplex().then(result => {
            setCompleies(result.data)
        })
    }, [])

    const handleChange = (e) => {
        setBlockfk(e.target.value)
    }

    const saveBlock = (e) => {
        e.preventDefault()
        let block = { blockname: blockName, blockfk: blockfk };
        blockService.createBlock(block).then(res => alertify.success(res => "Blok Eklendi", 1.5), history.push('/block')).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }
    return (
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center">Blok Ekle</div>
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
                                    <option selected></option>
                                    {
                                        compleies.map((complex) => (
                                            <option value={complex.id}>{complex.complexname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={saveBlock}>Kayıt Et</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
