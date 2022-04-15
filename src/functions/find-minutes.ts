export default (time: number) => ({
  usual: Math.floor(time / 60),
  edited:
      Math.floor(time / 60) < 10
        ? `0${Math.floor(time / 60)}`
        : `${Math.floor(time / 60)}`,
});
