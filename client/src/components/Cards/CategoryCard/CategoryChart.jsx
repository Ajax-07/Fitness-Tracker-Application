import { PieChart } from "@mui/x-charts/PieChart";
import { Card, Title } from "../StaticsCard/StyledComponent";

const seriesData = {
  innerRadius: 30,
  outerRadius: 120,
  paddingAngle: 3,
  CornerRadius: 3,
};

export default function CategoryChart({ data }) {
  return (
    <Card>
      <Title>Weekly Calories Burnt</Title>
      {data?.totalWeeksCaloriesBurnt && (
        <PieChart
          xAxis={[
            {
              scaleType: "band",
              data: data?.totalWeeksCaloriesBurnt?.weeks,
              label: "Weeks",
            },
          ]}
          series={[{ ...seriesData, data: data?.pieChartData }]}
          width={400}
          height={250}
        />
      )}
    </Card>
  );
}
