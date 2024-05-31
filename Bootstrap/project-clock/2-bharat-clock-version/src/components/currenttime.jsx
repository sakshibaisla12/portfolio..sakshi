let Currentime = () => {
  let time = new Date();

  return (
  <p> 
    This is the currentime:{time.toLocalDateString()} -{" "} {time.toLocaleTimeString()}
  </p>
  );
};
export default Currentime;
