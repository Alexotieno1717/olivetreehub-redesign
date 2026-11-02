import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { footer } from '@/mock';
import { FooterStyled, StyledButton, StyledLinkSecondary, StyledListLinkSecondary } from '../ui/ComponentsStyled';
import axios from 'axios';
import qs from 'qs';
import { Dialog, Transition } from '@headlessui/react';
import React, { useRef, useState } from 'react';

interface FooterProps {
  colors?: {
    bg: string;
    buttonColor: string;
    dividerColor: string;
  };
}

const defaultValues = {
  bg: '#0B301A',
  buttonColor: '#62B84E',
  dividerColor: '#00793F',
};

const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
};

const Footer = ({ colors = defaultValues }: FooterProps) => {
  const { data } = footer;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const emailInputRef = useRef<HTMLInputElement>(null);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Client-side validation
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      emailInputRef.current?.focus();
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      emailInputRef.current?.focus();
      return;
    }

    startLoading();
    setEmailError('');
    const payload = qs.stringify({ email: email.trim() });

    const config = {
      method: 'POST',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: payload,
    };
    axios(config)
      .then((response) => {
        if (response.data.status === 222) {
          openModal();
          stopLoading();
          setEmail('');
        } else {
          setEmailError('Something is not working, please try again later.');
          stopLoading();
        }
      })
      .catch((error) => {
        setEmailError('Something went wrong. Please try again later.');
        stopLoading();
      });
  };
  return (
    <>
      <FooterStyled $colors={colors} className={` relative`}>
        <section className="lg:max-w-4xl xl:max-w-[1031px]  mx-4 md:mx-8 lg:mx-16 xl:mx-auto py-4 md:py-8 lg:py-16">
          {/* form-input section */}
          <div className="flex flex-col md:flex-row md:justify-between mb-7">
            <div className="mb-8 md:mb-0">
              <h1 className="text-white text-xl font-semibold mb-2">Let us help you grow your business</h1>
              <p className="text-white text-base font-normal">We are always ready to listen to your needs.</p>
            </div>
            <div className="w-full md:w-auto">
              <form method="post" onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
                <div className="relative flex-1">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={emailInputRef}
                    type="email"
                    id="footer-email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isLoading}
                    aria-describedby={emailError ? 'footer-email-error' : undefined}
                    aria-invalid={emailError ? 'true' : 'false'}
                    className={`w-full rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 bg-white/10 border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#62B84E] focus:border-[#62B84E] disabled:opacity-60 disabled:cursor-not-allowed ${
                      emailError
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-400'
                        : 'border-white/20'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                <StyledButton
                  disabled={isLoading}
                  type="submit"
                  $colors={colors}
                  className="inline-flex items-center justify-center whitespace-nowrap btn-shadow text-white px-6 py-3 rounded-lg text-sm font-semibold mt-3 sm:mt-0 sm:ml-3 disabled:opacity-70 disabled:cursor-not-allowed transition-opacity duration-200 min-w-[100px]"
                >
                  {isLoading === true ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : null}
                  {isLoading === true ? 'Sending...' : 'Submit'}
                </StyledButton>
              </form>
              {emailError && (
                <p
                  id="footer-email-error"
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <hr className="h-[1px] bg-[#808080] border-transparent mb-4" />

          <div className="grid md:grid-cols-3 mb-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-white text-sm font-bold mb-3 md:mb-6 lg:mb-9 text-center md:text-left">Address</h1>
              <div className="md:max-w-[217px]">
                <p className=" font-normal text-sm text-white text-center md:text-left">{data.premise},</p>
                <p className=" font-normal text-sm text-white text-center md:text-left">{data.address},</p>
                <p className=" font-normal text-sm text-white text-center md:text-left">{data.location}</p>
              </div>
            </div>
            <div>
              <div className="grid justify-center">
                <h1 className="text-white text-sm font-bold mb-3 md:mb-6 lg:mb-9 text-center md:text-left">Contacts</h1>
                <p className=" font-normal text-sm text-white text-center md:text-left">{data.emailLabel}</p>
                <div className="mb-4 grid grid-flow-row auto-rows-max">
                  {data.emails.map((item) => (
                    <StyledLinkSecondary
                      // $colors={colors}
                      key={item}
                      href={`mailto:${item}`}
                      className="text-white font-normal text-sm text-center md:text-left"
                    >
                      {item}
                    </StyledLinkSecondary>
                  ))}
                </div>

                <p className="font-normal text-sm text-white text-center md:text-left">{data.phoneLabel}</p>
                <div className="mb-4 grid grid-flow-row auto-rows-max">
                  {data.phone.map((item) => (
                    <StyledLinkSecondary
                      // $colors={colors}
                      key={item}
                      href={`tel:${item}`}
                      target="_blank"
                      className="text-white font-normal text-sm text-center md:text-left"
                    >
                      {item}
                    </StyledLinkSecondary>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-center md:justify-end">
                <div>
                  <h1 className="text-white text-sm font-bold mb-3 md:mb-6 lg:mb-9 text-center md:text-left">Social</h1>
                  <div className="flex space-x-8">
                    {data.socialMedia.map((item) => (
                      <Link key={item.id} href={item.link} target="_blank" className=" scale-75">
                        {item.iconImg !== undefined ? (
                          <Image src={item.iconImg} width={40} height={40} alt={item.title} />
                        ) : (
                          ''
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-[1px] bg-[#808080] border-transparent mb-7" />

          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <p className=" font-normal text-sm text-[#6B747E]  text-center md:text-left">Olive Tree © {new Date().getFullYear()}</p>
            </div>
            <div>
              <div className="flex flex-wrap justify-center">
                {data.links.map((item, index) => (
                  <StyledListLinkSecondary
                    $colors={colors}
                    href={item.link}
                    key={item.id}
                    className="font-normal text-sm text-white pl-2"
                    target="_blank"
                  >
                    {item.title} {data.links.length - 1 !== index && '/'}
                  </StyledListLinkSecondary>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FooterStyled>
      <Transition appear show={isOpen}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<Transition.Child
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-2xl transition-all">
									<div className="flex flex-col items-center text-center">
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#62B84E]/10 mb-4">
											<CheckCircleIcon className="h-10 w-10 text-[#62B84E]" />
										</div>
										<Dialog.Title
											as="h3"
											className="text-xl leading-6 font-bold text-gray-900 mb-2"
										>
											Email Sent Successfully!
										</Dialog.Title>
										<p className="text-sm text-gray-500 mb-6">
											Thank you for getting in touch. We will get back to you shortly.
										</p>
										<StyledButton
											$colors={colors}
											className="inline-flex justify-center items-center font-semibold rounded-lg px-6 py-3 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#62B84E] focus-visible:ring-offset-2 w-full"
											onClick={closeModal}
										>
											Got it, thanks!
										</StyledButton>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
    </>
  );
};

export default Footer;
