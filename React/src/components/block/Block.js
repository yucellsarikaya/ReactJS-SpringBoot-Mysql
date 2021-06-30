import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import blockService from '../../services/blockServices/blockService'
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs"

export default function Block() {
    const [test, setTest] = useState((0))
    let history = useHistory();
    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        blockService.getBlock().then(result => {
            setBlocks(result.data)
        })
    }, [test])

    const editBlock = (id) => {
        history.push(`/blockUpdate/${id}`)
    }

    const delBlock = (id) => {
        
        let del = {id}
        blockService.deleteBlock(del).then(res => alertify.success("Blok Silindi", 1.5), setTest(test => test + 1)).catch(err => alertify.error("Bir hata oluştu", 1.5));
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Site İsmi</th>
                        <th>Bulunduğu Site İsmi</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blocks.map((block, index) => (
                            <tr key={block.blockId}>
                                <th>{index}</th>
                                <td>{block.blockName}</td>
                                <td>{block.complexName}</td>
                                <td><button onClick={() => editBlock(block.blockId)} className="btn btn-success">Güncelle</button></td>
                                <td><button onClick={() => delBlock(block.blockId)} className="btn btn-danger">Sil</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
