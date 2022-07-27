import { Box, Page, Stack, Title } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './data.json';
import ItemMobile from './ItemMobile';

const Desktop: React.FC = () => {
  return (
    <Stack>
      <Page spacing={20}>
        <Stack textAlign="center" spacing={2} position="relative">
          <Title>Roadmap</Title>
        </Stack>

        <Box>
          {/* <Divider sx={{ mb: -12.5, display: { md: 'flex', sm: 'none', xs: 'none' } }} /> */}
          <Stack alignItems="center">
            <Box maxWidth="lg">
              <Swiper
                slidesPerView={2}
                spaceBetween={0}
                // loop={true}
                autoHeight
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                modules={[Pagination]}
                style={{ paddingBottom: 80 }}
              >
                {data.map((item, index) => {
                  return (
                    <SwiperSlide style={{ background: 'transparent', height: '100%' }} key={index}>
                      <ItemMobile {...item} index={index} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Stack>
        </Box>
      </Page>
    </Stack>
  );
};

const Mobile: React.FC = () => {
  return (
    <Stack px={5}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Title>Roadmap</Title>
      </Stack>
      <Box>
        <Stack alignItems="center">
          <Box maxWidth="lg">
            <Swiper
              slidesPerView={1}
              spaceBetween={80}
              autoHeight
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination]}
              style={{ paddingBottom: 80 }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide style={{ background: 'transparent' }} key={index}>
                    <ItemMobile {...item} index={index} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

const View: React.FC = () => {
  const { isMobile } = useDetect();
  if (isMobile) {
    return <Mobile />;
  }
  return <Desktop />;
};

export default React.memo(View);
