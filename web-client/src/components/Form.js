import React from "react";
import SimpleModal from "./Modal";
import CustomSelect from "./CustomSelect";

function FORM({
  onSubmitForm = (f) => f,
  data = {
    name: "",
    sectors: [],
    agreeTerms: false,
  },
  submitBtnText = "Save",
}) {
  const ModalRef = React.useRef();
  const [formData, setFormData] = React.useState(data);
  const handleChange = (name, value) => {
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (data) => {
    onSubmitForm(formData);
  };
  return (
    <div className="flex items-center justify-center">
      <SimpleModal ref={ModalRef} />
      <div className="bg-white/90 backdrop-blur w-full  p-9 rounded-2xl lg:h-[85vh] shadow border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex items-center gap-4 flex-col">
            <div className="">
              <h3 className="mb-3 text-3xl font-bold">
                {submitBtnText === "Save" ? "Add User" : "View User Details"}
              </h3>
              <p className="text-sm">
                {" "}
                Please enter your name and pick the Sectors you are currently
                involved in.{" "}
              </p>
            </div>
            <div className="flex items-start flex-col gap-y-1 justify-center w-full">
              <label htmlFor="name" className="">
                Name: <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                value={formData.name}
                type="text"
                name="name"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="border-b w-full border-black/30 placeholder:text-black/30  bg-transparent p-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <CustomSelect
              name={"sectors"}
              checkedOption={formData.sectors}
              onChange={(e) => {
                handleChange("sectors", e.sectors);
              }}
            />

            <div className="flex items-center justify-start w-full">
              {submitBtnText === "Save" && (
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    required
                    className=" border-gray-300 focus:ring-blue-500 text-blue-500"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.checked)
                    }
                  />
                  <span className="text-gray-700">Agree to Terms</span>
                </label>
              )}
            </div>

            <div className="flex w-full items-center justify-end">
              <button className="btn py-2 px-14 text-white rounded-3xl">
                {submitBtnText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FORM;
