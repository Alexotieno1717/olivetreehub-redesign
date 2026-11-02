import { SectionsEntityProductPage } from '../../../../../types';
import { Circle } from '../../../ui/ComponentsStyled';

type HowItWorksHeroProps = {
  data?: SectionsEntityProductPage
};

const HowItWorksHero = ({ data }: HowItWorksHeroProps) => {
  const instructions = data?.instructions ?? [];

  return (
    <section>
      {instructions.length > 0 ? (
        <main className="max-w-[1042px] mx-auto p-4 lg:p-0">
          <div className="md:py-7 lg:px-14">
            <div className="mx-auto">
              <h1 className="font-bold text-xl md:text-2xl text-black mb-8">How it Works</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30px] md:gap-x-[107.5px] gap-y-[54px]">
                {instructions.map((instruction, index) => (
                  <div key={instruction.id}>
                    <div className="grid lg:flex gap-x-5 align-middle items-center">
                      <Circle $color={data?.color || 'ffddfd'} className={`w-10 h-19 md:w-20 md:h-20 border-4 rounded-[50%] flex items-center justify-center mb-6`}>
                        <span className="font-medium text-2xl md:text-4xl">{index + 1}</span>
                      </Circle>
                      {instructions.length === index + 1 ? (
                        ''
                      ) : (
                        <>
                          {3 % (index + 1) === 0 && index + 1 !== 1 ? (
                            <>
                              <hr className={`invisible h-1 w-[8.688rem] -mt-5`} />
                            </>
                          ) : (
                            <hr className={`bg-black h-1 w-[8.688rem] -mt-5`} />
                          )}
                        </>
                      )}
                    </div>
                    <p className=" text-black text-sm font-normal ">{instruction?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className='md:py-7'/>
      )}
    </section>
  );
};

export default HowItWorksHero;
