'use client';

import React, { useContext } from 'react';
import { StepContext } from './step-context';
import YourInfo from './your-info';
import SelectPlan from './select-plan';
import AddOns from './add-ons';
import FinishUp from './finish-up';
import ThankYou from './thank-you';

export default function Main() {
  const { activeStep, setActiveStep } = useContext(StepContext);
  const steps = [
    { no: 1, des: 'YOUR INFO' },
    { no: 2, des: 'SELECT PLAN' },
    { no: 3, des: 'ADD-ONS' },
    { no: 4, des: 'SUMMARY' },
  ];

  return (
    <div className="bg-white p-3 rounded-xl flex w-full gap-[60px] pr-[60px]">
      <div className="relative flex flex-col gap-3">
        <div className="w-[274px]">
          <img src="/images/bg-sidebar-desktop.svg" className="w-full h-full" />
        </div>
        <div className="absolute flex flex-col gap-4 py-[30px] px-[30px]">
          {steps.map((step) => (
            <div key={step.no} className="flex gap-4">
              <div
                className={`${
                  activeStep === step.no
                    ? 'bg-sky-blue border-none text-black'
                    : ' border-white text-white'
                } px-[15px] h-[40px] rounded-[50px] flex justify-center items-center border`}
              >
                {step.no}
              </div>
              <div className="flex flex-col ">
                <p className="text-[#8583fb] font-[family-name:var(--font-geist-reg)]">
                  STEP {step.no}
                </p>
                <p className="text-white font-[family-name:var(--font-geist-bold)]">
                  {step.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col overflow-auto justify-between items-end w-full">
        {activeStep === 1 ? (
          <YourInfo />
        ) : activeStep === 2 ? (
          <SelectPlan />
        ) : activeStep === 3 ? (
          <AddOns />
        ) : activeStep === 4 ? (
          <FinishUp />
        ) : (
          <ThankYou />
        )}
      </div>
    </div>
  );
}
