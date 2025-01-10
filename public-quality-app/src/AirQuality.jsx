import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AirQuality = () => {
    const [airData, setAirData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/air.do')
            .then(response => {
                if (response.data.response?.body?.items) {
                    setAirData(response.data.response.body.items);
                } else {
                    console.error("API 응답이 올바르지 않습니다.");
                }
            })
            .catch(error => {
                console.error("백엔드에서 데이터를 가져올 수 없습니다. :", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">서울시 대기질 정보</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center">
                    <thead className="table-dark">
                    <tr>
                        <th>측정소</th>
                        <th>미세먼지 (PM10)</th>
                        <th>초미세먼지 (PM2.5)</th>
                        <th>통합대기지수</th>
                        <th>오존 (O₃)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {airData.length > 0 ? (
                        airData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.stationName || "정보 없음"}</td>
                                <td>{item.pm10Value || "데이터 없음"}</td>
                                <td>{item.pm25Value || "데이터 없음"}</td>
                                <td>{item.khaiValue || "데이터 없음"}</td>
                                <td>{item.o3Value || "데이터 없음"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">데이터가 없습니다.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AirQuality;
