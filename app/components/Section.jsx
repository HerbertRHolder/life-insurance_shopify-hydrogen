// Style Reference
// https://www.ethoslife.com/life/ethos-term-life-insurance/?utm_source=google&utm_medium=cpc&utm_campaign=B-Brand-All&utm_content=e&utm_term=ethos%20insurance&keywordid=aud-401225021921:kwd-330059242220&e_ad_id=408082639183&e_adset_id=79337934946&e_campaign_id=6823998935&_bm=e&_bn=g&gclid=CjwKCAjwov6hBhBsEiwAvrvN6EtzYjB9F6VhIruMaY1i84oJ8y2GCYWW3TGMAPAeV1J2jv7AG-KGTRoCaVIQAvD_BwE
import {CardInfo} from './cards';

export default function Section(rightContent, {text, info}) {
  return (
    <>
      <section className="full-section dol center">
        <div className="half-section dol center info-column">
          <CardInfo title={text} info={info} />
        </div>
        <div className="half-section center">{rightContent.children}</div>
      </section>
    </>
  );
}
