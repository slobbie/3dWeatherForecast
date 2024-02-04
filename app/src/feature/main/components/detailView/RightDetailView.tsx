import { Canvas } from '@react-three/fiber';
import { SnowModel } from '@feature/main/components/model/SnowModel';
// import { OrbitControls } from '@react-three/drei';
import { weatherColorSet } from '@common/constants/weatherColorSet';
import styled from 'styled-components';
// import { SunModel } from '../model/SunModel';
import RainIcon from '@assets/weather-Rain.png';
import { useEffect, useState } from 'react';
import { IDayInfoData } from '@feature/main/interface/rightDetailView.interface';
import { weatherApi } from '@api/weather';

const DayMockup = [
  {
    min: -1,
    max: 8,
    day: '화',
  },
  {
    min: -1,
    max: 8,
    day: '수',
  },
  {
    min: -1,
    max: 8,
    day: '목',
  },
  {
    min: -1,
    max: 8,
    day: '금',
  },
  {
    min: -1,
    max: 8,
    day: '토',
  },
  {
    min: -1,
    max: 8,
    day: '일',
  },
  {
    min: -1,
    max: 8,
    day: '월',
  },
];

/**
 * 좌측 디테일 뷰
 */
const RightDetailView = () => {
  const [sliderList, setSliderList] = useState<IDayInfoData[]>([]);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [count, setCount] = useState(0);
  const onClickDay = (index: number) => {
    const newPosition = -index * (150 + 24);
    setCount(() => {
      return index;
    });

    setSliderPosition(newPosition);
  };

  useEffect(() => {
    const getMidLandFcst = async () => {
      // const res = await weatherApi.getMidLandFcst({
      //   regId: '11B00000',
      //   tmFc: '202402031800',
      // });
      // const midTaRes = await weatherApi.getMidTa({
      //   regId: '11B10101',
      //   tmFc: '202402040600',
      // });

      const vilageFcstRes = await weatherApi.getVilageFcst({
        baseDate: '20240203',
        baseTime: '2300',
        nx: '55',
        ny: '127',
      });
      console.log('vilageFcstRes', vilageFcstRes);
    };
    getMidLandFcst();
  }, []);

  useEffect(() => {
    const data = [...DayMockup];
    const newList = [...data.slice(count, DayMockup.length - 1), ...DayMockup];
    setSliderList((prevList) => [...prevList, ...newList]);
  }, [count]);

  return (
    <ModelDiv $BgColor={weatherColorSet.sunny}>
      <WeatherInfoTitleBox>
        {/* <WeatherDay>2024.01.30 화</WeatherDay> */}
        <WeatherTitle>서울 특별시 </WeatherTitle>
        {/* <WeatherTitle>눈 오는 날씨</WeatherTitle> */}
      </WeatherInfoTitleBox>
      <GlassDiv>
        <ContentDiv>
          <Canvas
            shadows
            camera={{
              position: [0, 26, 0],
              // 화각
              // fov: 75,
              // near: 1,
              // far: 2,
            }}
          >
            {/* <OrbitControls /> */}
            <directionalLight intensity={10} />
            <ambientLight />
            <SnowModel
              // position={[-0.2, 25, -0.0]}
              position={[-0.1, 25, -0.03]}
              scale={0.6}
            />
            {/* <SunModel
              // rotation={[0, Math.PI / 2, 0]}
              rotation={[1.4, 0, 0]}
              position={[-1.4, 20, 0]}
            /> */}
          </Canvas>
        </ContentDiv>
        <WeatherInfoBox>
          {/* <WeatherDay>2024.01.30 화</WeatherDay> */}
          <UnitDiv>29°</UnitDiv>
          <DayTemperature>
            <div>최고 -1°</div>
            <div>최저: -10°</div>
          </DayTemperature>
        </WeatherInfoBox>
      </GlassDiv>
      <WeeklyBox>
        <SliderBox
          // ref={carouselRef}
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >
          {sliderList.map((item, index) => {
            return (
              <DayInfo
                $isScale={index === count}
                key={index}
                onClick={() => onClickDay(index)}
              >
                <Day>{item.day}</Day>
                <DayInfoIcon src={RainIcon} />
                {/* <DayTemperature>
                  <div>{item.max}</div>
                  <div>{item.min}</div>
                </DayTemperature> */}
              </DayInfo>
            );
          })}
        </SliderBox>
      </WeeklyBox>
    </ModelDiv>
  );
};

export default RightDetailView;
// left: -175px
const ModelDiv = styled.div<{ $BgColor: string }>`
  position: absolute;
  z-index: 100;
  width: 30%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* justify-content: center;
  align-items: center; */
  transition: 0.4s ease-in-out;

  background: rgba(74, 74, 74, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  align-items: center;
  padding-top: 5%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GlassDiv = styled.div`
  width: 80%;
  height: 20vh;
  /* z-index: 100; */
  position: relative;
  background: rgba(74, 74, 74, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 8%;
  justify-content: flex-end;
`;

// const CanvasDiv = styled.div`
//   width: 50%;
//   height: 20%;
//   position: relative;
//   z-index: 200;

//   /* From https://css.glass */
//   background: rgba(74, 74, 74, 0.18);
//   border-radius: 16px;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(2.5px);
//   -webkit-backdrop-filter: blur(2.5px);

//   /* background-color: #59888a;
//   margin-bottom: 40%;
//   border-radius: 68% 32% 51% 49% / 63% 70% 30% 37%; */
// `;

const ContentDiv = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WeatherInfoTitleBox = styled.div``;

const WeatherInfoBox = styled.div`
  margin-right: 10%;
`;

// const WeatherDay = styled.div`
//   font-size: 30px;
//   color: #fff;
//   /* font-weight: lighter; */
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

const WeatherTitle = styled.div`
  font-size: 30px;
  color: #fff;
  /* font-weight: lighter; */
  font-weight: bold;
  margin-bottom: 10px;
`;
const UnitDiv = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
`;

const WeeklyBox = styled.div`
  top: 20%;
  position: relative;
  width: 80%;
  height: 23%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const DayInfo = styled.div<{ $isScale: boolean }>`
  width: calc(150px - 20px);
  height: calc(150px - 20px);
  min-width: 150px;
  background: ${(props) =>
    props.$isScale ? 'rgba(74, 74, 74, 0.8)' : 'rgba(74, 74, 74, 0.36)'};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  /* margin-bottom: 25px; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  position: relative;
  z-index: 100;
`;

const DayInfoIcon = styled.img`
  width: 80%;
  height: 100%;
  position: absolute;
  z-index: 200;
  top: 0;
`;

const Day = styled.div`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

const DayTemperature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  div {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: all 0.5s;
`;
