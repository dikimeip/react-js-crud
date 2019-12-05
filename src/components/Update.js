import React,{Component} from 'react'
import Axios from 'axios'

class Update extends Component {
    
    state={
        nim : '',
        nama :'',
        kelas :'',
        alamat : ''
    }

   componentDidMount=() => {
       const id = this.props.match.params.nim
       Axios.get("http://localhost/api_android/cari.php?nim="+id)
        .then((res)=>{
            this.setState({
                nim : res.data.mhs.nim,
                nama : res.data.mhs.nama,
                kelas : res.data.mhs.kelas,
                alamat : res.data.mhs.alamat
            })
            console.log(this.state)
        })
   }

    handlerChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        Axios.put('http://localhost/api_android/update.php',this.state)
        .then((res) => {
           this.props.history.push('/mahasiswa')
        })
    }

   

    render(){
        return(
            <div>
                <h1>Ubah Mahasiswa</h1>
               <form onSubmit={this.handlerSubmit}>
                   <input type="hidden" name="nim" value={this.state.nim} onChange={this.handlerChange}  /><br/>
                   <input type="text" name="nama" placeholder="nama" value={this.state.nama} onChange={this.handlerChange} /><br/>
                   <input type="text" name="kelas" placeholder="kelas" value={this.state.kelas} onChange={this.handlerChange}  /><br/>
                   <input type="text" name="alamat" placeholder="alamat" value={this.state.alamat} onChange={this.handlerChange}  /><br/>
                   <input type="submit" value="simpan" className="btn btn-primary" />
               </form>
            </div>
        )
    }
}

export default Update