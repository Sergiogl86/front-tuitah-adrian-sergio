const DateSince = ({ date }) => {
  const calculate = () => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffDays = date2.getMinutes() - date1.getMinutes();
    return diffDays;
  };

  return (
    <>
      <p> {`El tuit tiene ${calculate()} minutos...`}</p>
    </>
  );
};

export default DateSince;
