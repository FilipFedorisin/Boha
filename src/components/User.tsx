const User = () => {
  return (
    <div className="container__small">
      <h1 className="text-center">Prihlásenie</h1>
      <form className="w-full flex-col ">
        <div className="mb-4 mt-4">
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" />
        </div>

        <div className="mb-4 mt-4">
          <label htmlFor="password">Heslo</label>
          <br />
          <input type="text" />
        </div>

        <div className="mb-4 mt-4">
          <button
            className="p-2 bg-main"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Prihlásiť sa
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
