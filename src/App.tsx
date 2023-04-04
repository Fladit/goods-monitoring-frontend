import {Route, Routes} from "react-router";
import {Landing} from "./pages/Landing";
import {Ban} from "./pages/Ban";
import {NotFound} from "./pages/NotFound";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Landing/>}/>
            <Route path={'/ban'} element={<Ban/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default App;