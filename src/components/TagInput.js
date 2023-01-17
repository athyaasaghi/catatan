import React from 'react';

class TagInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onHandlerTitle = this.onHandlerTitle.bind(this);
        this.onHandlerBody = this.onHandlerBody.bind(this);
        this.onHandlerSubmit = this.onHandlerSubmit.bind(this);
    }

    onHandlerTitle(event){
        this.setState(()=>{
            return{
                title: event.target.value
            }
        })
    }

    onHandlerBody(event){
        this.setState(()=>{
            return{
                body: event.target.value
            }
        })
        console.log(event)
    }

    onHandlerSubmit(event){
        event.preventDefault();
       const hasil =  this.props.addNotes(this.state);
       console.log(hasil);
    }
   
    render(){
        console.log(this.state)
        return(
            <form className='input' onSubmit={this.onHandlerSubmit}>
                <input type='text' value={this.state.title} onChange={this.onHandlerTitle} className='title' placeholder='judul..'></input>
                <textarea value={this.state.body} onChange={this.onHandlerBody}></textarea>
                <br/>
                <button type='submit'>Input</button>
            </form>
        )
    }
}

export default TagInput;