/* eslint-disable prettier/prettier */
import EmailForm from './form';
import GetNowBtn from './buttons';

// Style Reference
// https://www.ethoslife.com/life/ethos-term-life-insurance/?utm_source=google&utm_medium=cpc&utm_campaign=B-Brand-All&utm_content=e&utm_term=ethos%20insurance&keywordid=aud-401225021921:kwd-330059242220&e_ad_id=408082639183&e_adset_id=79337934946&e_campaign_id=6823998935&_bm=e&_bn=g&gclid=CjwKCAjwov6hBhBsEiwAvrvN6EtzYjB9F6VhIruMaY1i84oJ8y2GCYWW3TGMAPAeV1J2jv7AG-KGTRoCaVIQAvD_BwE

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
          <div className="btn-container text-margin text-margin-top">
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
