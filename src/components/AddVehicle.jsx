import axios from 'axios'
import React, { useState } from 'react'

const AddVehicle = () => {

    const [input, changeInput] = useState(
        {
            id: "",
            name: "",
            mail: "",
            phone: "",
            regNo: "",
            brand: "",
            model: "",
            battery: "",
            connector: "",
            date: "",
            slot: "",
            estimatedUnit: "",
            chargingBayNo: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-vehicle", input).then(

            (response) => {
                console.log(response.data)
                alert("Booked successfully")
            }

        ).catch(

            (error) => {
                console.log(error.response)
                alert("Failed to book slot")
            }
        )
    }

    return (
        <div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#af5f04", textAlign: "center", fontFamily: "Poppins" }}>
                                🚗 EV Charging Slot Booking
                            </h2>

                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Booking ID</label>
                                    <input type="text" className="form-control" name="id" value={input.id} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Owner Name</label>
                                    <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="mail" value={input.mail} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Phone</label>
                                    <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Vehicle Registration Number</label>
                                    <input type="text" className="form-control" name="regNo" value={input.regNo} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Vehicle Brand</label>
                                    <input type="text" className="form-control" name="brand" value={input.brand} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Vehicle Model</label>
                                    <input type="text" className="form-control" name="model" value={input.model} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Battery Capacity(kWh)</label>
                                    <input type="text" className="form-control" name="battery" value={input.battery} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Connector Type</label>
                                    <input type="text" className="form-control" name="connector" value={input.connector} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Booking Date</label>
                                    <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Time Slot</label>
                                    <input type="text" className="form-control" name="slot" value={input.slot} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Estimated Units (kWh)</label>
                                    <input type="number" className="form-control" name="estimatedUnit" value={input.estimatedUnit} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Charging Bay Number</label>
                                    <input type="text" className="form-control" name="chargingBayNo" value={input.chargingBayNo} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-danger" onClick={readValue}>BOOK SLOT</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddVehicle