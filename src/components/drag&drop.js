import React, { useRef, useState } from "react";

const DropFile = () => {
    const inputRef = useRef();
    const [file, setfile] = useState(null)
    const fileUrl = "c:/Users/gbala/Downloads";;
    const handledrag = (e) => {
        e.preventDefault()
    }
    const handledrop = (e) => {
        e.preventDefault()
        console.log(e.dataTransfer.files);
        setfile(e.dataTransfer.files)
    }
    const handleDownload=()=>{
        console.log("hrlo");
       
        const link = document.createElement('a');

        // link.href = fileUrl;
        link.setAttribute('download', 'filename'); 
      
        // Append the anchor element to the body
        document.body.appendChild(link);
      
        // Programmatically trigger a click event on the anchor element
        // link.click();
      
        // Remove the anchor element from the body
        // document.body.removeChild(link);
    }

    if (file) return (
        // <a href="#" onClick={this.handleDownload} >{file.name}</a>
        // <div>{Array.from(file).map((file, i) => <a key={i} href="#" onClick={this.handleDownload} >{file.name}</a>)}</div>
        <ul>{Array.from(file).map((file, i) => <li key={i} ><a href={fileUrl} onClick={handleDownload}>{file.name}</a></li>)}</ul>
    )
    return (
        <div style={{ width: '20%', borderStyle: "dotted", margin: '10px' }}>
            {!file &&
                <div onDragOver={handledrag}
                    onDrop={handledrop}>
                    <h3>Drag and Drop File to upload</h3>
                    <h3>or</h3>
                    <input type="file" multiple onChange={(event) => { setfile(event.target.files) }}
                        hidden ref={inputRef}></input>
                    <button onClick={() => inputRef.current.click()}>Select File</button>
                </div>
            }
        </div>
    )
}

export default DropFile