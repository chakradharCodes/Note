import React from 'react'
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App(){
    const [notes,setnotes]=useState([])
    function addnote(note){
        setnotes((prev)=>{
            return  [...prev,note]
        })
    }
    function deletenote(id){
        setnotes(prev=>{
            return  prev.filter((noteitem,index)=>{
                    return index!==id
                })      
        })
    }
    return (
        <div>
            <Header />
            <CreateArea add={addnote}/>
            {notes.map((noteitem,index)=>{
                return <Note key={index} id={index} title={noteitem.title} content={noteitem.content} Ondelete={deletenote} />
            })}
            
            <Footer />
        </div>
    )
        
}
export default App;