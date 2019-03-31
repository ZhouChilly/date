import axios from "axios";
import querystring from "querystring";
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const request = {
  handleData: function(res, resolve, reject) {
    let data = res.data;
    if (data.data && data.data.ret == 1000) {
      resolve(data.body);
    } else {
      let ret = data.data.ret,
        errorInfo = data.data.msg;
      if (ret === 2003) {
        // TODO:
        return;
      }
      reject && reject();
    }
  },
  post: function(url, params, type) {
    let _this = this,
      config = {};
    if (type && type == "json") {
      config = {
        headers: {
          post: {
            "Content-Type": "application/json"
          }
        }
      };
    } else if (type && type == "file") {
      config = {
        headers: {
          post: {
            "Content-Type": "multipart/form-data"
          }
        }
      };
    } else {
      params = querystring.stringify(params);
    }
    return new Promise((resolve, reject) => {
      axios.post(url, params, config).then(res => {
        _this.handleData(res, resolve, reject);
      });
    });
  },
  get: function(url) {
    let _this = this;
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        _this.handleData(res, resolve, reject);
      });
    });
  }
};
export default request;
