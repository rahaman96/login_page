import React from "react";

const BasicDetails = ({ handlechangeInput, formdata, formdataError }) => {
  return (
    <>
      <div className="col-md-6">
        <input
          type="text"
          value={formdata.firstname}
          name="firstname"
          placeholder="First name"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        {formdataError.firstname}
        <input
          type="text"
          value={formdata.lastname}
          name="lastname"
          placeholder="Last name"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.email}
          placeholder="Email"
          name="email"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.age}
          placeholder="Age"
          name="age"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.height}
          placeholder="Height"
          name="height"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <div className="genderlabel">
          <label>Gender</label>
        </div>

        <div className="gendercontainer">
          <div className="radio">
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                className="radioinput"
                onClick={handlechangeInput}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                className="radioinput"
                onClick={handlechangeInput}
              />
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <input
          type="text"
          value={formdata.middlename}
          name="middlename"
          placeholder="Middle name"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.mobileno}
          name="mobileno"
          placeholder="Mobile No"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.dob}
          placeholder="Birthday"
          name="dob"
          className="form-control input_spacing"
          onChange={handlechangeInput}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <select onChange={handlechangeInput} className="form-control input_spacing" name="bloodgroup">
          <option value={-1} >Blood group</option>
          <option name="bloodgrouop" value="A+">A+</option>
          <option name="bloodgrouop" value="A-">A-</option>
          <option name="bloodgrouop" value="B+">B+</option>
          <option name="bloodgrouop" value="B-">B-</option>
          <option name="bloodgrouop" value="AB+">AB+</option>
          <option name="bloodgrouop" value="AB-">AB-</option>
          <option name="bloodgrouop" value="O+">O+</option>
          <option name="bloodgrouop" value="O-">O-</option>
        </select>

        <input
          type="text"
          value={formdata.weight}
          name="weight"
          placeholder="Wieght"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <div className="genderlabel">
          <label>Maritial Status</label>
        </div>
        <div class="container">
          <div class="row">
            <div className="radio col-sm">
              <label>
                <input
                  type="radio"
                  value="single"
                  name="maritial"
                  className="radioinput"
                  onClick={handlechangeInput}
                />
                Single
              </label>
            </div>
            <div className="radio col-sm">
              <label>
                <input
                  type="radio"
                  value="married"
                  name="maritial"
                  className="radioinput"
                  onClick={handlechangeInput}
                />
                Married
              </label>
            </div>
            <div className="radio col-sm">
              <label>
                <input
                  type="radio"
                  value="divorce"
                  name="maritial"
                  className="radioinput"
                  onClick={handlechangeInput}
                />
                Divorce
              </label>
            </div>
            
            
            <div className="radio col-sm">
              <label>
                <input
                  type="radio"
                  value="widowed"
                  name="maritial"
                  className="radioinput"
                  onClick={handlechangeInput}
                />
                Widowed
              </label>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default BasicDetails;
