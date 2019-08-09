import React from 'react';

const GetCard = ({ apiData }) => {
    return (
        apiData.map(thing => (
            <div>
                <h3>Name: {thing.name}</h3>
                <h3>Course: {thing.course}</h3>
            </div>
        ))
    )
}

export default GetCard
