import React, { useState } from 'react';

export type SelectOption = {
  value: string;
  label: string;
};

export type RoleSelectProps = {
  onSelectRole: (value: string) => void;
};

const RoleSelect: React.FC<RoleSelectProps> = ({ onSelectRole }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const options = [
    { value: 'User', label: 'User' },
    { value: 'Organization', label: 'Organization' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Investors', label: 'Investors' },
    { value: 'Vendors', label: 'Vendors' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelectRole(value);
  };

  return (
    <div className='m-2 mb-3'>
      <div className='relative'>
        <select
          className={`px-4 py-2 border w-full border-gray-300 rounded-md focus:outline-none`}
          value={selectedValue}
          onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RoleSelect;
