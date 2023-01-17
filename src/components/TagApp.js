import React from 'react';
import TagPencarian from './TagPencarian';
import TagInput from './TagInput';
import TagList from './TagList';
import { getData } from '../utils/data';

class TagApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getData(),
            search: ''
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onTambahKontak = this.onTambahKontak.bind(this);
        this.oHandleSearch = this.oHandleSearch.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter((note)=> note.id !== id);
        this.setState({notes});
    }

    onTambahKontak({title,body}){
        this.setState((catatanLama)=>{
            return{
                notes: [
                    ...catatanLama.notes,
                    {
                        id: new Date(),
                        createdAt: new Date().toISOString().slice(0, 10),
                        title,
                        body,
                    }
                ]
            }
        })
    }

    oHandleSearch(e){
        this.setState(()=>{
            return{
                search: e
            }
        })
        
    }

    render(){
        console.log(this.state.search)
        return(
            <div className='container_body'>
                <div className='card_hero'>
                    <h1>Buat Catatan</h1>
                    <TagPencarian addSearch={this.oHandleSearch}/>
                    <TagInput addNotes={this.onTambahKontak}/>
                    <TagList notes={ this.state.notes.filter((data)=> {
            return data.title.match(this.state.search);
         })}
                    onDelete={this.onDeleteHandler}/>
                </div>
            </div>
        )
    }
}

export default TagApp;