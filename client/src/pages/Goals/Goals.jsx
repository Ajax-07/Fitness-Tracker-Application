import { Container } from "./StyledComponent";

export default function About() {
  return (
    <Container>
      <h1>Goals setting is Coming Soon...</h1>
      <br />
      <p style={{ width: "500px", textAlign: "center", fontSize: "20px" }}>
        We are working on gaols setting page to add personalized goals, also
        user can calculate their BMI.
        <span style={{ color: "yellow" }}>
          Here we actually want to <span style={{color:'tomato'}}><u>integrate AI feature</u></span> to suggest personalized
          workout plan and diet chart based on BMI and users data
        </span>
        .
      </p>
    </Container>
  );
}
// work in progress...
