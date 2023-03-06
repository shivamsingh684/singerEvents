import React, { useState } from "react";
import Final from "./Final";
import './Booked.css'

function Registered() {
    const [isOpen, setIsOpen] = useState(false);




    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [newEntry, setNewEntry] = useState([])
    const togglePopup = (e) => {


        setIsOpen(!isOpen);
    }
    const submitForm = (e) => {
        e.preventDefault()
        const finalEntry = { name: name, mobile: mobile }
        setNewEntry([finalEntry])
    }
    return (
        <>
         
        <div className="formBox">
        <div><h2>Please provide Booking details</h2></div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <br/>
                    <input type='text' name="name" className="inputBox" placeholder="Enter Name" autoCapitalize="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="Mobile">Mobile Number</label>
                    <br/>
                    <input type='text' name="Mobile" className="inputBox" placeholder="Enter Mobile Number" autoCapitalize="off"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    ></input>
                </div>
                <button className="submitBtn" type="submit" onClick={togglePopup}>Submit</button>





                {isOpen && <Final
                    content={<>
                        {newEntry.map((curr) => {
                            return (
                                <>
                                <div className="information">
                                    <p>Booked for : {curr.name}</p>,
                                    <p>Mob.Number : {curr.mobile}</p>
                                </div>
                                </>
                            )
                        })
                        }


                    </>}
                    handleClose={togglePopup}
                />}
            </form>
            {/* <div>{
                newEntry.map((curr) => {
                    return (
                        <>
                            <p>Booked for {curr.name}</p>,
                            <p>Booked contact Number{curr.mobile}</p>
                        </>
                    )
                })
            }
            </div> */}
            </div>
        </>
    )
}

export default Registered