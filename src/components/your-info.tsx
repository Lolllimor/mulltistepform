'use client';

import { Input } from '@/components/ui/input';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@/components/ui/button';
import { StepContext } from './step-context';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s0-9]*$/,
        'Invalid phone number format'
      ),
  })
  .required();

export default function YourInfo() {
  const { activeStep, setActiveStep } = useContext(StepContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
  });
  const onSubmit = (data: any) => {
    setActiveStep(activeStep + 1);
    sessionStorage.setItem('biodata', JSON.stringify(data));
  };

  useEffect(() => {
    const biodata = sessionStorage.getItem('biodata');
    if (biodata) {
      const parsedData = JSON.parse(biodata);
      reset(parsedData);
    }
  }, [reset]);

  return (
    <div className="flex flex-col gap-5 flex-1 w-full pt-[30px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-navy-blue font-[family-name:var(--font-geist-bold)]">
          Personal Info
        </h1>
        <p className="text-gray font-[family-name:var(--font-geist-reg)]">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form
        className="flex flex-col h-full justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full items-start   gap-1">
            <div className="flex w-full justify-between">
              <label
                className="text-[14px] font-[family-name:var(--font-geist-med)] text-navy-blue "
                htmlFor="picture"
              >
                Name
              </label>{' '}
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <Input
              type="text"
              {...register('name')}
              required
              className="h-10 rounded-md  pl-2   "
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col w-full items-start   gap-1">
            <div className="flex w-full justify-between">
              <label
                className="text-[14px] font-[family-name:var(--font-geist-med)] text-navy-blue "
                htmlFor="picture"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <Input
              type="email"
              {...register('email')}
              required
              className="h-10 rounded-md border-[#dbdade] pl-2"
              placeholder="Enter email"
            />
          </div>
          <div className="flex flex-col w-full items-start   gap-1">
            <div className="flex w-full justify-between">
              <label
                className="text-[14px] font-[family-name:var(--font-geist-med)] text-navy-blue "
                htmlFor="picture"
              >
                Phone Number
              </label>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <Input
              {...register('phoneNumber')}
              type="tel"
              required
              className="h-10 rounded-md border-[#dbdade] pl-2"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            className="mb-[20px] w-fit hover:bg-[#938cfe]  bg-[#03295a] text-white font-[family-name:var(--font-geist-med)] py-[4px] px-[20px] text-[14px]"
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
