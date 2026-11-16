import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";


//care guidance and origin now come from Laravel API.
export default function ProductInformation({ product }) {
  const sections = [
    {
      id: "plant-care",
      title: "Plant care",
      content: product.light ?(
        <dl className="plant-facts">
          <dt><Icon name="sun" className="care-icon" />Light</dt>
          <dd>{product.light}</dd>
          <dt><Icon name="droplet" className="care-icon" />Water</dt>
          <dd>{product.water}</dd>
          <dt><Icon name="info" className="care-icon" />Care note</dt>
          <dd>{product.note}</dd>
        </dl>
      ) : <p>Care guidance not available.</p>,
    },
    {
      id: "plant-information",
      title: "Plant information",
      content: product.origin 
      ? <div className="plant-information">
          <p>{product.origin}</p>
        </div>
      : <p>Information is not available.</p>,
    },
  ];

  // Pass server-rendered content into the interactive accordion.
  return <Accordion sections={sections} defaultOpenId="plant-care" />;
}
