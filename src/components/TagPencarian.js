import React from 'react';

class TagPencarian extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            judul: '',
        }

        this.oHandleChange = this.oHandleChange.bind(this);
        this.onHandlerSubmit = this.onHandlerSubmit.bind(this);

    }

    oHandleChange(e){
        this.setState(()=>{
            return{
                judul : e.target.value
            }
        })
    }


        // if(this.state.judul.length > 0 ){
        //  this.state.notes.filter((data)=> {
        //     return data.title.match(this.state.judul);
        //  });
        // }

        onHandlerSubmit(event){
            event.preventDefault();
           this.props.addSearch(this.state.judul);
        }
       
    

    render(){
        return(
            <form className='pencarian' onSubmit={this.onHandlerSubmit}>

            <input className="search" type="text" placeholder="Cari..." required
            value={this.state.judul} onChange={this.oHandleChange}
            />	

            <input className="button" type="submit" value="Cari"/>		
            </form>
        )
    }
}

export default TagPencarian;