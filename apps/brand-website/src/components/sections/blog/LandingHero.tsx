import Image from 'next/image';
import type { ReactNode, SyntheticEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import SuccessModal from '../../modal/SuccessModal';
interface LandingHeroBlogProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

const LandingHeroBlog = ({ id, title, description, children }: LandingHeroBlogProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const startLoading = () => setIsLoading(true);

	const stopLoading = () => setIsLoading(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: {value: string}
    }
    const email = target.email.value

    // start loading.
    startLoading();
    const payload = qs.stringify({ email })

    const config = {
      method: 'POST',
      url: '/api/subscribe',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: payload

    }
    axios(config)
    .then((response) => {
      if(response.data.status === 222) {
        //open modal
        openModal()
        // Set loading as false.
        stopLoading()

        // Reset values.
        target.email.value = ""
      } else {
      alert('Something is not working, please try again later');

        // Set loading as false.
        stopLoading()
      }
    })
    .catch((error) => {
      alert(error);

      // Set loading as false.
      stopLoading();
    });
  }
  return (
    <>
    <section id={id} className="relative lg:max-h-[100vh] bg-primary-dark2 pt-20 ">
      <Image
        src={'/artwork/Light-accent.png'}
        width={536.676}
        height={433.404}
        alt={'light-accent'}
        className="top-0 absolute animate-pulse"
      />
      <main className="lg:max-w-[1031px] mx-auto px-4">
        <h1 className="text-left md:text-center text-white text-2xl md:text-4xl lg:text-6xl font-extrabold mt-2 md:mt-[5.5rem] relative z-10 mb-2">
          {title}
        </h1>
        <div className="flex justify-center relative z-10 mb-7">
          <p className="text-left md:text-center text-white text-base md:text-2xl font-normal max-w-[636px]">
            {description}
          </p>
        </div>

        <form method="post" onSubmit={handleSubmit} className="relative md:max-w-[22.483rem] mx-auto">
            <input
              type="email"
              id="email"
              className="p-3.5 pl-4 text-sm w-full md:max-w-[22.483rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-light focus:border-primary-light"
              placeholder="Email"
              required
            />
            <button
              disabled={isLoading}
              className="text-white absolute right-0 bottom-0 bg-primary-light2 hover:bg-primary-light2 focus:ring-4 focus:outline-none focus:ring-primary-light3 font-medium rounded-lg text-sm  px-5 py-[0.92rem]"
            >
              {isLoading === true ? '...' : 'Subscribe'}
            </button>
          </form>
      </main>
      <div className="hidden lg:block">
      {children}

      </div>
    </section>
      <div className='lg:hidden'>
      {children}

      </div>
      <SuccessModal colors={{
  bg: '#0B301A',
  buttonColor: '#62B84E',
  dividerColor: '#00793F',

      }} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default LandingHeroBlog;
