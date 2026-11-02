import { Dialog, Transition } from '@headlessui/react';
import { StyledButton } from '../ui/ComponentsStyled';

interface SuccessModalProps {
  isOpen: boolean;
  colors?: {
    bg: string;
    buttonColor: string;
    dividerColor: string;
  };
  closeModal: () => void;
}
const SuccessModal = ({ isOpen, colors, closeModal }: SuccessModalProps) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg leading-6 font-bold">
                  Email Sent Successfully!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm font-regular">Thank you for getting in touch. We will get back to you</p>
                </div>

                <div className="mt-4">
                  <StyledButton
                    $colors={colors}
                    className="inline-flex justify-center font-medium rounded border border-transparent bg-pw-orange-100 px-4 py-2 text-sm  text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
  );
};

export default SuccessModal
