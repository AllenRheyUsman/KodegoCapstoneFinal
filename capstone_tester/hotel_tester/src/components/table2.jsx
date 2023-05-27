
import React from 'react';

const Table2 = ({ data2 }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Guest ID</th>
                    <th>Name</th>
                    <th>Room Number</th>
                    <th>Number of days</th>
                   
                </tr>
            </thead>
            <tbody>
                {data2.map((item, index) => (
                    <tr key={index}>
                        <td>{item.guest_id}</td>
                        <td>{item.name}</td>
                        <td>{item.room_number}</td>
                        <td>{item.number_of_days}</td>
                       
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table2;
