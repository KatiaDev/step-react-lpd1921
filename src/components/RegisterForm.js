import React, { useEffect, useState } from "react";
import * as yup from "yup";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Checkbox,
} from "@chakra-ui/react";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Must be at least 3 chars.")
    .required("FirstName can't be empty."),
  lastName: yup.string().required("LastName can't be empty."),
  email: yup
    .string()
    .email("The email is invalid.")
    .required("Email is required."),
  password: yup
    .string()
    .min(8, "The password should have at least 8 chars.")
    .required("Password is required."),
  role: yup.string().required("Role is required."),
  terms: yup.boolean().oneOf([true], "You must accept terms and conditions"),
});
const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "User",
  terms: false,
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    terms: "",
  });

  const handleFieldValidation = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then(() =>
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: "",
        })
      )
      .catch((error) => {
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: error.errors[0],
        });
      });
  };

  useEffect(() => {
    async function helper() {
      const valid = await schema.isValid(formData);
      setIsButtonDisabled(!valid);
    }

    helper();
  }, [formData]);

  const handleInputChange = (event) => {
    handleFieldValidation(event);
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("formData: ", formData);
    setFormData(initialData);
  };

  return (
    <Container textAlign="center">
      <form onSubmit={handleFormSubmit}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          {errorMessage.firstName ? (
            <p style={{ color: "red" }}>{errorMessage.firstName}</p>
          ) : null}
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          {errorMessage.lastName ? (
            <p style={{ color: "red" }}>{errorMessage.lastName}</p>
          ) : null}
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          {errorMessage.email ? (
            <p style={{ color: "red" }}>{errorMessage.email}</p>
          ) : null}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          {errorMessage.password ? (
            <p style={{ color: "red" }}>{errorMessage.password}</p>
          ) : null}
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>

          <Select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Mainteiner">Mainteiner</option>
            <option value="Intern">Intern</option>
          </Select>
        </FormControl>
        <FormControl m="20px">
          <Checkbox
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleInputChange}
          >
            Accept our Terms and Conditions.
          </Checkbox>
        </FormControl>
        <Button type="submit" colorScheme="blue" disabled={isButtonDisabled}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
