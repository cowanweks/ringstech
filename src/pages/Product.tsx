import { useState } from 'react';

 export default function ProductForm(){

  const [form, setForm] = useState({
    rom: '',
    type: '',
    description: '',
    productID: '',
    productName: '',
    unitPrice: '',
    productCategory: '',
    availableColors: '',
    isAvailable: false,
    inStock: '',
    productImage: '',
    brand: '',
    model: '',
    battery: '',
    cameras: '',
    processor: '',
    display: '',
    ram: ''
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Here you can handle form submission, e.g., send data to an API
  };

  return (
    <form method='post' onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mb-16 mt-16">
      {Object.keys(form).map((key) => (
        <div key={key} className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {key.toUpperCase()}:
            {key === 'isAvailable' ? (
              <input
                type="checkbox"
                name={key}
                checked={form[key]}
                onChange={handleChange}
                className="ml-2"
              />
            ) : (
              <input
                type={key === 'unitPrice' || key === 'inStock' ? 'number' : 'text'}
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};
