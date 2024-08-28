import { useState } from 'react';
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact_1: '',
    emergency_contact: '',
    gender: '',
    height: '',
    weight: '',
    address: '',
    medical_history: '',
    allergies: '',
    healthcare_insurance: '',
    room: '',
    photograph: '',
    about: ''
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="container">
      <h1>Patient Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name*</label>
        <input type='text' id='firstname' placeholder='Enter first name' name="firstname" 
          onChange={handleChanges} required />

        <label htmlFor='lastname'>Last Name*</label>
        <input type='text' id='lastname' placeholder='Enter last name' name="lastname"
          onChange={handleChanges} required />

        <label htmlFor='email'>Email*</label>
        <input type='email' id='email' placeholder='Enter your email' name="email"
          onChange={handleChanges} required />

        <label htmlFor='contact_1'>Contact 1*</label>
        <input type='text' id='contact_1' placeholder='Enter phone #' name="contact_1" 
          onChange={handleChanges} required />

        <label htmlFor='emergency_contact'>Emergency Contact*</label>
        <input type='text' id='emergency_contact' placeholder='Enter phone #' name="emergency_contact" 
          onChange={handleChanges} required />

        <label>Gender</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type='radio' id='gender_male' value="male" name="gender"
            onChange={handleChanges} /> 
          <label htmlFor='gender_male'>Male</label>

          <input type='radio' id='gender_female' value="female" name="gender"
            onChange={handleChanges} /> 
          <label htmlFor='gender_female'>Female</label>

          <input type='radio' id='gender_other' value="other" name="gender"
            onChange={handleChanges} /> 
          <label htmlFor='gender_other'>Other</label>
        </div>

        <label htmlFor='height'>Height*</label>
        <input type='text' id='height' placeholder='Enter height (in cm)' name="height"
          onChange={handleChanges} required />

        <label htmlFor='weight'>Weight*</label>
        <input type='text' id='weight' placeholder='Enter weight (in kg)' name="weight"
          onChange={handleChanges} required />

        <label htmlFor='address'>Address*</label>
        <input type='text' id='address' placeholder='Enter your address' name="address"
          onChange={handleChanges} required />

        <label htmlFor='medical_history'>Medical History*</label>
        <input type='text' id='medical_history' placeholder='Medical history' name="medical_history" 
          onChange={handleChanges} required />

        <label>Any Allergies?</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type='radio' id='allergies_yes' value="yes" name="allergies" onChange={handleChanges} /> 
          <label htmlFor='allergies_yes'>Yes</label>

          <input type='radio' id='allergies_no' value="no" name="allergies" onChange={handleChanges} /> 
          <label htmlFor='allergies_no'>No</label>
        </div>

        <label>Does the patient have any healthcare Insurance?</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type='radio' id='healthcare_insurance_yes' value="yes" name="healthcare_insurance" onChange={handleChanges} /> 
          <label htmlFor='healthcare_insurance_yes'>Yes</label>

          <input type='radio' id='healthcare_insurance_no' value="no" name="healthcare_insurance" onChange={handleChanges} /> 
          <label htmlFor='healthcare_insurance_no'>No</label>
        </div>

        <label htmlFor='room'>Patient Room</label>
        <select name='room' id='room' onChange={handleChanges}>
          <option value="private">Private</option>
          <option value="2-bed-sharing">2-bed-sharing</option>
          <option value="3-bed-sharing">3-bed-sharing</option>
        </select>

        <label htmlFor='photograph'>Patient Photograph</label>
        <input type='file' id='photograph' name='photograph' onChange={handleChanges} />

        <label htmlFor='about'>Any external factor that needs to be kept in mind</label>
        <textarea name="about" id="about" cols="30" rows="10" onChange={handleChanges}
          placeholder="Enter description"></textarea>

        <button type="reset">Reset</button>   
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
