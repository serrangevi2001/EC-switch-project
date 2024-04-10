import React from 'react'
import { Button, Card,  CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Async from 'react-select/async';
import { connect } from 'react-redux';
import { setUserForm } from '../../auth/redux/actions/login.actions';

const mapStateToProps = (state) => ({
  userForm: state.loginReducer.userForm
})
const mapDispatchToProps = (dispatch) => ({
  setUserForm: (userForm) => dispatch(setUserForm(userForm)),

})

const CreateUserList = (props) => {
 
  const onChangeFunction=(e)=>{
    const{ name,value} =e.target;
   props.setUserForm({...props.userForm,[name]:value});
  }
  
  return (
    <>
  
      <Card>
        <CardHeader>ADD USER</CardHeader>
      </Card>

      <Form><FormGroup>

    
          <Row>
            <Col md={6}>
              <Label>First Name</Label>
              <Input
                type='text' placeholder='Enter First Name' name='firstName' value={props.userForm.firstName} onChange={ onChangeFunction}
              />
            </Col>
            <Col md={6}>
              <Label>Last Name</Label>
              <Input
                type='text' placeholder='Enter Last Name' name='lastName' value={props.userForm.lastName} onChange={ onChangeFunction}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md={6}>
              <Label>Display Name</Label>
              <Input
                type='text' placeholder='Enter Display Name'name='displayName' value={props.userForm.displayName} onChange={ onChangeFunction}
              />
            </Col>
            <Col md={6}>
              <Label>Mobile Number</Label>
              <Input
                type='text' placeholder='Enter Mobile Number' name='mobileNumber' value={props.userForm.mobileNumber} onChange={ onChangeFunction}
              />
            </Col>
          </Row><br></br>
          <Row>
            <Col md={12}>
              <Label>Email</Label>
              <Input type='email' placeholder='Enter an Email' name='email' value={props.userForm.email} onChange={ onChangeFunction}/>
            </Col>
          </Row><br></br>
          <Row>
            <Col md={6}>
              <Label>Address 1</Label>
              <Input
                type='textarea' placeholder='Enter Address 1' name='address1' value={props.userForm.address1} onChange={ onChangeFunction}
              />
            </Col>
            <Col md={6}>
              <Label>Address 2</Label>
              <Input
                type='textarea' placeholder='Enter Address 2' name='address2' value={props.userForm.address2} onChange={ onChangeFunction}
              />
            </Col>
          </Row><br></br>
          <Row>
            <Col md={6}>
              <Label>States</Label>
              <Async
                type="dropdown"
                placeholder="Select State" 
                name="selected_state"
                className="input-group-react-select vm-react-select"
                //eslint-disable-next-line
                // defaultValue={selected_state}
               
                
              />
            </Col>
            <Col md={6}>
              <Label>Zones</Label>
              <Async
                type="dropdown"
                placeholder="Select Zones"
                className="input-group-react-select vm-react-select"
                name="selected_zone"
                 //eslint-disable-next-line
                // defaultValue="selected_zone"
                
               
              />
            </Col>
          </Row><br></br>
          <Row>
            <Col md={6}>
              <Label>City</Label>
              <Input
                type='text' placeholder='Enter City'  name="city" value={props.userForm.city} onChange={ onChangeFunction}
              />
            </Col>
            <Col md={6}>
              <Label>Town</Label>
              <Input
                type='text' placeholder='Enter Town' name='town' value={props.userForm.town} onChange={ onChangeFunction}
              />
            </Col>
          </Row><br></br>
          <Row>
            <Col md={12}>
              <Label>Zip</Label>
              <Input type='number' placeholder='Enter Zip' name='zip'  value={props.userForm.zip} onChange={ onChangeFunction}/>
            </Col>
          </Row><br></br>
          <Row>
            <Col md={6}>
              <Label>Role</Label>
              <Async 
              type='dropdown' placeholder='Select Role ' name='role' value={props.userForm.displayName}
              />
            </Col>
          </Row><br></br>
          <Row>
            <Col md={6}>
              <Button >Submit</Button>
            </Col>
          </Row>
        
      </FormGroup></Form>
    </>
  )
}

export default connect (mapStateToProps,mapDispatchToProps) (CreateUserList);