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
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onTambahKontak = this.onTambahKontak.bind(this);
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
                        id: +new Date(),
                        title,
                        body,
                    }
                ]
            }
        })
    }

    render(){
        return(
            <div className='container_body'>
                <div className='card_hero'>
                    <h1>Buat Catatan</h1>
                    <TagPencarian/>
                    <TagInput addNotes={this.onTambahKontak}/>
                    <TagList notes={this.state.notes}
                    onDelete={this.onDeleteHandler}/>
                </div>
            </div>
        )
    }
}

export default TagApp;