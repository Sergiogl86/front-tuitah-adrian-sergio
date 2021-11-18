const DateSince = ({ date }) => {
  const calculate = () => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffDays = date2.getMinutes() - date1.getMinutes();
    return diffDays;
  };

  return (
    <>
      <h5> {`El tuit tiene ${calculate()} minutos...`}</h5>
    </>
  );
};

export default DateSince;
