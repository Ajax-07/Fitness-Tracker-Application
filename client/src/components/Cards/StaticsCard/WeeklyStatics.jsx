import { BarChart } from "@mui/x-charts/BarChart";
import { Card, Title } from "./StyledComponent";

const xAxisProps = {
  scaleType: "band",
  dataKey: "weeks",
  label: "Weeks",
  
};

export default function WeeklyStatic({ data }) {
  return (
    <Card>
      <Title>Weekly Calories Burnt</Title>
      {data?.totalWeeksCaloriesBurnt && (
        <BarChart
          xAxis={[
            { ...xAxisProps, data: data?.totalWeeksCaloriesBurnt?.weeks },
          ]}
          series={[
            {
              data: data?.totalWeeksCaloriesBurnt?.caloriesBurnt,
              label: "Calories Burnt",
            },
          ]}
          colors={["#eb8e34"]}
          width={400}
          height={250}
          lableStyle={{ color: "white" }}
        />
      )}
    </Card>
  );
}
