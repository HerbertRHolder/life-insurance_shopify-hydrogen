export default function EmailForm() {
  return (
    <div className="form-box">
      <form className="form">
        {/* <span className="title opensans-font">Sign up</span> */}
        <span className="title opensans-font">Get A Quote Today!</span>
        <div className="form-container d-flex gap-5">
          <div className="radio-wrapper w-50 position-relative">
            <label htmlFor="male" className="btn w-100 sub-bg">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              className="btn sub-bg opensans-font fs-6"
              value={'male'}
              required
            />
          </div>

          <div className="radio-wrapper w-50 position-relative">
            <label htmlFor="female" className="btn w-100 sub-bg">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="btn sub-bg opensans-font fs-6"
              value={'female'}
              required
            />
          </div>
        </div>
        <div className="form-container d-flex gap-5">
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="age" className="form-label opensans-font fw-light">
              Age
            </label>
            <input
              type="text"
              pattern="[0-9]{1-3}"
              name="age"
              id="age"
              className="btn w-100 sub-bg"
              required
            />
          </div>
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="zip" className="form-label opensans-font fw-light">
              Zip
            </label>
            <input
              type="text"
              pattern="[0-9]{5}"
              name="zip"
              id="zip"
              className="btn w-100 sub-bg"
              required
            />
          </div>
        </div>
        <button type="submit" className="opensans-font fw-light">
          Get Quote !
        </button>
      </form>
    </div>
  );
}
