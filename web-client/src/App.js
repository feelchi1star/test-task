import "./App.css";
import React from "react";
import FORM from "./components/Form";
import { dataFetcher } from "./utils/fetcher";
import SimpleModal from "./components/Modal";
import { useNavigate } from "react-router-dom";

function App() {
  const ModalRef = React.useRef();
  const navigate = useNavigate();
  return (
    <>
      <div className="overlay-bg h-screen w-full">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 px-2  md:px-5 gap-x-10 place-content-center justify-items-center h-screen">
            <div className="lg:col-span-12">
              <FORM
                onSubmitForm={(formData) => {
                  dataFetcher("/user", "POST", {
                    name: formData.name,
                    sectors: formData.sectors,
                    agreeToTerms: formData.agreeTerms,
                  })
                    .then((res) => {
                      ModalRef.current.openModal({
                        timing: 3000,
                        message: res.message,
                        err: false,
                      });

                      navigate(`/` + res.data._id);
                    })
                    .catch((e) =>
                      ModalRef.current.openModal({
                        timing: 3000,
                        message: e.message,
                        err: true,
                      })
                    );
                }}
              ></FORM>
            </div>
          </div>
        </div>
        <SimpleModal ref={ModalRef} title={"Message"} />
      </div>
    </>
  );
}

export default App;
