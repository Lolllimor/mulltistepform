"use client"
import {
    createContext, useState, 
  Context, ReactNode } from 'react';

interface StepContextType {
  activeStep: number ;
  setActiveStep: React.Dispatch<React.SetStateAction<number >>;
}

export const StepContext = createContext<StepContextType | null>(null) as Context<StepContextType>;

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [activeStep, setActiveStep] = useState<number >(1); 

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </StepContext.Provider>
  );
};
