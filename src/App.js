import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicDetails from "./BasicDetails";
import Thankyou from "./Thankyou";
import AddressDetails from "./AddressDetails";
import line from './hrline.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [nextpage, setNextPage] = useState(1)
  const [formdata, setFormdata] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    mobileno: "",
    email: "",
    dob: "",
    age: "",
    bloodgroup: "",
    height: "",
    weight: "",
    gender: "",
    maritial: "",
    vill: "",
    state: "",
    city: "",
    country: "",
    zip: "",
    landmark: "",
  })
  const [formdataError, setFormdataError] = useState("")
  const handlechangeInput = (event) => {
    const { name, value } = event.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }
  const handlesubmit = () => {

    localStorage.setItem("data", JSON.stringify(formdata))
    toast.success("Your data successfully submitted")



  }
  const validationcheck = () => {
    if (nextpage === 1) {
      if (firstpagevalidateion()) {
        setNextPage(nextpage === 1 ? 2 : 3)
      }

    }
    if (nextpage === 2) {
      if (secondpagevalidateion()) {
        setNextPage(nextpage === 1 ? 2 : 3)
      }

    }

  }
  const firstpagevalidateion = () => {
    let flag = true
    if (!formdata.firstname) {
      setFormdataError("Please fill first name");
      return flag = false
    }
    if (!formdata.lastname) {
      setFormdataError("Please fill last name");
      return flag = false
    }
    if (!formdata.email) {
      setFormdataError("Email is Required");
      return flag = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      setFormdataError("Invalid email format");
      return flag = false
    }

    if (!formdata.age) {
      setFormdataError("Please fill age");
      return flag = false
    }

    if (!formdata.gender) {
      setFormdataError("Please Select The Gender");
      return flag = false
    }

    if (!formdata.dob) {
      setFormdataError("Please Fill DOB");
      return flag = false
    }
    if (!formdata.bloodgroup) {
      setFormdataError("Please Select Blood Group");
      return flag = false
    }
    if (!formdata.maritial) {
      setFormdataError("Please Select Maritial Status");
      return flag = false
    }
    setFormdataError("")
    return flag

  }
  const secondpagevalidateion = () => {
    let flag = true
    if (!formdata.vill) {
      setFormdataError("Please Fill Village Name");
      return flag = false
    }
    if (!formdata.state) {
      setFormdataError("Please Fill State Name");
      return flag = false
    }
    if (!formdata.zip) {
      setFormdataError("Please Enter Zip Code");
      return flag = false
    }
    if (!formdata.country) {
      setFormdataError("Please fill Country name");
      return flag = false
    }
    if (!formdata.city) {
      setFormdataError("Please fill City name");
      return flag = false
    }
    setFormdataError("")
    return flag


  }
  console.log("formdata", formdata)
  return (
    <div className="App">
      <ToastContainer />
      <div className="row">
        <div className="progresscontainer">
          <div className="progess">
            <div className="userinfo">
              <span className="activediv">1</span>
              <span className="usertext">USER INFORMATION</span>
            </div>
            <img src={line} alt="line" className="hrline" />
            <div className="userinfo">
              <div className="lineno">

                <span className={`${nextpage > 1 ? 'activediv' : 'deactivediv'} `}>2</span>
              </div>

              <span className="usertext">ADDRESS DETAILS</span>
            </div>
            <img src={line} alt="line" className="hrline" />
            <div className="userinfo">
              <div className="lineno">

                <span className={`${nextpage > 2 ? 'activediv' : 'deactivediv'} `}>3</span>
              </div>

              <span className="usertext">THANK YOU</span>
            </div>
          </div>
        </div>
        {formdataError && <span style={{ color: "red" }}>{formdataError}</span>}

        {nextpage === 1 && <BasicDetails handlechangeInput={handlechangeInput} formdata={formdata} formdataError={formdataError} />}
        {nextpage === 2 && <AddressDetails handlechangeInput={handlechangeInput} formdata={formdata} />}
        {nextpage === 3 && <Thankyou handlesubmit={handlesubmit} />}
        <div className="buttons">
          <Button variant="secondary" disabled={nextpage === 1} className="back" onClick={() => setNextPage(nextpage === 3 ? 2 : 1)}>
            Back
          </Button>
          <Button disabled={nextpage === 3} onClick={validationcheck}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default App;