import { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('portal');

export const Portal: FC = ({ children }) => {
  const rootElemRef = useRef(document.createElement('div'));
  useEffect(
    ()=>{
      const el = rootElemRef.current;
      el.className = 'modal';
      el.innerHTML = '';
      el.onmousedown = (): void  => el.remove();
      modalRoot?.appendChild(el);
      return (): void =>{ el.remove();};
    }, [],
  );
  return (
    ReactDOM.createPortal(
      children,
      rootElemRef.current,
    )
  );
};
