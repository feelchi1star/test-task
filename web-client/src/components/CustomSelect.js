import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CustomSelect = ({ onChange = (f) => f, checkedOption = [], name }) => {
  const { sectors: data } = useLoaderData();
  const [allSectors] = useState(data);
  const [selectedOptions, setSelectedOptions] = useState([...checkedOption]);

  return (
    <div className="flex flex-col w-full items-start justify-center gap-1">
      <label htmlFor="select">
        {" "}
        Sectors: <sup className="text-red-500">*</sup>
      </label>
      <div className=" w-full">
        <select
          // required
          multiple
          name={name}
          className="w-full p-2 border-b   appearance-none selection:bg-red-500 bg-transparent border-black/30 max-h-32 focus:outline-none focus:border-black/50"
          value={selectedOptions}
          onChange={(e) => {
            setSelectedOptions(
              Array.from(e.target.selectedOptions, (option) => option.value)
            );
            onChange({
              sectors: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            });
          }}
        >
          {allSectors.map((group, idx) => {
            return (
              <React.Fragment key={idx}>
                <option
                  disabled={group.children.length > 0}
                  key={group.value}
                  className="font-semibold  text-sm lg:text-base disabled:text-black disabled:opacity-100"
                  value={group.value}
                >
                  {group.label}
                </option>
                {group.children.length > 0 &&
                  group.children.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <option
                        disabled={item.children.length > 0}
                        className={`ms-3 ${
                          item.children.length > 0
                            ? "font-medium focus:outline-none"
                            : ""
                        } text-sm lg:text-base disabled:text-black disabled:opacity-100`}
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                      {item.children.length > 0 &&
                        item.children.map((child, idx) => (
                          <React.Fragment key={idx}>
                            <option
                              disabled={child.children.length > 0}
                              className={`ms-6 text-sm lg:text-base disabled:text-black disabled:opacity-100 ${
                                child.children.length > 0 ? "font-medium" : ""
                              }`}
                              key={child.value}
                              value={child.value}
                            >
                              {child.label}
                            </option>

                            {child.children.length > 0 &&
                              child.children.map((nextChild) => (
                                <option
                                  className=" lg:ms-9 text-sm lg:text-base"
                                  key={nextChild.value}
                                  value={nextChild.value}
                                >
                                  {nextChild.label}
                                </option>
                              ))}
                          </React.Fragment>
                        ))}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
