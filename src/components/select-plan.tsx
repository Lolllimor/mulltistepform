'use client';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import React, { useContext, useState } from 'react';
import { StepContext } from './step-context';

export default function SelectPlan() {
  const [isToggled, setIsToggled] = useState({
    toggle: false,
    type: 'Monthly',
    plan: {
      name: 'Arcade',
      amount: '$9/mo',
    },
  });

  const { activeStep, setActiveStep } = useContext(StepContext);

  return (
    <div className="flex flex-col gap-6 flex-1 w-full  pt-[30px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-navy-blue font-[family-name:var(--font-geist-bold)]">
          Select your plan
        </h1>
        <p className="text-gray font-[family-name:var(--font-geist-reg)]">
          You have the option of Monthly or Yearly billing.
        </p>
      </div>
      {isToggled.type === 'Monthly' ? (
        <div className="flex max-[850px]:flex-wrap justify-between mt-[20px] w-full gap-5  max-[850px]:gap-[20px] max-[850px]:justify-start">
          <div
            onClick={() =>
              setIsToggled((prevState) => ({
                ...prevState,
                plan: { name: 'Arcade', amount: '$9/mo' },
              }))
            }
            className={`${
              isToggled.plan.name === 'Arcade' &&
              '!border-[#535095] bg-[#f8f9fe]'
            } border hover:border-[#535095] border-gray w-full flex rounded-[10px] cursor-pointer flex-col p-[12px] h-[160px] justify-between max-w-[152px]`}
          >
            <img src="/images/icon-arcade.svg" width={40} alt="Arcade" />
            <div>
              <p className="text-[16px] pt-[50px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                Arcade
              </p>
              <p className="text-[14px] text-gray ">$9/mo</p>
            </div>
          </div>
          <div
            onClick={() =>
              setIsToggled((prevState) => ({
                ...prevState,

                plan: { name: 'Advanced', amount: '$12/mo' },
              }))
            }
            className={`${
              isToggled.plan.name === 'Advanced' &&
              '!border-[#535095] bg-[#f8f9fe]'
            } hover:border-[#535095] border border-gray w-full flex rounded-[10px] cursor-pointer flex-col p-[12px] h-[160px] justify-between max-w-[152px]`}
          >
            <img src="/images/icon-advanced.svg" width={40} alt="Advanced" />
            <div>
              <p className="text-[16px] pt-[50px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                Advanced
              </p>
              <p className="text-[14px] text-gray ">$12/mo</p>
            </div>
          </div>
          <div
            onClick={() =>
              setIsToggled((prevState) => ({
                ...prevState,
                plan: { name: 'Pro', amount: '$15/mo' },
              }))
            }
            className={`${
              isToggled.plan.name === 'Pro' && '!border-[#535095] bg-[#f8f9fe]'
            } hover:border-[#535095] border border-gray w-full flex rounded-[10px] cursor-pointer flex-col p-[12px] h-[160px] justify-between max-w-[152px]`}
          >
            <img src="/images/icon-pro.svg" width={40} alt="pro" />
            <div>
              <p className="text-[16px] pt-[50px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                Pro
              </p>
              <p className="text-[14px] text-gray ">$15/mo</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex max-[850px]:flex-wrap justify-between mt-[20px] w-full gap-5  max-[850px]:gap-[20px] max-[850px]:justify-start">
          <div
            onClick={() =>
              setIsToggled((prevState) => ({
                ...prevState,
                plan: { name: 'Arcade', amount: '$90/yr' },
              }))
            }
            className={`${
              isToggled.plan.name === 'Arcade' &&
              '!border-[#535095] bg-[#f8f9fe]'
            } border hover:border-[#535095] border-gray w-full flex rounded-[10px] cursor-pointer flex-col p-[12px] h-fit justify-between max-w-[152px]`}
          >
            <img src="/images/icon-arcade.svg" width={40} alt="Arcade" />
            <div>
              <p className="text-[16px] pt-[50px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                Arcade
              </p>
              <p className="text-[14px] text-gray ">$90/yr</p>
              <p className="text-[12px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                2 months free
              </p>
            </div>
          </div>
          <div
            onClick={() =>
              setIsToggled((prevState) => ({
                ...prevState,

                plan: { name: 'Advanced', amount: '$120/yr' },
              }))
            }
            className={`${
              isToggled.plan.name === 'Advanced' &&
              '!border-[#535095] bg-[#f8f9fe]'
            } hover:border-[#535095] border border-gray w-full flex rounded-[10px] cursor-pointer flex-col p-[12px] h-fit justify-between max-w-[152px]`}
          >
            <img src="/images/icon-advanced.svg" width={40} alt="advanced" />
            <div>
              <p className="text-[16px] pt-[50px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                Advanced
              </p>
              <p className="text-[14px] text-gray ">$120/yr</p>
              <p className="text-[12px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                2 months free
              </p>
            </div>
          </div>
          <div
            onClick={() =>
              setIsToggled((prevState) => ({
                ...prevState,
                plan: { name: 'Pro', amount: '$150/yr' },
              }))
            }
            className={`${
              isToggled.plan.name === 'pro' && '!border-[#535095] bg-[#f8f9fe]'
            } hover:border-[#535095] h-fit border border-gray w-full flex rounded-[10px] cursor-pointer flex-col p-[12px] justify-between max-w-[152px]`}
          >
            <img src="/images/icon-pro.svg" width={40} alt="pro" />
            <div>
              <p className="text-[16px] pt-[50px] text-navy-blue font-[family-name:var(--font-geist-bold)]">
                Pro
              </p>
              <p className="text-[14px] text-gray ">$150/yr</p>
              <p className="text-[12px] text-navy-blue font-[family-name:var(--font-geist-med)]">
                2 months free
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center w-full bg-[#f8f9fe] py-[10px] justify-center rounded-[10px] gap-5">
          <label
            htmlFor="airplane-mode"
            className={`${
              !isToggled ? 'text-navy-blue' : 'text-gray'
            } text-[14px]`}
          >
            Monthly
          </label>
          <Switch
            checked={isToggled.toggle}
            onCheckedChange={() => {
              setIsToggled((prevState) => ({
                ...prevState,
                toggle: !prevState.toggle,
                type: prevState.toggle ? 'Monthly' : 'Yearly',
                plan: {
                  name: 'Arcade',
                  amount: isToggled.type === 'Monthly' ? '$9/mo' : '$90/yr',
                },
              }));
            }}
          />
          <label
            className={`${
              isToggled ? 'text-navy-blue' : 'text-gray'
            } text-[14px]`}
            htmlFor="airplane-mode"
          >
            Yearly
          </label>
        </div>
        <div className="flex justify-between">
          <Button
            type="submit"
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
            className="mb-[20px] w-fit bg-transparent text-[#aaabaf] hover:text-[#174a8b] hover:bg-transparent font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px]"
          >
            Go Back
          </Button>
          <Button
            type="submit"
            className="mb-[20px] w-fit hover:bg-[#938cfe]  bg-[#03295a] text-white font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px]"
            onClick={() => {
              setActiveStep(activeStep + 1);
              sessionStorage.setItem('plan', JSON.stringify(isToggled));
            }}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}
