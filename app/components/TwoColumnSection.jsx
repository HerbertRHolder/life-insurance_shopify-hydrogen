/* eslint-disable prettier/prettier */
import EmailForm from './form';
import GetNowBtn from './buttons';

export default function TwoColumnSection() {
  return (
    <>
      <div className="half-section info-column">
        <div className="align-container align-items-start center-md">
          <h1 className="fs-1 text-margin outfit-font text-center">
            Instant Life Insurance
          </h1>
          <p className="fs-4 w-75 text-margin mt-4 small-font opensans-font text-muted">
            No medical exams, no blood tests - Contact us to get covered
            today.
          </p>
          <div className="btn-container text-margin-top">
            <GetNowBtn></GetNowBtn>
            <GetNowBtn></GetNowBtn>
          </div>
        </div>
      </div>
      <div className="half-section">
        <div className="align-container">
          <EmailForm></EmailForm>
        </div>
      </div>
    </>
  );
}
