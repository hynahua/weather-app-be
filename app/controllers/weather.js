const openweathermapServiceAPI = require("../services/openweathermapServiceAPI");
// import { openweathermapAPI } from "../services/openweathermapAPI";

//GET ALL
exports.index = async (req, res) => {
  const result = await openweathermapServiceAPI.getWeather();

  const weatherList = result.data.list;
  const noonList = weatherList.filter((element) => {
    return element.dt_txt.includes("12:00:00");
  });
  res.send(noonList);
};

//POST
exports.store = (req, res) => {};

//PUT
exports.update = (req, res) => {};

//GET ONE only the weather in Sydney
exports.show = (req, res) => {};

//DELETE
exports.delete = (req, res) => {};
