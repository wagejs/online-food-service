import { ArrowRight } from "@assets/icons";
import { Button, Pills } from "@components";
import { PillsVariant } from "@components/Pills";
import { TypeAnimation } from 'react-type-animation';
import { tailwindTheme } from '@utils/tailwindConfig'

type BrandValue = {
  variant: PillsVariant
  text: string
}

function HeroBanner() {

  const brandValues: BrandValue[] = [
    {
      variant: "white",
      text: 'Cursus Integer',
    },
    {
      variant: "white",
      text: 'Integer Consequat ',
    },
    {
      variant: "white",
      text: 'Tellus Euismod Pellentesque',
    },
    {
      variant: "white",
      text: 'Aliquot Tristique',
    },
    {
      variant: "white",
      text: 'Pellentesque Tempus',
    },
    {
      variant: "white",
      text: 'Mauris Fermentum Praesent',
    },
  ]

  return (
    <section className="pt-36 pb-40 mx-auto text-center max-w-[1135px]">

      <h2 className="text-brand-primary font-bold text-2xl">RISUS PRAESENT VULPUTATE.</h2>
      <div className="mt-2 mb-10">
        <TypeAnimation
          sequence={[
            'Cursus Consequat Tristique.',
            2000,
            'Cursus Consequat Quisquam.',
            2000
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '60px', display: 'inline-block', lineHeight: '80px', fontWeight: 'bold', color: tailwindTheme.colors.brand.dark }}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {brandValues.map(({ variant, text }: BrandValue, idx) => (
          <Pills key={idx} variant={variant} text={text} />
        ))}
      </div>
      <Button className="mx-auto mt-14 flex justify-between w-[350px]" size="lg" variant="primary" onClick={() => { }}>
        <span>Sign In Now</span>
        <img src={ArrowRight} alt="arrow-right-icon" width={30} height={30} />
      </Button>
    </section>
  )
};

export default HeroBanner;

