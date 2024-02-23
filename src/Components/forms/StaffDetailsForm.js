import React from "react";
import "./StaffDetailsForm.css"; // Import your CSS file

function StaffDetailsForm() {
  return (
    <div className="details">
    {/* Staff-details form */}
    <div className="staff-details-form">
      <div className="title">
        <h3>Staff Details</h3>
      </div>

      <div className="form-grid">
        <div className="form-item">
          <label>Employment status:</label>
          <select placeholder="Select an option">
            <option value="option1">Temporary</option>
            <option value="option2">Permanent</option>
            <option value="option3">Suspended</option>
          </select>
        </div>
        <div className="form-item">
          <label>staff type:*</label>
          <div className="multiple-check">
            <div className="form-check ms-2">
              <input type="radio" name="staffType"/>
              <label>Teaching</label>
            </div>

            <div className="form-check ms-2">
              <input type="radio" name="staffType"/>
              <label>Non-Teaching</label>
            </div>

            <div className="form-check ms-2">
              <input type="radio" name="staffType"/>
              <label>Transport</label>
            </div>
          </div>
        </div>

        <div className="form-item">
          <label>staff department:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Department-</option>
            <option value="option2">Office</option>
            <option value="option3">Mess Department</option>
          </select>
        </div>
        <div className="form-item">
          <label>employment category:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Category-</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="form-item">
          <label>designation:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Department-</option>
            <option value="option2">Teacher</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="form-item">
          <label>qualification type:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Qualification-</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="form-item">
          <label>educational qualification:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Qualification-</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="form-item">
          <label>access level:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Access Level-</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="form-item">
          <label>trained as:*</label>
          <select placeholder="Select an option">
            <option value="option1">-Select Level-</option>
            <option value="option2">PHD</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="form-item">
          <label>CTET qualified:</label>
          <div className="multiple-check">
            <div className="form-check ms-2">
              <input type="radio" name="is"/>
              <label>Yes</label>
            </div>

            <div className="form-check ms-2">
              <input type="radio" name="is"/>
              <label>No</label>
            </div>
          </div>
        </div>
      </div>
    </div>

 {/* Personal-details form */}
<div className="staff-details-form">
      <div className="title">
        <h3>Personal Details</h3>
      </div>

      <div className="form-grid">
        <div className="form-item">
          <label>First name:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>Middle name:*</label>
          <input type="text"></input>
        </div>

        <div className="form-item">
          <label>Last name:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>Mobile number:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>Emergency contact number:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>Gender:*</label>
          <div className="multiple-check">
            <div className="form-check ms-2">
              <input type="radio" name="gender"/>
              <label>male</label>
            </div>

            <div className="form-check ms-2">
              <input type="radio" name="gender"/>
              <label>Female</label>
            </div>
            <div className="form-check ms-2">
              <input type="radio" name="gender"/>
              <label>others</label>
            </div>
          </div>
        </div>
        <div className="form-item">
          <label for="dob">enter date of birth:*</label>
        <input type="date" id="dob" name="dob"/>

        </div>
        <div className="form-item">
          <label>email id:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>permanent address:*</label>
          <textarea id="address" name="address" rows="3"></textarea>
        </div>
        <div className="form-item">
          <label>corresponding address:</label>
          <textarea id="address" name="address" rows="3"></textarea>
        </div>

        <div className="form-item">
          <label>Religion:*</label>
          <select placeholder="Select an option">
            <option value="option1">Hindu</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
    </div>

 {/* Other-details form */}
    <div className="staff-details-form">
      <div className="title">
        <h3>Other Details</h3>
      </div>

      <div className="form-grid">
        <div className="form-item">
          <label>Aadhaar number:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>pan number:*</label>
          <input type="text"></input>
        </div>

        <div className="form-item">
          <label>date of joining:*</label>
          <input type="date" id="dob" name="dob"/>
        </div>
        <div className="form-item">
          <label>staff reference code:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>Salary pay type:*</label>
          <div className="multiple-check">
            <div className="form-check ms-2">
              <input type="radio" name="pay-type"/>
              <label>Consolidate</label>
            </div>

            <div className="form-check ms-2">
              <input type="radio" name="pay-type"/>
              <label>PAY</label>
            </div>
            <div className="form-check ms-2">
              <input type="radio" name="pay-type"/>
              <label>others</label>
            </div>
          </div>
        </div>
        <div className="form-item">
          <label>government id/ resident number:*</label>
          <input type="text"></input>
        </div>
        <div className="form-item">
          <label>Citizenship:*</label>
          <select placeholder="Select an option">
            <option value="option1">Indian</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        
        
        
      </div>
      <button className="save">Save & Continue</button>
    </div>
    </div>
  );
}

export default StaffDetailsForm;
