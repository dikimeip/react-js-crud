import React, {Component , Fragment} from 'react';
import CardMahasiswa from './CardMahasiswa';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Mahasiswa extends Component{
    state = {
        mhs:[]
    }

    getDataApi = () => {
        axios.get('http://localhost/api_android/ambil.php')
        .then((res)=>{
            this.setState({
                mhs:res.data.mhs
            })
        })
    } 

    handlerRemove = (data) => {
        console.log(data)
        axios.delete('http://localhost/api_android/hapus.php?nim='+data).then((res)=>{
            console.log(res)
            this.getDataApi()
        })
    }

    handlerUpdate = (data) => {
        console.log(data)
    }

    componentDidMount() {
        // fetch('http://localhost/api_android/ambil.php')
        // .then(respone => respone.json())
        // .then(json => {
        //     this.setState({
        //         mhs:json.mhs
        //     })
        // })
        this.getDataApi()
       
    }
    

    render(){
        return(
           <Fragment>
               <Link className="btn btn-primary" to="/add">TAMBAH</Link>
              {
                  this.state.mhs.map(mhs =>{
                      return <CardMahasiswa key={mhs.nim} data={mhs} remove={this.handlerRemove} update={this.handlerUpdate} />
                  })
              }
           </Fragment> 
        )
    }
}

export default Mahasiswa;