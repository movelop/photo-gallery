import React, { useState } from 'react';
import { ProgressBar } from '.';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const type = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        
        if(selected && type.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please Select an Image file (png or jpeg)');
        }
        
    }

    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={handleChange} /> 
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className='error'>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file = { file } setFile = { setFile } />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
