import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, dep: boolean, callBack: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent & { path?: HTMLElement[] }) => {
      const targetToCheck = event.target;
      const clickInside = ref.current?.contains(targetToCheck as Node);

      if (!clickInside) {
        callBack();
      }
    };

    if (!dep) {
      return undefined;
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [dep, ref, callBack]);
};

export default useClickOutside;
