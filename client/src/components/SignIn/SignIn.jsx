import styled from "styled-components";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const Container = styled.div`
    min-width:400px;
    display: flex;
    flex-direction:column;
    gap:40px;
`;

const Title = styled.div`
    font-size:30px;
    font-weight:800;
    color:${({theme}) => theme.primary};
`;
const SubTitle = styled.div`
    color:${({theme}) => theme.secondary};
`;
const LoginField = styled.div`
    display: flex;
    gap:25px;
    flex-direction:column;
`;

export default function SignIn(){
    return (
      <Container>
        <div>
            <Title>WELCOME TO FITMAS 👋</Title>
            <SubTitle>Please login with your details!</SubTitle>
        </div>
        <LoginField>
            <TextInput label="Email Address" placeholder="Enter email"/>
            <TextInput label="Password" placeholder="Enter password" password/>
        </LoginField>
        <Button text="Sign In" />
      </Container>
    );
}