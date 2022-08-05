/* eslint-disable @next/next/no-img-element */

import { useAppSelector } from 'src/redux/hooks';
import { selectModal } from 'src/redux/slices/modal';

const Modal = () => {
  const modal = useAppSelector(selectModal);
  const renderComponent = () => {
    if (modal.selected === 'cart') {
      return <p>Hey</p>;
    }
  };
  return (
    <>
      {modal.selected !== 'none' ? (
        <div className="fixed top-16 left-0 w-full h-full flex justify-center items-center">
          {renderComponent()}
        </div>
      ) : null}
    </>
  );
};

export default Modal;
