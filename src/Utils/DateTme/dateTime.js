import dayjs from "dayjs";

export const formatDate = (date) => {
  var localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  return dayjs(date).format("L");
};

export const formatBirthDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};
