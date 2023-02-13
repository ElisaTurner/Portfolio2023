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
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3"  >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <InputGroup>
        <InputGroup.Text>Message</InputGroup.Text>
        <Form.Control as="textarea"  />
      </InputGroup>
      <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </FullContactDiv>
    );
  }

export default ContactForm;


const FullContactDiv = styled.div`
    display: flex;
 margin: 20px;
 


`