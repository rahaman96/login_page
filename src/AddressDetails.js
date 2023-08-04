import React from 'react'


const AddressDetails = ({handlechangeInput,formdata}) => {
  return (
    <>
      <div className="col-md-6">
        <input
          type="text"
          value={formdata.vill}
          name="vill"
          placeholder="Vill"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
         <input
          type="text"
          value={formdata.state}
          name="state"
          placeholder="State"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.zip}
          placeholder="Zip Code"
          name="zip"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        
       
        
       

        
      </div>
      <div className="col-md-6">
      <input
          type="text"
          value={formdata.city}
          name="city"
          placeholder="City"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        <input
          type="text"
          value={formdata.country}
          name="country"
          placeholder="Country"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
        
        <input
          type="text"
          value={formdata.landmark}
          placeholder="Land Mark"
          name="landmark"
          className="form-control input_spacing"
          onChange={handlechangeInput}
        />
       
       
      </div>
      
    </>
  )
}

export default AddressDetails
