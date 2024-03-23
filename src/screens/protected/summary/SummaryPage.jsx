import { Box, Typography, Stack, Avatar } from "@mui/material";
import ChatIcon from '@/ui/icons/ChatIcon'
import SummaryCard from "../../../components/ui/card/SummaryCard";

export default function SummaryPage() {


    return (
        <Box
            sx={{
            margin: "0 auto",
            height: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // 오타 수정: 'alignItem' -> 'alignItems'
            }}
        >
        {/* 상담사 정보와 아바타를 포함하는 상단 섹션 */}
        <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
          <Avatar sx={{ width: 56, height: 56, backgroundColor: "white" }}><ChatIcon/></Avatar>
          <Box>
            <Typography variant="h6">
              이병우 설계사
            </Typography>
            <Typography variant="body1">
              서울지점
            </Typography>
          </Box>
        </Stack>

        <SummaryCard title="요약정리">
        메트라이프의 `무배당 iLove아이보험` 의 주요 보장 내용을 요약해 드리겠습니다. 이 상품은 어린이보험에 해당하며, 주요 보장 항목은 다음과 같습니다.어린이 질환 수술보험금: 피보험자가 보험 기간 중 어린이 중요 질환 또는 어린이 생활 질환의 직접적인 치료를 목적으로 수술을 받았을 경우 지급되는 보험금입니다. 여기서 어린이 중요 질환에 해당하는 경우 100만원이 지급됩니다​​.
        이 정보는 메트라이프 공식 웹사이트에서 제공한 개요를 바탕으로 합니다. 보험 상품의 보장 내용은 시간에 따라 변할 수 있으므로, 가장 정확하고 자세한 정보를 원하신다면 직접 메트라이프 공식 웹사이트를 방문하거나 상담사와의 상담을 통해 확인하시기 바랍니다.
        </SummaryCard>
      </Box>
    )
}