import React, { useState, useEffect }  from 'react';
import styled from 'styled-components/native'
import { Container } from 'react-bootstrap';

function ContactForm() {
    const [inputValues, setValue] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [validation, setValidation] = useState({
        fullName: "",
        email: "",
        message: "",
    });


function handleChange(e) {
    const { name, value} = e.target;
    setValue({ ...inputValues, [name]: value });
  }

const validationCheck = () => {
    let errors = validation;

    if (!inputValues.fullName.trim()) {
        errors.fullName = "fullName is required"; 
    } else {
        errors.fullName = "";
    }
    setValidation(errors);
}

const handleSubmit = (e) => {
    e.preventDefault();
  };

useEffect(() => {
    validationCheck();
  }, [inputValues]);

return (
<div>
  <form
  method="POST"
  onSubmit={handleSubmit}
  >


<FullNameInput> 
fullName: 
<input 
    type="text"
    placeholder="fullName"
    
    inputValues={inputValues}
    className="input-field"
    onChange={(e) =>  handleChange(e)}
    value={inputValues.fullName} />
      
    </FullNameInput>


    <EmailInput> 
Email:
<input 
    type="text"
    placeholder="Email"
   
    className="input-field"
    inputValues={inputValues}
    onChange={(e) =>  handleChange(e)}
    value={inputValues.email} 
    />
    </EmailInput>


<MessageInput>
Message:
<input 
    type="text"
    placeholder="Message"
    
    className="input-field"
    inputValues={inputValues}
    onChange={(e) =>  handleChange(e)}
    value={inputValues.Message} />
    </MessageInput>


<button> 
    Submit
</button>


</form>
</div>
 );
};

export default ContactForm;

const FullNameInput = styled(Container)  `
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
`

const EmailInput = styled(Container)  `
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
`

const MessageInput = styled(Container)  `
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
`