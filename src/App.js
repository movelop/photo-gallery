import React, { useState } from 'react';

import { Title, UploadForm, ImageGrid, Modal } from './components';

const App = () => {
    const [selected, setSelected] = useState(null)
    return (
        <div className='App'>
            <Title />
            <UploadForm />
            <ImageGrid setSelected = { setSelected } />
            { selected && (
            <Modal selected = { selected } setSelected = { setSelected } />
            )}
        </div>
    )
}

export default App
