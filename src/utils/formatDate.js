import moment from "moment";

const formatDate = (unix_time) => {
  const date = new Date(unix_time * 1000);
  
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};

export default formatDate;
