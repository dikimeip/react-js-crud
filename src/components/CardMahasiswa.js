import React from 'react';
import {Link} from 'react-router-dom'

const CardMahasiswa = (props) => {
    return(
        <div>
            <p>Nama : {props.data.nama} </p>
            <p>Kelas : {props.data.kelas} </p>
            <p>Alamat : {props.data.alamat} </p>
            <button className="btn btn-danger" onClick={() => props.remove(props.data.nim)} >HAPUS</button>
            <Link to={"/update/"+props.data.nim} className="btn btn-success">UPDATE</Link>
            <hr/>
        </div>
    )
}

export default CardMahasiswa;