import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {                                 
                const response = await fetch('http://ec2-54-188-14-185.us-west-2.compute.amazonaws.com:8000/data');// <your-ec2-public-ip>
                                              
                if (!response.ok) {
                    throw new Error('Network response was not ok!');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        
            <h1>Data from FastAPI</h1>
            {data ? (
                <div>
                    <p>Feature 1: {data.feature1}</p>
                    <p>Feature 2: {data.feature2}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;

