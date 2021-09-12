import {
  FormContainer,
  Form,
  FormTitle,
  Button,
  Input,
} from "../../components/components";
import { useState, useContext } from "react";
import { login } from "../../WebAPI";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context";

export default function Login() {
  let isLoading = false;
  let history = useHistory();
  const { setIsLogin } = useContext(AuthContext);
  const [inputs, setInputs] = useState([
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
  const handleLogin = () => {
    if (isLoading) return;
    isLoading = true;
    const username = inputs[0].value;
    const password = inputs[1].value;
    login(username, password).then((res) => {
      if (res.ok) {
        localStorage.setItem("user_token", res.token);
        setIsLogin(true);
        history.push("/");
      }
      isLoading = false;
    });
  };
  return (
    <FormContainer>
      <Form>
        <FormTitle>登入</FormTitle>
        {inputs.map((input, index) => (
          <Input
            key={index}
            input={input}
            handleInputChange={handleInputChange}
          />
        ))}
        <Button onClick={handleLogin}>提交</Button>
      </Form>
    </FormContainer>
  );
}
