import React from 'react';
import { getData } from '../utils/data';

class TagPencarian extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            judul: '',
            notes: getData(),
        }

        this.oHandleChange = this.oHandleChange.bind(this);

    }

    oHandleChange(e){
        this.setState(()=>{
            return{
                judul : e.target.value
            }
        })


        if(this.state.judul.length > 0 ){
         this.state.notes.filter((data)=> {
            return data.title.match(this.state.judul);
         });
        }
    }

    render(){
        return(
            <form className='pencarian'>

            <input className="search" type="text" placeholder="Cari..." required
            value={this.state.judul} onChange={this.oHandleChange}
            />	

            <input className="button" type="button" value="Cari"/>		
            </form>
        )
    }
}

export default TagPencarian;