import axios from 'axios';

/**
 *  Http 통신 함수
 *  @return get
 *  @return post
 *  @return put
 *  @return patch
 *  @return delete
 */
const HttpHelper = {
  /**
   * GET 통신 요청s
   */
  get: async <T>(path: string, param?: T): Promise<T> => {
    let url = '';
    if (typeof param === 'object') {
      url = path;
    } else if (typeof param === 'undefined') {
      url = path;
    } else {
      url = `${path}/${param}`;
    }
    return new Promise((resolve) => {
      axios
        .get(url)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return console.log(err);
        });
    });
  },

  /**
   * POST 통신 요청
   */
  post: async <T>(path: string, param: T): Promise<T> => {
    return new Promise((resolve) => {
      axios
        .post(path, param)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return console.log(`${path} : ${err}`);
        });
    });
  },

  /**
   * put 통신 요청
   */
  put: async <T>(path: string, param: T) => {
    return new Promise((resolve) => {
      axios
        .put(path, param)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return console.log(err);
        });
    });
  },
  /**
   * PATCH 통신 요청
   */
  patch: async <T>(path: string, param: T) => {
    return new Promise((resolve) => {
      axios
        .patch(path, param)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return console.log(err);
        });
    });
  },

  /**
   * DELETE 통신 요청
   */
  delete: async <T>(path: string, param: T) => {
    let url = '';
    if (typeof param === 'object') {
      url = path;
    } else if (typeof param === 'undefined') {
      url = path;
    } else {
      url = `${path}/${param}`;
    }
    return new Promise((resolve) => {
      axios
        .delete(url)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return console.log(err);
        });
    });
  },
};

export default HttpHelper;
