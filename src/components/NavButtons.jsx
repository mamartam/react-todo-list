function NavButtons({ activeRadio, handleRadio }) {
  return (
    <div className="nav">
      <div className="nav__box">
        <label htmlFor="all">All</label>
        <input
          type="radio"
          name="radio-btn"
          id="all"
          checked={activeRadio === "all"}
          onChange={handleRadio}
        />
      </div>
      <div className="nav__box">
        <label htmlFor="active">Active</label>
        <input
          type="radio"
          name="radio-btn"
          id="active"
          checked={activeRadio === "active"}
          onChange={handleRadio}
        />
      </div>
      <div className="nav__box">
        <label htmlFor="completed">Completed</label>
        <input
          type="radio"
          name="radio-btn"
          id="completed"
          checked={activeRadio === "completed"}
          onChange={handleRadio}
        />
      </div>
    </div>
  );
}

export default NavButtons;
