import dayjs from "dayjs";

 const getCurrentDateTime = () => {
  return dayjs().format('YYYY-M-D HH:mm:ss');
}

export default getCurrentDateTime;