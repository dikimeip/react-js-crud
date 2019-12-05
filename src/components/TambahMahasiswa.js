import React , {Component} from 'react';
import axios from 'axios';

class TambahMahasiswa extends Component {

    state={
        nim : '',
        nama :'',
        kelas :'',
        alamat : ''
    }

    postToAPi = () => {
        axios.post('http://localhost/api_android/tambah.php',this.state)
        .then((res)=>{
            console.log(res)
        },(err)=>{
            console.log("error",err)
        })
        this.props.history.push('/')
    }

    handlerChange = (event) => {
       this.setState({
           [event.target.name] : event.target.value
       })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        this.postToAPi()
    }



    render(){
        return(
            <div>
                <h1>Tambah Mahasiswa</h1>
               <form onSubmit={this.handlerSubmit}>
                   <input type="text" name="nim" placeholder="nim" onChange={this.handlerChange} /><br/>
                   <input type="text" name="nama" placeholder="nama" onChange={this.handlerChange} /><br/>
                   <input type="text" name="kelas" placeholder="kelas" onChange={this.handlerChange} /><br/>
                   <input type="text" name="alamat" placeholder="alamat" onChange={this.handlerChange} /><br/>
                   <input type="submit" value="simpan" className="btn btn-primary" />
               </form>
            </div>
        )
    }
}

export default TambahMahasiswa;