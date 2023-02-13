import React, { useState }   from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      // TODO: send Form data to server or API
    }
  
    return (
       <FullContactDiv> 
      <Form onSubmit={handleSubmit}> 
      
      <Form.Group className="mb-3" >
        <HeaderText>
        <Form.Label>Name</Form.Label> </HeaderText>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3"  >
        <HeaderText>
        <Form.Label>Email address</Form.Label></HeaderText>
        <Form.Control type="email" placeholder="Enter Email" />
        <SubText> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text></SubText>
      </Form.Group>
      
      <InputGroup>
    
        <InputGroup.Text>Message</InputGroup.Text> 
        <Form.Control as="textarea"  />
      </InputGroup>
      <SubmitButton><Button variant="primary" type="submit">Submit  </Button></SubmitButton>
      </Form>
      </FullContactDiv>
    );
  }

export default ContactForm;


const FullContactDiv = styled.div`
width: 650px;
height: 500px;
display: flex;
margin: 20px;
 
`

const SubmitButton = styled.div`
float: right;
display: flex;
margin-top: 15px;
` 
const HeaderText = styled.text `
color: black;
font-weight: bold;
 
`

const SubText = styled.text `
color: grey;
margin-left: 10px;
`