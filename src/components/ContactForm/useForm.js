import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import emailjs from 'emailjs-com';

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    if (Object.keys(values).length === 3) {
      global.contact_submit = true;
      var template_id = "template_ej67mxy";
      var service_id = "default_service";
      var user_id = "user_Kz7Y51TTHpRVoymlRsDwg";
      emailjs.send(service_id,template_id, values, user_id)
      .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err); 
    });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    useEffect,
    values,
    errors,
  };
};

export default useForm;
