import React from "react";


import { useFormik } from "formik";
import { AiFillGoogleCircle } from "react-icons/ai";


const Block1 = () => {
  const initialValues = {
   
    email: "",
    password: "",
   
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      
      
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <div>
    
     
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To The BookWorld & Login Yourself Here.
                </p>
                <form onSubmit={handleSubmit}>
                
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                 
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
               
                  <div className="modal-buttons">
                    <a href="#" className="" style={{display:'flex',alignItems:'center'}}>
                      Want to login using <AiFillGoogleCircle style={{color:'green',fontSize:'25px'}}/>Google
                    </a>
                    <button className="input-button" type="submit">
                      login
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                You don't have an account? <a href="/signup">Register here</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://img.freepik.com/free-psd/flyer-template-creative-pottery-workshop-with-woman_23-2148957392.jpg?size=626&ext=jpg&ga=GA1.2.669828460.1689154101&semt=ais"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};



export default Block1