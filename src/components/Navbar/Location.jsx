import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../Css/style.css";

const Location = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex 2xl:flex xl:flex lg:flex md:flex sm:hidden items-start location_lg">
        <button
          type="button"
          onClick={openModal}
          //   className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <div className=" items-start flex flex-col p-0 m-0">
            <span className="ml-8 text-sm text-white">Hello</span>
            <p className="flex items-center  text-white text-sm md:text-sm">
              <span>
                {" "}
                <HiOutlineLocationMarker
                  style={{ height: "25px", width: "25px", color: "white" }}
                />
              </span>
              Select your address
            </p>
          </div>
        </button>
      </div>

      <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex items-start location_sm">
        <button
          type="button"
          onClick={openModal}
          //   className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <div className=" items-start flex flex-col p-0 m-0">
            <p className="flex items-center gap-1 p-0 m-0 text-white text-sm">
              <span>
                {" "}
                <HiOutlineLocationMarker
                  style={{ height: "25px", width: "25px", color: "white" }}
                />
              </span>
              Select a location to see product availability
            </p>
          </div>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b-2 p-4"
                    style={{ backgroundColor: "#F0F2F2" }}
                  >
                    Choose your location
                  </Dialog.Title>
                  <div className="mt-4 px-6 mb-3 flex flex-col  gap-2">
                    <p className="text-sm text-gray-500">
                      Select a delivery location to see product availability and
                      delivery options
                    </p>
                    <Link to="/signin">
                      <button className="bg-amber-300 cursor-pointer text-center rounded-lg px-5 py-1 ">
                        sign in to see your addresses
                      </button>
                    </Link>

                    <div className="flex items-center gap-2">
                      <div className="left_border w-16"></div>
                      or enter an Indian pincode
                      <div className="right_border w-16"></div>
                    </div>
                    <div className="flex gap-4 ">
                      <input
                        type="text"
                        className=" w-60 rounded-md shadow-md input_field bg-transparent focus:border-gray-400"
                      />
                      <button className="text-center rounded-lg p-1 px-5 shadow-md input_field bg-transparent cursor-pointer">
                        Apply
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="left_border w-40"></div>
                      or
                      <div className="right_border w-40"></div>
                    </div>
                    <div className=" border-gray-400 rounded-lg shadow-lg outline-none w-full">
                      <select
                        name="city"
                        id="city"
                        className="border border-gray-300 rounded-md outline-none px-2 p-1 w-full text-sm "
                        style={{ backgroundColor: "#F0F2F2" }}
                      >
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                      </select>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Location;
