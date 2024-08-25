interface IProps {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'number' | 'email';
  min?: number;
}

export const TextInput = ({
  name,
  label,
  placeholder,
  type = 'text',
  min,
}: IProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-semibold' htmlFor={name}>
        {label}
      </label>
      <input
        className='rounded-md border border-neutral-300 bg-transparent px-3 py-1 outline-none focus:ring-1 focus:ring-emerald-600'
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        min={min}
        required
      />
    </div>
  );
};
