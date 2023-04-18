export default function EmailForm() {
  return (
    <form className="w-100 d-flex flex-column align-items-center">
      <label htmlFor="email" className="form-label opensans-font">
        Subscribe for new offers!
      </label>
      <div className="w-100 d-flex justify-content-center gap-2">
        <input
          type="email"
          className="form-control w-50 opensans-font"
          name="email"
          placeholder="Johnsmith@life.com"
        />
        <button type="sumbit" className="btn btn-primary opensans-font fs-6">
          Subscribe
        </button>
      </div>
    </form>
  );
}
