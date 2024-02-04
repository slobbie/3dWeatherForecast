import services from '@common/constants/services';
import HttpHelper from '@common/utils/httpHelper';

interface IGetMidLandFcstResult {
  response: {
    header: {
      resultCode: string;
    };
    body: {
      dataType: string;
      items: {
        item: [
          {
            regId: string;
            rnSt3Am: number;
            rnSt3Pm: number;
            rnSt4Am: number;
            rnSt4Pm: number;
            rnSt5Am: number;
            rnSt5Pm: number;
            rnSt6Am: number;
            rnSt6Pm: number;
            rnSt7Am: number;
            rnSt7Pm: number;
            rnSt8: number;
            rnSt9: number;
            rnSt10: number;
            wf3Am: string;
            wf3Pm: string;
            wf4Am: string;
            wf4Pm: string;
            wf5Am: string;
            wf5Pm: string;
            wf6Am: string;
            wf6Pm: string;
            wf7Am: string;
            wf7Pm: string;
            wf8: string;
            wf9: string;
            wf10: string;
          }
        ];
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}

interface IGetMidTaResult extends IGetMidLandFcstResult {
  body: {
    dataType: string;
    items: {
      item: [
        {
          regId: string;
          taMax3: number;
          taMax3High: number;
          taMax3Low: number;
          taMax4: number;
          taMax4High: number;
          taMax4Low: number;
          taMax5: number;
          taMax5High: number;
          taMax5Low: number;
          taMax6: number;
          taMax6High: number;
          taMax6Low: number;
          taMax7: number;
          taMax7High: number;
          taMax7Low: number;
          taMax8: number;
          taMax8High: number;
          taMax8Low: number;
          taMax9: number;
          taMax9High: number;
          taMax9Low: number;
          taMax10: number;
          taMax10High: number;
          taMax10Low: number;
          taMin3: number;
          taMin3High: number;
          taMin3Low: number;
          taMin4: number;
          taMin4High: number;
          taMin4Low: number;
          taMin5: number;
          taMin5High: number;
          taMin5Low: number;
          taMin6: number;
          taMin6High: number;
          taMin6Low: number;
          taMin7: number;
          taMin7High: number;
          taMin7Low: number;
          taMin8: number;
          taMin8High: number;
          taMin8Low: number;
          taMin9: number;
          taMin9High: number;
          taMin9Low: number;
          taMin10: number;
          taMin10High: number;
          taMin10Low: number;
        }
      ];
    };
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

interface IGetVilageFcstResult extends IGetMidLandFcstResult {
  body: {
    dataType: string;
    items: {
      item: [
        {
          baseDate: string;
          baseTime: string;
          category: string;
          fcstDate: string;
          fcstTime: string;
          fcstValue: string;
          nx: number;
          ny: number;
        }
      ];
    };
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

interface IGetMidLandFcstParam {
  regId: string;
  tmFc: string;
}

interface IGetVilageFcstParam {
  /** 발표일자 */
  baseDate: string;
  /** 발표시각 */
  baseTime: string;
  /** 예보지점 x 좌표 */
  nx: string;
  /** 예보지점 y 좌표 */
  ny: string;
}

const key = import.meta.env.VITE_APP_WEATHER_LONG_API_KEY;

/** 날씨 조회 api */
export const weatherApi = {
  /** 중기육상예보조회 */
  getMidLandFcst: async (param: IGetMidLandFcstParam) => {
    try {
      // const key = import.meta.env.VITE_APP_WEATHER_LONG_API_KEY;
      const { regId, tmFc } = param;
      const path = `${services.url.midLandFcst}?serviceKey=${key}&numOfRows=1&pageNo=1&dataType=${services.dataType.json}&regId=${regId}&tmFc=${tmFc}`;

      const res = await HttpHelper.get<IGetMidLandFcstResult>(path);
      const isSuccess = res.response.header.resultCode === '00';
      if (isSuccess) {
        return res.response.body.items.item[0];
      }
    } catch (error) {
      console.log('getMidLandFcst', error);
    }
  },

  /** 중기기온조회 */
  getMidTa: async (param: IGetMidLandFcstParam) => {
    try {
      const { regId, tmFc } = param;
      const path = `${services.url.midTa}?serviceKey=${key}&numOfRows=1&pageNo=1&dataType=${services.dataType.json}&regId=${regId}&tmFc=${tmFc}`;
      const midTaRes = await HttpHelper.get<IGetMidTaResult>(path);
      const isSuccess = midTaRes.response.header.resultCode === '00';
      if (isSuccess) {
        return midTaRes.response.body.items.item[0];
      }
    } catch (error) {
      console.log('getMidTa error:', error);
    }
  },

  /** 단기예보조회 */
  getVilageFcst: async (param: IGetVilageFcstParam) => {
    try {
      const { baseDate, baseTime, nx, ny } = param;
      const path = `${services.url.vilageFcst}?serviceKey=${key}&numOfRows=290&pageNo=3&dataType=${services.dataType.json}&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;
      const vilageFcstRes = await HttpHelper.get<IGetVilageFcstResult>(path);
      const isSuccess = vilageFcstRes.response.header.resultCode === '00';
      if (isSuccess) {
        return vilageFcstRes.response.body.items.item;
      }
    } catch (error) {
      console.log('getVilageFcst error:', error);
    }
  },
};
