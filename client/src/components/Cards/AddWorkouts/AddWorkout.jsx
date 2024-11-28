import TextInput from "../../TextInput/TextInput";
import { Card, Title } from "../StaticsCard/StyledComponent";
import { useState } from "react";
import Button from "../../Button/Button";

export default function AddWorkout() {
    const [workout, setWorkout] = useState("");
  return (
    <Card>
      <Title style={{marginBottom: '20px'}}>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        labelBgColor="white"
        labelColor="black"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
        placeholder={`Enter Workout in below format:\n
#Category:
- Workout type:
- Sets:
- Reps:
- Weight:
- Duration:
                `}
      />
      <Button text="Add Workout" small/>
    </Card>
  );
}
