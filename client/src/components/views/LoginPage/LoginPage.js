import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography, Col } from 'antd';
import { useDispatch } from "react-redux";
import img from './img.jpg'

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="container">
            <Col lg={12}>
              <img className="login-image" src={img} style={{ width:'85%', display:'block', marginLeft:'auto', marginRight:'auto', marginBottom:'30px', borderRadius:'20px'}}></img>
            </Col>
            <Col lg={12}>
              <div className="app">
                <div style={{ margin:'auto', padding:'auto' }}>
                  <p className="d-logo">D.</p>
                  <Title level={2}>Sign in to Discover.</Title>
            
                  <form onSubmit={handleSubmit} style={{ width: '350px' }}>

                  <Form.Item required>
                  <Input
                    id="email"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Enter your email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} style={{ fontFamily:'Catamaran', fontWeight:'600' }} >Remember me</Checkbox>
                <a className="login-form-forgot" href="/reset_user" style={{ fontFamily:'Catamaran', fontWeight:'600', float: 'right', color:'#6420F7' }}>
                  Forgot password?
                  </a>
                <div>
                  <Button type="round" size="large" htmlType="submit" className="login-form-button" style={{ minWidth: '100%', backgroundColor:'#6420F7', color:'white' , border:'none' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    Log in
                </Button>
                </div>
                <div style={{ fontFamily:'Catamaran' }}>
                Not a member? <a href="/register" style={{ fontWeight:'600', color:'#6420F7' }}>Sign up now!</a>
                </div>
              </Form.Item>
            </form>
            </div>
            </div>
          </Col>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);


