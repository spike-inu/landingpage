import { useMediaQuery } from 'components';

const useDetectDevice = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  const isDesktop = useMediaQuery('(min-width:1136px)');
  return { isMobile, isDesktop };
};

export default useDetectDevice;
