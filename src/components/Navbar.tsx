/* eslint-disable @next/next/no-img-element */
import { useAppDispatch } from 'src/redux/hooks';
import { selectMenu } from 'src/redux/slices/modal';

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md">
      <div className="max-w-6xl h-16 m-auto flex row justify-between items-center">
        <div className="flex gap-2">
          <button onClick={() => dispatch(selectMenu('none'))}>
            <img src="/icons/hamburger_menu.svg" alt="Ikona hamburger menu" />
          </button>
          <button onClick={() => dispatch(selectMenu('none'))}>
            <img src="/icons/search.svg" alt="Ikona vyhľadať menu" />
          </button>
        </div>
        <div className="flex ">
          <img src="/icons/sicko_mozne_1.svg" alt="Ikona hamburger menu" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => dispatch(selectMenu('cart'))}>
            <img src="/icons/cart.svg" alt="Ikona košík menu" />
          </button>
          <button onClick={() => dispatch(selectMenu('user'))}>
            <img src="/icons/user_account.svg" alt="Ikona hamburger menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
