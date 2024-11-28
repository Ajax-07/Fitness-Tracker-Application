import { useState } from "react";
import logoImage from "../../utils/Images/logo.svg";
import authImgae from "../../utils/Images/AuthImage.jpg";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import {
  Container,
  Left,
  Logo,
  Image,
  Right,
  Text,
  TextButton,
} from "./StyledComponent";

function Authentication() {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <Left>
        {/* <h1>This is left section</h1> */}
        <Logo src={logoImage} />
        <Image src={authImgae} />
      </Left>
      <Right>
        {/* <h1>This is right section</h1> */}

        {login ? (
          <>
            <SignUp />
            <Text>
              Already have an Account?{" "}
              <TextButton onClick={() => setLogin(false)}>Sign In</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>Sign Up</TextButton>{" "}
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
}

export default Authentication;
