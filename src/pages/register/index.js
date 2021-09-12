import { useState } from "react";
import { SignUp } from "../../WebAPI";
import { useHistory } from "react-router-dom";
import {
  FormContainer,
  Form,
  FormTitle,
  Button,
  Input,
} from "../../components/components";

export default function Register() {
  let isLoading = false;
  let history = useHistory();
  const [inputs, setInputs] = useState([
    {
      label: "Nickname",
      value: "",
    },
    {
      label: "Username",
      value: "",
    },
    {
      label: "Password",
      value: "",
    },
  ]);
  const handleInputChange = (e) => {
    const obj = [...inputs];
    obj.forEach((input) => {
      if (input.label === e.target.name) input.value = e.target.value;
    });
    setInputs(obj);
  };
  const handleRegister = () => {
    if (isLoading) return;
    isLoading = true;
    const nickname = inputs[0].value;
    const username = inputs[1].value;
    const password = inputs[2].value;
    SignUp(nickname, username, password).then((res) => {
      if (res.ok) {
        history.push("/login");
      }
      isLoading = false;
    });
  };
  return (
    <FormContainer>
      <Form>
        <FormTitle>註冊</FormTitle>
        {inputs.map((input, index) => (
          <Input
            key={index}
            input={input}
            handleInputChange={handleInputChange}
          />
        ))}
        <Button onClick={handleRegister}>提交</Button>
      </Form>
    </FormContainer>
  );
}
