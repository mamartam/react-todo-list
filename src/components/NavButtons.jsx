function NavButtons({ activeRadio, handleRadio }) {
  return (
    <div>
      <label htmlFor="all">All</label>
      <input
        type="radio"
        name="radio-btn"
        id="all"
        checked={activeRadio === "all"}
        onChange={handleRadio}
      />
      <label htmlFor="active">Active</label>
      <input
        type="radio"
        name="radio-btn"
        id="active"
        checked={activeRadio === "active"}
        onChange={handleRadio}
      />
      <label htmlFor="completed">Completed</label>
      <input
        type="radio"
        name="radio-btn"
        id="completed"
        checked={activeRadio === "completed"}
        onChange={handleRadio}
      />
    </div>
  );
}

export default NavButtons;
