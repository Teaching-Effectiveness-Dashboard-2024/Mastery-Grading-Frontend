import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react';
import Error from "./Components/Error/Error";
import Landing from "./Components/Landing/Landing";

function App() {
    return (
        <NextUIProvider >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    );
}

export default App;
