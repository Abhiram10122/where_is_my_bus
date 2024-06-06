import Image from "next/image";
import React from "react";

const BusComponent = ({
  route,
  active,
}: {
  route: Number;
  active: Boolean;
}) => {
  return (
    <div
      className={`flex gap-2 bg-white p-3 rounded-lg w-full shadow-lg ${
        active && "border-2 border-violetBlue"
      }`}
    >
      <Image
        src={"/bus2.png"}
        height={50}
        width={50}
        alt="Bus"
        className="object-contain"
      />
      <div>
        <h3 className="text-xl font-manrope font-bold">
          Route No {`${route}`}
        </h3>
        <p className="text-xs text-gray-400 font-manrope">
          JNTU, Nizampet, Pragathi Nagar
        </p>
      </div>
    </div>
  );
};

export default BusComponent;
