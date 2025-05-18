import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    // Data gather/submit code here
  };

  return (
    <div className="px-4 sm:px-6 lg:px-24 py-10 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Add New Coffee</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using "Content here".
        </p>
      </div>

      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { label: "Name", name: "name", placeholder: "Enter coffee name" },
            { label: "Chef", name: "chef", placeholder: "Enter coffee chef" },
            { label: "Supplier", name: "supplier", placeholder: "Enter coffee supplier" },
            { label: "Taste", name: "taste", placeholder: "Enter coffee taste" },
            { label: "Category", name: "category", placeholder: "Enter coffee category" },
            { label: "Details", name: "details", placeholder: "Enter coffee details" },
          ].map(({ label, name, placeholder }) => (
            <fieldset
              key={name}
              className="bg-base-200 border border-base-300 rounded-box p-4 space-y-2"
            >
              <label className="font-semibold text-base text-[#1B1A1ACC]">
                {label}
              </label>
              <input
                type="text"
                name={name}
                className="input w-full"
                placeholder={placeholder}
              />
            </fieldset>
          ))}
        </div>

        <fieldset className="my-6 bg-base-200 border border-base-300 rounded-box p-4 space-y-2">
          <label className="font-semibold text-base text-[#1B1A1ACC]">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>

        <input
          type="submit"
          className="btn w-full bg-[#D2B48C] text-white hover:bg-[#c2996c]"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
