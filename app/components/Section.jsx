// Style Reference
// https://www.ethoslife.com/life/ethos-term-life-insurance/?utm_source=google&utm_medium=cpc&utm_campaign=B-Brand-All&utm_content=e&utm_term=ethos%20insurance&keywordid=aud-401225021921:kwd-330059242220&e_ad_id=408082639183&e_adset_id=79337934946&e_campaign_id=6823998935&_bm=e&_bn=g&gclid=CjwKCAjwov6hBhBsEiwAvrvN6EtzYjB9F6VhIruMaY1i84oJ8y2GCYWW3TGMAPAeV1J2jv7AG-KGTRoCaVIQAvD_BwE
import {CardInfo} from './cards';
import {Image} from '@shopify/hydrogen';

export default function Section({QUERY}) {
  const img = QUERY.metaobjects.edges[0].node.img.reference.image;
  const prod = QUERY.products.edges[0].node;
  const title = QUERY.metaobjects.edges[0].node.title.name;
  const textDesc = QUERY.metaobjects.edges[0].node.text.line;
  return (
    <>
      <section className="full-section  center">
        <div className="half-section  center info-column">
          <CardInfo title={title} info={textDesc} />
        </div>
        <div className="half-section center align-items-center ">
          <Image
            alt={prod.description}
            data={img}
            key={prod.id}
            width={600}
            className=""
          />
        </div>
      </section>
    </>
  );
}
