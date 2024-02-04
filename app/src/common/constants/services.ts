export default Object.freeze({
  url: {
    /**  */
    midLandFcst:
      'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst',
    midTa: 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa',
    vilageFcst:
      'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
  },
  dataType: {
    json: 'JSON',
  },
  weatherSectionCode: {
    seoul: '11B00000',
    incheon: '11B00000',
    gyeonggiDo: '11B00000',
    gangwon: '11D10000',
    daejeon: '11C20000',
    /** 충청남도 */
    chungcheongnamDo: '11C20000',
    chungcheongbukDo: '11C10000',
    gwangju: '11F20000',
    jeollanamDo: '11F20000',
    jeonbuk: '11F10000',
    daegu: '11H10000',
    gyeongsangbukDo: '11H10000',
    busan: '11H20000',
    ulsan: '11H20000',
    gyeongsangnamDo: '11H20000',
    jeju: '11G00000',
  },
  weatherTemperatureCode: {
    seoul: '11B10101',
    incheon: '11B20201',
    suwon: '11B20601',
    paju: '11B20305',
    chuncheon: '11D10301',
    wonju: '11D10401',
    gangneung: '11D20501',
    daejeon: '11C20401',
    seosan: '11C20101',
    cheongju: '11C10301',
    jeju: '11G00201',
    gwangju: '11F20501',
    busan: '11H20201',
    ulsan: '11H20101',
    daegu: '11H10701',
  },
});
