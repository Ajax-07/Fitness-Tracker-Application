import CountCard from "../../components/Cards/CountsCard/CountCard";
import { counts } from "../../utils/Data";
import WeeklyStatic from "../../components/Cards/StaticsCard/WeeklyStatics";
import {
  Container,
  Wrapper,
  Title,
  FlexWrap,
  Section,
  SectionWrapper,
} from "./StyledComponent";
import { data } from "../../utils/CaloriesData";
import CategoryChart from "../../components/Cards/CategoryCard/CategoryChart";
import AddWorkout from "../../components/Cards/AddWorkouts/AddWorkout";
import Workout from "../../components/Cards/WorkoutCard/WorkoutCard";

export default function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((count, index) => (
            <CountCard key={index} item={count} data={data} />
          ))}
        </FlexWrap>
        <FlexWrap>
          <WeeklyStatic data={data} />
          <CategoryChart data={data} />
          <AddWorkout />
        </FlexWrap>
        <Section>
          <Title>Today's Workouts</Title>
          <SectionWrapper>
            <Workout />
            <Workout />
            <Workout />
          </SectionWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
}
