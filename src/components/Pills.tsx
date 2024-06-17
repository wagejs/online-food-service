import { CircleCheck } from "@assets/icons";

export type PillsVariant = "white" | "primary"

interface IPills {
  variant: PillsVariant,
  text: string
}

const pillVariantMapStyle = {
  "white": 'bg-white',
  "primary": 'bg-brand-white-yellow'
}

function Pills({ variant, text }: IPills) {
  return <div className={`pills flex text-left rounded-full bg-white gap-2 px-5 py-4 ${pillVariantMapStyle[variant]}`}>
    <img src={CircleCheck} alt="pill-icon" />
    <p>{text}</p>
  </div>
};

export default Pills;