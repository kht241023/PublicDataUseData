import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AirQuality from './AirQuality';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="container mt-4">
                <Routes>
                    <Route path="/air" element={<AirQuality/>}/>
                    {/*
                    <Route path="/bus" element={<BusRouteList />} />
                    <Route path="/busstation" element={<BusStationList />} />
                   */}
                    <Route path="*" element={<h2>404 - 페이지를 찾을 수 없습니다.</h2>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
