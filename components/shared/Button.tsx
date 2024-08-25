import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends PropsWithChildren {
  className?: string;
}

export const Button = ({ children, className }: IProps) => {
  return (
    <button
      className={twMerge(
        'rounded-md bg-emerald-600 px-5 py-2 text-white',
        className,
      )}
    >
      {children}
    </button>
  );
};
