import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styled from "styled-components";


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


export default function SignUp(){
    return (
        <Container>
        <div>
            <Title>WELCOME TO FITMAS 👋</Title>
            <SubTitle>Please signup with your details!</SubTitle>
        </div>
        <LoginField>
            <TextInput label="Full Name" placeholder="Enter full name"/>
            <TextInput label="Email Address" placeholder="Enter email"/>
            <TextInput  label="Password" placeholder="Set password" password/>
        </LoginField>
        <Button text="Sign up" />
      </Container>
    );
}