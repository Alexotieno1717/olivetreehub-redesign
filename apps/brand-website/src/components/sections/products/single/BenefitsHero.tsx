import { SectionsEntityProductPage, listItem } from '../../../../../types';
import { DivWithBorderOnTop, ListWithIcon } from '../../../ui/ComponentsStyled';

type BenefitsHeroProps = {
  data?: SectionsEntityProductPage
  color: string
};

const BenefitsHero = ({ data,color }: BenefitsHeroProps) => {
  const benefits = data?.benefits ?? [];
  const listIcon = data?.litIcon?.data?.attributes?.url;

  return (
    <section>
      <main className="max-w-[1042px] mx-auto p-4 lg:p-0">
        <div className=" md:pb-10 lg:px-14">
          <DivWithBorderOnTop $color={color|| 'dssdsd'} className={`mx-auto pt-5 md:pt-10 border border-l-0  border-t-green-50 border-r-0 border-b-0`}>
            <h1 className="font-bold text-2xl text-black mb-4 md:mb-8">Benefits</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 list-none gap-y-4 lg:gap-y-8 lg:gap-x-[150px]">
              {benefits.map((benefit) => (
                <ListWithIcon $listIcon={listIcon || ''} key={benefit.id} className={` min-h-[31px] bg-no-repeat pl-11 text-black text-sm font-normal`}>
                  {benefit?.description}
                </ListWithIcon>
              ))}
            </ul>
          </DivWithBorderOnTop>
        </div>
      </main>
    </section>
  );
};

export default BenefitsHero;
