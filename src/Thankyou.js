import React, { useState } from 'react'
import "./App.css";
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

const Thankyou = ({ handlesubmit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fdata = localStorage.getItem("data")
  const data = JSON.parse(fdata)
  console.log("data", data)
  return (
    <div>
      <h3>Thank you for your details</h3>
      <div className="thankYou">
        <Button className='submit' onClick={handlesubmit}>Submit</Button>
        <Button className='Details' variant="info" onClick={handleShow}>Show Your Details</Button>
      </div>
      <Modal show={show} onHide={handleClose} className='modalcontent'>
        <Modal.Header closeButton>
          <Modal.Title>Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="col-md-12">
            <input
              type="text"
              defaultValue={data?.firstname}
              name="firstname"
              placeholder="First name not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.middlename}
              name="middlename"
              placeholder="Middle name not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.lastname}
              name="lastname"
              placeholder="Last name not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.email}
              placeholder="Email not filled"
              name="email"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.mobileno}
              name="mobileno"
              placeholder="Mobile No not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.age}
              placeholder="Age not filled"
              name="age"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.dob}
              placeholder="Birthday not filled"
              name="dob"
              className="form-control input_spacing"
              readOnly={true}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <input
              type="text"
              defaultValue={data?.bloodgroup}
              placeholder="Blood group not filled"
              name="bloodgroup"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.height}
              placeholder="Height not filled"
              name="height"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.weight}
              name="weight"
              placeholder="Wieght not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <div className="genderlabel">
              <label>Gender :{data?.gender}</label>
            </div>


            <div className="genderlabel">
              <label>Maritial Status :{data?.maritial}</label>
            </div>

            <input
              type="text"
              defaultValue={data?.vill}
              name="vill"
              placeholder="Vill not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.state}
              name="state"
              placeholder="State"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.zip}
              placeholder="Zip Code not filled"
              name="zip"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.city}
              name="city"
              placeholder="City not filled"
              className="form-control input_spacing"
              readOnly={true}
            />
            <input
              type="text"
              defaultValue={data?.country}
              name="country"
              placeholder="Country not filled"
              className="form-control input_spacing"
              readOnly={true}
            />

            <input
              type="text"
              defaultValue={data?.landmark}
              placeholder="Land Mark not filled"
              name="landmark"
              className="form-control input_spacing"
              readOnly={true}
            />
          </div>


        </Modal.Body>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>


      </Modal>

    </div>
  )
}

export default Thankyou
