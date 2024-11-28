import WorkoutCard from "../../components/Cards/WorkoutCard/WorkoutCard";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Container,
  Wrapper,
  Left,
  Title,
  Right,
  Section,
  SectionTitle,
  CardWrapper,
  slotProps
} from "./StyledComponent";


export default function Workout() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              slotProps={slotProps}
            />
          </LocalizationProvider>
        </Left>
        <Right>
          <Section>
            <SectionTitle>Today's Workouts</SectionTitle>
            <CardWrapper>
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
            </CardWrapper>
          </Section>
        </Right>
      </Wrapper>
    </Container>
  );
}
