import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import { StepContext } from './step-context';
import { Checkbox } from '@/components/ui/checkbox';

export default function AddOns() {
  const plan = sessionStorage.getItem('plan');

  const [addOns, setAddOns] = useState([
    {
      name: 'Online services',
      para: 'Access to multiplayer games',
      price: '+$1/mo',
      checked: false,
    },
    {
      name: 'Larger storage',
      para: 'Extra 1TB of cloud save',
      price: '+$2/mo',
      checked: false,
    },
    {
      name: 'Customizable Profile',
      para: 'Custom theme on your profile',
      price: '+$2/mo',
      checked: false,
    },
  ]);
  const [addOnsYrs, setAddOnsYrs] = useState([
    {
      name: 'Online services',
      para: 'Access to multiplayer games',
      price: '+$10/yr',
      checked: false,
    },
    {
      name: 'Larger storage',
      para: 'Extra 1TB of cloud save',
      price: '+$20/yr',
      checked: false,
    },
    {
      name: 'Customizable Profile',
      para: 'Custom theme on your profile',
      price: '+$20/yr',
      checked: false,
    },
  ]);

  const { activeStep, setActiveStep } = useContext(StepContext);
  const selectedAddOns =
    plan && JSON.parse(plan).type === 'Monthly'
      ? addOns.filter((item) => item.checked)
      : addOnsYrs.filter((item) => item.checked);
  

  return (
    <div className="flex flex-col gap-6 flex-1 w-full  pt-[30px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-navy-blue font-[family-name:var(--font-geist-bold)]">
          Pick add-ons
        </h1>
        <p className="text-gray font-[family-name:var(--font-geist-reg)]">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex max-[850px]:flex-wrap  mt-[10px] w-full gap-5 flex-col max-[850px]:gap-[20px] max-[850px]:justify-start h-full">
          {plan && JSON.parse(plan).type === 'Monthly'
            ? addOns.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setAddOns((prevAddOns) => {
                      return prevAddOns.map((addon, i) =>
                        i === index
                          ? { ...addon, checked: !addon.checked }
                          : addon
                      );
                    });
                  }}
                  className={`${
                    item.checked && '!border-[#554e95] bg-[#f8f9fe]'
                  } w-full border-[#dcdbe0] hover:border-[#554e95] border px-[15px] py-[18px] flex gap-5 items-center rounded-[10px]`}
                >
                  <Checkbox id={`addon-${index}`} checked={item.checked} />
                  <label
                    htmlFor={`addon-${index}`} // Changed to dynamically set the correct id
                    className="text-sm font-medium leading-none flex items-center w-full justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d2343] font-[family-name:var(--font-geist-med)]">
                        {item.name}
                      </p>
                      <p className="text-gray">{item.para}</p>
                    </div>
                    <p className="text-[#625daf]">{item.price}</p>
                  </label>
                </div>
              ))
            : addOnsYrs.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setAddOnsYrs((prevAddOns) => {
                      return prevAddOns.map((addon, i) =>
                        i === index
                          ? { ...addon, checked: !addon.checked }
                          : addon
                      );
                    });
                  }}
                  className={`${
                    item.checked && '!border-[#554e95] bg-[#f8f9fe]'
                  } w-full border-[#dcdbe0] hover:border-[#554e95] border px-[15px] py-[18px] flex gap-5 items-center rounded-[10px]`}
                >
                  <Checkbox id={`addon-${index}`} checked={item.checked} />
                  <label
                    htmlFor={`addon-${index}`}
                    className="text-sm font-medium leading-none flex items-center w-full justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d2343] font-[family-name:var(--font-geist-med)]">
                        {item.name}
                      </p>
                      <p className="text-gray">{item.para}</p>
                    </div>
                    <p className="text-[#625daf]">{item.price}</p>
                  </label>
                </div>
              ))}
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
            type="submit"
            className="mb-[20px] w-fit bg-transparent text-[#aaabaf] hover:text-[#174a8b] hover:bg-transparent font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px]"
          >
            Go Back
          </Button>
          <Button
            type="submit"
            className="mb-[20px] w-fit hover:bg-[#938cfe]  bg-[#03295a] text-white font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px]"
            onClick={() => {
              setActiveStep(activeStep + 1);
              sessionStorage.setItem(
                'selectedAddOns',
                JSON.stringify(selectedAddOns)
              );
            }}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}
