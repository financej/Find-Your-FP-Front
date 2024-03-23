import { Box, Typography } from "@mui/material";
import CardComponent from "../../../components/ui/card/CardComponent";
import useGetPlanner from '../../../api/planner';

export default function PlannerPage() {
  const { data } = useGetPlanner();
  return (
    <>
      <Typography variant="h5" sx={{ width: "100%" }}>
        메트님, 이런 상품은 어때요?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          maxWidth: "100%",
        }}
      >
        {data && data.length > 0
          ? data?.map((item, idx) => {
              return <CardComponent data={item} key={idx} />;
            })
          : _mock?.map((item, idx) => {
              return <CardComponent data={item} key={idx} />;
            })}
      </Box>
    </>
  );
}

const _mock = [
  {
    id: 123,
    plannerName: "김준수",
    address: "서울시 서초구 서초동",
  },
  {
    id: 124,
    plannerName: "이준수",
    address: "서울시 서초구 서초동",
  },
  {
    id: 125,
    plannerName: "박준수",
    address: "서울시 서초구 서초동",
  },
  {
    id: 126,
    plannerName: "함준수",
    address: "서울시 서초구 서초동",
  },
];
