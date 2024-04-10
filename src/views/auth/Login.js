import React from 'react';
import { connect } from 'react-redux';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody, Input, Form } from 'reactstrap';
import { Navigate } from 'react-router-dom';
import AuthLogo from "../../layouts/logo/AuthLogo";
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';
import {  setDetails, userLogin } from './redux/actions/login.actions';

const mapStateToProps=(state)=>({        //mapstatetoprops details vangaro
 details : state.loginReducer.details,
 profile: state.loginReducer.profile,
 isAuth: state.loginReducer.isAuth,
 userList: state.loginReducer.userList,
})

const mapDispatchToProps=(dispatch)=>({
  setDetails : (details) => dispatch(setDetails(details)),
  userLogin :() => dispatch(userLogin()) ,
  
 })

const Login = (props) => { 

 const onChangeFunction=(e)=>{
    const {name,value} = e.target;
    props.setDetails({... props.details, [name]:value});
  }

const onClickFunction=(e)=>{
  e.preventDefault();
  props.userLogin();
}
// eslint-disable-next-line
console.log('profile:',props.profile);
 console.log("isAuth:",props.isAuth);
return props.isAuth?(<Navigate to= "/dashboards"/>):(

    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <h5 className="ml-4">Visionware-Login</h5>
                <Form>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      name="email"
                      placeholder="email"
                      type="email" 
                      value={props.details.email}
                      onChange={onChangeFunction}
                   
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      name="password"
                      placeholder="password "
                      type="password"
                      value={props.details.password}
                      onChange={onChangeFunction}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" color="primary" className="me-2" onClick={onClickFunction} >
                      
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
