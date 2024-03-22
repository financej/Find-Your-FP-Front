import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { DefaultPaper } from "../../../components/ui/paper";
import Chart from "./components/Chart";
import CardComponent from "../../../components/ui/card/CardComponent";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <DefaultPaper>
        <Typography variant="h5">메트님의 보험 진단 결과</Typography>
        <Box>
          <Typography variant="h3">0,000,000원</Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", pt: 1, cursor: "pointer" }}
          >
            <Typography variant="body1">
              내게 맞는 맞춤형 보험 상품을 지금 바로 진단해보세요
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.primary.main }}
            >
              진단 바로가기
              <KeyboardArrowRightOutlinedIcon
                sx={{ color: theme.palette.primary.main }}
              />
            </Typography>
          </Stack>
        </Box>
      </DefaultPaper>

      <Stack direction={"row"} gap={3}>
        <DefaultPaper alignItems="center" height="300">
          <Typography variant="body1">
            또래보다 매달
            <Typography
              variant="span"
              sx={{ color: theme.palette.primary.main }}
            >
              &nbsp;?원&nbsp;
            </Typography>
            적게 내고 있어요!
          </Typography>

          <Chart />
        </DefaultPaper>

        <DefaultPaper alignItems="center" height="300">
          <Typography variant="body1">
            또래보다 매달
            <Typography
              variant="span"
              sx={{ color: theme.palette.primary.main }}
            >
              &nbsp;?원&nbsp;
            </Typography>
            적게 내고 있어요!
          </Typography>

          <Chart />
        </DefaultPaper>
      </Stack>

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
        {_mock.map((item, idx) => {
          return <CardComponent data={item} />;
        })}
      </Box>
    </>
  );
};

export default Home;

const _mock = [
  {
    title: "AA 보험",
    category: "실비 보장 보험",
    contents: "가장 많이 보장되는 실비 보험",
  },
  {
    title: "BB 보험",
    category: "암 보장 보험",
    contents: "가장 많이 보장되는 암 보험",
  },
  {
    title: "CC 보험",
    category: "상해 보장 보험",
    contents: "가장 많이 보장되는 상해 보험",
  },
  {
    title: "DD 보험",
    category: "상해 보장 보험",
    contents: "가장 많이 보장되는 상해 보험",
  },
  {
    title: "AA 보험",
    category: "실비 보장 보험",
    contents: "가장 많이 보장되는 실비 보험",
  },
  {
    title: "BB 보험",
    category: "암 보장 보험",
    contents: "가장 많이 보장되는 암 보험",
  },
  {
    title: "CC 보험",
    category: "상해 보장 보험",
    contents: "가장 많이 보장되는 상해 보험",
  },
  {
    title: "DD 보험",
    category: "상해 보장 보험",
    contents: "가장 많이 보장되는 상해 보험",
  },
];
