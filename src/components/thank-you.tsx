import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';
import { StepContext } from './step-context';

export default function ThankYou() {
  const { activeStep, setActiveStep } = useContext(StepContext);
  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-1 w-full h-full ">
      <div className="flex flex-col h-full justify-center items-center gap-4  w-full">
        <img src="/images/icon-thank-you.svg" width={60} alt="arcade" />
        <div className="flex flex-col gap-[12px] items-center justify-center">
          <h1 className="text-[24px] text-navy-blue font-[family-name:var(--font-geist-bold)]">
            Thank you!
          </h1>
          <p className="text-[14px] w-[80%] text-gray text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>

      <div className="flex items-end w-full justify-end">
        <Button
          type="submit"
          className="mb-[20px] hover:bg-[#938cfe] w-fit bg-[#03295a] text-white  font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px] "
          onClick={() => {
            setActiveStep(1);
          sessionStorage.clear();
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
}
