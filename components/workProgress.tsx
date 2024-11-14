/* eslint-disable prettier/prettier */
import React from 'react';
import { CircularProgress } from '@nextui-org/react';

import TextAnimation from './animaciones/animations';

export default function Progress() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <CircularProgress
        aria-label="Loading..."
        //className=''
        color="success"
        showValueLabel={true}
        size="lg"
        value={value}
      />
      <TextAnimation />
    </div>
  );
}
