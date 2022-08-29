export default function useDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const now = year + " / " + month + " / " + day + " " + hour + ":" + min;
  return now;
}
