import { validate } from "email-validator";
import { useState, useEffect } from "react";
import PATTERN from '../utils/Constants.js';

const useForm = ({ defaultInputs } = {}) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const disabled = Object.keys(errors).length ? Object.values(errors).some(Boolean) : true;

  useEffect(() => {
      if (defaultInputs) {
          setInputs(defaultInputs)
      }
  }, [defaultInputs]);

  const onChange = (evt) => {
      const {name, value} = evt.target;
      setInputs({
        ...inputs,
        [name]: value
      })
      let errorText = "";
      if (name === "name" && !PATTERN.test(value)) {
        errorText = 'Имя: должно быть более 2х символов, английский или русский язык'
      }
      if (name === "email" && !validate(value)) {
        errorText = 'E-mail: Неверный формат адреса';
      }
      if (name === "password" && value.length < 8) {
        errorText = 'Пароль должен быть не менее 8 символов';
      }
      if (!value) {
        errorText = "Пустое поле"
      }
      setErrors({ ...errors, [name]: errorText })
  }

  return {
      inputs,
      errors,
      disabled,
      onChange,
  }
}
export default useForm;
