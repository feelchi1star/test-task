import React, { useState } from "react";

const SimpleModal = React.forwardRef(({ title = "Error" }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [times, setTimes] = React.useState(3000);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  React.useImperativeHandle(
    ref,
    () => {
      return {
        openModal: ({ timing, err = false, message = "" }) => {
          setIsModalOpen(true);
          if (timing) {
            setTimes(timing);
          }
          setMsg(message);
          setErr(err);
        },
        closeModal,
      };
    },
    []
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
      setMsg("");
      setErr("");
    }, times);
    return () => clearTimeout(timer);
  }, [times, isModalOpen]);

  return (
    <div className="absolute flex items-center justify-center h-screen">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed transition-all delay-100 ease-linear inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50">
          <div className="modal-content bg-white w-4/5 lg:w-2/5 mx-auto mt-10 p-4 rounded shadow-lg">
            {/* Modal Header */}
            <div className="modal-header">
              <span
                onClick={closeModal}
                className="cursor-pointer text-gray-700 hover:text-gray-900 text-2xl"
              >
                &times;
              </span>
            </div>

            {/* Modal Body */}
            <div className="modal-body text-center">
              <p className="text-lg font-semibold mb-4">{title} </p>
              <p className={err === true ? "text-red-500" : "text-gray-700"}>
                {msg}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default SimpleModal;
