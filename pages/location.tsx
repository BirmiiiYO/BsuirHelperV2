import dynamic from 'next/dynamic';
import { FC } from 'react';

const Location: FC = () => {
  const Map = dynamic(() => import('./../components/Map'), {
    ssr: false,
  });

  return (
    <>
      <Map />
    </>
  );
};

export default Location;
