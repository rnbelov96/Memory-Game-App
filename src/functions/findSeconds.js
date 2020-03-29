export default function(time) {
  return {
    usual: time % 60,
    edited: time % 60 < 10 ? `0${time % 60}` : `${time % 60}`,
  };
}
