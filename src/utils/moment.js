import moment from "moment";

const date = new Date();
export const CurrentTime = () => {};

export const FormattedTime = (value) => {
  return moment(value).format("MMMM Do YYYY, h:mm:ss a");
};

export const FormattedLecture = (value) => {
  return moment(value).format("MMMM Do YYYY, h:mm:ss a");
};

export const PreviousFmtted = (value) => {
  return moment(value).fromNow();
};

export const Today = moment(date).format("MMMM Do YYYY, h:mm:ss a");
