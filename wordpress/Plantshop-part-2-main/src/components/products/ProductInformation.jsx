import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
// Care guidance, origin, family and genus now come from the WordPress fields.
export default function ProductInformation({ product }) {
  const hasCare = product.light || product.water || product.note;
  const sections = [
    {
      id: "plant-care",
      title: "Plant care",
      content: hasCare ? (
        <dl className="plant-facts">
          <dt>
            <Icon name="sun" className="care-icon" />
            Light
          </dt>
          <dd>{product.light}</dd>
          <dt>
            <Icon name="droplet" className="care-icon" />
            Water
          </dt>
          <dd>{product.water}</dd>
          <dt>
            <Icon name="info" className="care-icon" />
            Care note
          </dt>
          <dd>{product.note}</dd>
        </dl>
      ) : (
        <p>Care guidance is not available for this plant yet.</p>
      ),
    },
    {
      id: "plant-information",
      title: "Plant information",
      content: (
        <div className="plant-information">
          {product.origin ? (
            <p>{product.origin}</p>
          ) : (
            <p>Origin is not available yet.</p>
          )}
          {product.family && (
            <p>
              This plant belongs to the {product.family} family
              {product.genus && <> and the {product.genus} genus</>}.
            </p>
          )}
        </div>
      ),
    },
  ];
  // Pass server-rendered content into the interactive accordion.
  return <Accordion sections={sections} defaultOpenId="plant-care" />;
}
