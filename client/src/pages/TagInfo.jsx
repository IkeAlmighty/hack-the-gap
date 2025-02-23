import React, { useState, useEffect } from 'react';
import { getCollection } from '../data/dummy-data';
import { decamelCase } from '../utils/prettify';

import { useParams } from 'react-router';

export default function TagInfo() {
    const [tagData, setTagData] = useState([]);

    const { studentTag } = useParams();

    useEffect(() => {
        // Fetch or define the students data here
        const fetchTagData = async () => {
            // Example data
            let allData = await getCollection("strategyTools");
            let filteredData = allData.filter(t => t.studentTag === studentTag)
            console.log(filteredData)
            setTagData(filteredData[0]);
        };

        fetchTagData();
    }, []);


    return (
        <div className="w-full">
            {/* Navigation Bar */}
            <div className="bg-gray-100 text-black p-10 flex justify-between items-center mb-8 w-full fixed top-0 left-0">
                <div className="flex items-center space-x-6">
                    <div className="text-4xl font-bold pr-4">{studentTag}</div>
                </div>
                <div>
                    <button className="text-white mr-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Profile</button>
                    <button className="text-white px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Settings</button>
                </div>
            </div>
            {Object.keys(tagData).map((key, index) => {
                return (
                    <div key={index} className="max-w-4xl mx-auto p-6 pt-10">
                        {key !== "studentTag" ?
                            <div>
                                <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">{decamelCase(key)}</h1>
                                <div className="bg-white rounded-lg shadow-md">
                                    {tagData[key]}
                                </div>
                            </div>
                            : ""
                        }

                    </div>
                );
            })}
        </div>

    );
};
