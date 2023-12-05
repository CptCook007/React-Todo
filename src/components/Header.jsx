function Header() {
  const day = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const todayIndex = new Date().getDay();
  const today = day[todayIndex];
  return (
    <>
      <div className="text-slate-200 font-bold text-5xl flex justify-center mt-10">
        <h1 className="mb-5">
          <span>to</span>
          <span className="text-orange-600">do</span>.
        </h1>
      </div>
      <hr className="" />
      <div className="text-slate-200 font-semibold text-3xl flex justify-center mt-10">
        <p className="text-center">
          Hey! It's {today}.<br></br> Make your todo list for the day.
        </p>
      </div>
    </>
  );
}
export default Header;
