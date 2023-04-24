import EmailForm from './form';
import GetNowBtn from './buttons';
// Style Reference
// https://www.ethoslife.com/life/ethos-term-life-insurance/?utm_source=google&utm_medium=cpc&utm_campaign=B-Brand-All&utm_content=e&utm_term=ethos%20insurance&keywordid=aud-401225021921:kwd-330059242220&e_ad_id=408082639183&e_adset_id=79337934946&e_campaign_id=6823998935&_bm=e&_bn=g&gclid=CjwKCAjwov6hBhBsEiwAvrvN6EtzYjB9F6VhIruMaY1i84oJ8y2GCYWW3TGMAPAeV1J2jv7AG-KGTRoCaVIQAvD_BwE

export default function HeroSection(child1 = null, child2) {
  return (
    <>
      {child1.children}
      {child2.children}
      <div className="half-section info-column">
        <div className="align-container align-items-start center-md">
          <h1 className="fs-1 text-margin outfit-font">
            Instant Life Insurance
          </h1>
          <p className="fs-4 w-75  text-margin mt-4 sub-title opensans-font text-muted">
            No medical exams, no blood tests Contact us to get covered today.
          </p>
          <div className="btn-container gap-5 text-margin text-margin-top position-relative">
            <button className="btn btn-bg border opensans-font fw-light text-white">
              Ours Agents
            </button>
            <GetNowBtn></GetNowBtn>
            {/* <p>{data.id}</p> */}
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
