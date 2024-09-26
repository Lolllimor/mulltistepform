'use client';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import React, { useContext, useEffect, useState } from 'react';
import { StepContext } from './step-context';

export default function FinishUp() {
  const { activeStep, setActiveStep } = useContext(StepContext);
  const plan = sessionStorage.getItem('plan');
  const selectedAddOns = sessionStorage.getItem('selectedAddOns');
  const planData = plan && JSON.parse(plan);
  const addOnsData = selectedAddOns && JSON.parse(selectedAddOns);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (planData && addOnsData) {
      const planPrice = parseInt(
        planData.plan.amount.replace(/[^0-9]/g, ''),
        10
      );
      const addOnsPrice = addOnsData.reduce(
        (acc: number, addOn: { price: string }) =>
          acc + parseInt(addOn.price.replace(/[^0-9]/g, ''), 10),
        0
      );
      setTotalPrice(planPrice + addOnsPrice);
    }
  }, [planData, addOnsData]);
  return (
    <div className="flex flex-col gap-6 flex-1 w-full  pt-[30px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-navy-blue font-[family-name:var(--font-geist-bold)]">
          Finishing up
        </h1>
        <p className="text-gray font-[family-name:var(--font-geist-reg)]">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col h-full justify-between">
        <Card className="border-none ">
          <div className="flex flex-col bg-[#f8f9fe] border-none px-[18px] py-[15px] rounded-[10px]">
            <div className="flex justify-between w-full border-b border-[#e7e8ed] pb-[20px] items-center">
              <CardTitle className="text-[16px] text-navy-blue flex flex-col ">
                {plan && JSON.parse(plan).plan.name} (
                {plan && JSON.parse(plan).type})
                <a
                  href="#"
                  className="text-gray font-[family-name:var(--font-geist-reg)]"
                >
                  Change
                </a>
              </CardTitle>
              <p className="text-navy-blue font-[family-name:var(--font-geist-bold)]">
                {plan && JSON.parse(plan).plan.amount}
              </p>
            </div>
            <CardContent className="flex flex-col p-0 gap-2 mt-[15px] ">
              {selectedAddOns &&
                JSON.parse(selectedAddOns).map(
                  (item: { name: string; price: string }) => (
                    <div
                      className="flex justify-between w-full items-center"
                      key={item.name}
                    >
                      <div className="text-[16px] text-gray flex flex-col">
                        {item.name}{' '}
                      </div>
                      <p className="text-navy-blue">{item.price}</p>{' '}
                    </div>
                  )
                )}
            </CardContent>
          </div>

          <CardFooter>
            <div className="flex justify-between w-full py-[20px] items-center">
              <div className="text-[16px] text-gray flex flex-col">
                Total ({planData?.type === 'Monthly' ? 'per month' : 'per year'}
                )
              </div>
              <p className="text-[#3f32c3] text-[20px] font-[family-name:var(--font-geist-bold)]">
                +${totalPrice}/{planData?.type === 'Monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          </CardFooter>
        </Card>
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
            className="mb-[20px] hover:bg-[#938cfe] w-fit bg-[#03295a] text-white font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px]"
            onClick={() => {
              setActiveStep(activeStep + 1);
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
