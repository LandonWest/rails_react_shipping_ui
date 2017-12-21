import React, { Component } from 'react';
import InputField from './InputField';

class ToAddressFields extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <h2>To Address</h2>

        <InputField field="Company" jsClass="jsCompany" />
        <InputField field="Name" jsClass="jsName" />
        <InputField field="Street 1" jsClass="jsStreet1" />
        <InputField field="Street 2" jsClass="jsStreet2" />
        <InputField field="City" jsClass="jsCity" />
        <InputField field="State" jsClass="jsState" />
        <InputField field="Zip" jsClass="jsZip" />
        <InputField field="Phone" jsClass="jsPhone" />
        <InputField field="Email" jsClass="jsEmail" />

        <button>Next</button>
      </div>
    );
  }
};

export default ToAddressFields;