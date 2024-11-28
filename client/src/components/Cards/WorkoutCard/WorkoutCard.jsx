import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import {
  Card,
  Category,
  Name,
  Sets,
  Flex,
  Details,
  Weight,
  Time,
} from "./StyledComponent";


export default function WorkoutCard() {
  return (
    <Card>
      <Category>#Chest</Category>
      <Name>Bench Press</Name>
      <Sets>4 sets x 12 reps</Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          <Weight>125 lbs</Weight>
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          <Time>45 Min</Time>
        </Details>
      </Flex>
    </Card>
  );
}
