import React, {Suspense} from "react";
import {RouterProvider} from "react-router-dom"
import {router} from '@@/src/router';
import Loading from '@@/src/components/loadWrap'

// render={item.render()}
function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
}

export default App;
