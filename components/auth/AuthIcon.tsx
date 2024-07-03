import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  Icon: IconType
  bgColor:string
}

const AuthIcon= ({ Icon, bgColor }:Props) => {
  return (
    <button className={`${bgColor} p-2 rounded-full hover:scale-105 transition-all duration-100`}>
      <Icon className="text-xl" />
    </button>
  );
};

export default AuthIcon;
