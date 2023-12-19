import React from "react";
import { useLoaderData } from "react-router-dom";
import SimpleModal from "./components/Modal";
import dataFetcher from "./utils/axios";
import FORM from "./components/Form";

const UserDetails = () => {
  const { data } = useLoaderData();
  const ModalRef = React.useRef();

  return (
    <>
      <div className="overlay-bg h-screen w-full">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 px-2  md:px-5 gap-x-10 place-content-center justify-items-center h-screen">
            <div className="lg:col-span-12">
              <FORM
                data={{
                  name: data.name,
                  sectors: data.sectors.map((e) => e.value),
                }}
                submitBtnText="Update"
                onSubmitForm={(formData) => {
                  dataFetcher("/user/" + data._id, "PATCH", {
                    name: formData.name,
                    sectors: formData.sectors,
                    agreeToTerms: formData.agreeTerms,
                  })
                    .then((res) =>
                      ModalRef.current.openModal({
                        timing: 3000,
                        message: res.message,
                        err: false,
                      })
                    )
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
        <SimpleModal ref={ModalRef} title="Notification" />
      </div>
    </>
  );
};

export default UserDetails;
