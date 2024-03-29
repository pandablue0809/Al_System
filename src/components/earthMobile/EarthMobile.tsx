import React from "react";

export type EarthMobileProps = {
  className?: string;
}

const EarthMobile: React.FC<EarthMobileProps> = ({ className }) => {
  return (
    <div className={`bg-introearn-earth rounded-full w-[250px] h-[250px] bg-earth-mobile bg-[length:150%_150%] ${className}`} />
  );
};

export default EarthMobile;