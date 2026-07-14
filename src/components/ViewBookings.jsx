import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBookings = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-bookings").then(

            (response) => {
                changeData(response.data)
            }

        ).catch(

            (error) => {
                console.log(error)
            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#af5f04", textAlign: "center", fontFamily: "Poppins" }}>
                                🚗 View Bookings</h2>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Booking ID</th>
                                        <th scope="col">Owner Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Vehicle Registration Number</th>
                                        <th scope="col">Vehicle Brand</th>
                                        <th scope="col">Vehicle Model</th>
                                        <th scope="col">Battery Capacity(kWh)</th>
                                        <th scope="col">Connector Type</th>
                                        <th scope="col">Booking Date</th>
                                        <th scope="col">Time Slot</th>
                                        <th scope="col">Estimated Units (kWh)</th>
                                        <th scope="col">Charging Bay No.</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map(

                                        (data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.mail}</td>
                                                    <td>{data.phone}</td>
                                                    <td>{data.regNo}</td>
                                                    <td>{data.brand}</td>
                                                    <td>{data.model}</td>
                                                    <td>{data.battery}</td>
                                                    <td>{data.connector}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.slot}</td>
                                                    <td>{data.estimatedUnit}</td>
                                                    <td>{data.chargingBayNo}</td>

                                                </tr>
                                            )
                                        }

                                    )}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewBookings