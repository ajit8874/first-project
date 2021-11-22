import React from "react";
import { Button, Divider, Form, Typography, Space } from "antd";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const { Title, Text } = Typography;

function Login() {
  const initialValues = {
    email: "",
    password: "",
    login:false,
    store:null
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(" mail is Required"),
    password: Yup.string().required("password is Required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    
  };
  function islogin(){
    fetch('https://technogeticcredientials.herokuapp.com/login',{
      method:"POST",
      headers:
      {"Content-Type":"application/json"},
      body:JSON.stringify(initialValues)
    }).then((response)=>{ response.json()
      .then((result)=>{
        console.log("result",result);
        localStorage.setItem('login',JSON.stringify({
          login:true,
          token:result.token

        }))

      })


    })

  }

  return (
    <div className="App">
      <div>
        <div style={{ backgroundColor: "aliceblue" }}>
          <Space direction="vertical" align="center">
            <div
              style={{
                backgroundColor: "white",
                width: 350,
                boxShadow: "5px 8px 20px 10px rgba(208, 216, 243, 0.6)",
              }}
            >
              <header
                direction="vertical"
                align="center"
                style={{ backgroundColor: "", padding: 10, margin: 10 }}
              >
                {" "}
                Isomar.ai
              </header>
              <Title style={{ float: "left", marginLeft: 50, marginBottom: 5 }}>
                Login
              </Title>
              <Text style={{ float: "left", marginLeft: 50, marginBottom: 50 }}>
                {" "}
                Use your credential to login below{" "}
              </Text>
              <Space direction="vertical" align="center">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                  >
                  {(props) => (
                    <Form method="POST">
                      <Form.Item>
                        <Field type="email" placeholder="email" name="email" style={{width:250,height:50}} />
                        <br />
                        <ErrorMessage name="email" />
                      </Form.Item>
                      <Divider />
                      <Form.Item>
                        <Field style={{width:250,height:50}}
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                        />
                        <br />
                        <ErrorMessage name="password" />
                      </Form.Item>
                      <Divider />

                      <Form.Item>
                        <Button
                          type="link"
                          style={{ width: "30%", float: "left" }}
                        >
                          Forgot Password?
                        </Button>
                        <Button
                          type="primary"
                          style={{ width: "30%", float: "right" }}

                          onClick={islogin}
                          >
                          Login
                        </Button>
                      </Form.Item>
                    </Form>
                  )}
                </Formik>
              </Space>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
export default Login;