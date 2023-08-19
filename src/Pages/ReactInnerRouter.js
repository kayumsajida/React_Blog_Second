import { Route, Routes } from 'react-router-dom';
import InstallReact from './InstallReact';
import WhatisReact from '../ReactPages/WhatReact';

const ReactInnerRouter = () => {
    return (
        <>
            <Routes>                                
                <Route exact path="/react-install" element={<InstallReact />} />
                <Route exact path="/what-is-react" element={<WhatisReact />} />
            </Routes>
        </>
    )
}

export default ReactInnerRouter;