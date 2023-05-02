import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
function CreateArea(props) {
    const [intial,updateintial]=useState(true)
    const [note,setnote]=useState({
        title:"",
        content:"",
    })
    function update(event){
        const {name,value}=event.target;
        setnote((prev)=>{
            return {
                ...prev,
            [name]:value,
    }})
    }
    function Click(event){
        props.add(note)
        setnote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    function expand(){
      updateintial(false)
    }
  return (
    <div>
      <form className="create-note">
        {(intial)?null: (<input onChange={update} name="title" value={note.title} placeholder="Title" />) }
        
        <textarea onClick={expand} onChange={update} name="content" 
        value={note.content} 
        placeholder="Take a note..." 
        rows={(intial)?"1":"3"} />
        {(intial)?null : (<button onClick={Click}>Add</button>)}
        
      </form>
    </div>
  );
}

export default CreateArea;