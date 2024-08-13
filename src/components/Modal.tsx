import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
 
import { addContact } from "../redux/features/contact/contactSlice";
import { useDispatch } from "react-redux";
type modalProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Modal: React.FC<modalProps> = ({ isOpen, setIsOpen }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const dispatch = useDispatch();
 

 
// Creating the new contact
const handleAddContact = () => {
    if (!firstName || !lastName || !status) {
      // Optionally handle form validation
      alert("Please fill in all fields");
      return;
    }

    // Create a new contact object
    const newContact = {
      id: new Date().getTime().toString(), 
      firstName,
      lastName,
      status,
    };

    // Dispatch the action to add the contact
    dispatch(addContact(newContact));

    // Reset form fields
    setFirstName("");
    setLastName("");
    setStatus("");

    // Close the modal
    setIsOpen(false);
  };
  return (
    <div
      className={`absolute top-36  md:left-1/4 w-full max-w-96 h-96  transition-all duration-500  backdrop-blur-lg shadow-lg ${
        isOpen ? "opacity-1 translate-y-0" : "opacity-0 translate-y-11 z-[-20]"
      } `}
    >
      <div className="w-full p-3  flex justify-between items-center ">
        <h1 className="text-xl text-white font-bold ">Add Contact</h1>
        <IoCloseCircleOutline
          onClick={() => setIsOpen(false)}
          size={20}
          color="#fff"
          cursor="pointer"
        />
      </div>
      <hr />

      <div className="w-full h-full p-2 mt-3 flex flex-col  space-y-4">
        <div className="flex flex-col space-y-2 justify-start">
          <label htmlFor="" className="text-white text-sm">
            First Name
          </label>
          <input
            type="text"
            placeholder="ex: sam"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full text-white bg-transparent text-xs p-2 border border-white shadow-xl outline-none placeholder:text-white"
          />
        </div>

        <div className="flex flex-col space-y-2 justify-start">
          <label htmlFor="" className="text-white text-sm">
            Last Name
          </label>
          <input
            type="text"
            placeholder="ex: john"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full text-white bg-transparent text-xs p-2 border border-white shadow-xl outline-none placeholder:text-white"
          />
        </div>

        <div className="flex flex-col space-y-2 justify-center items-center">
          <label htmlFor="" className="text-white text-sm">
            Status
          </label>

          <div className="flex space-x-4 justify-center items-center">
            <div className="text-white">
              <input
                type="radio"
                id="active"
                name="status"
             
                onChange={(e) => setStatus(e.target.value)}
                className=""
              />
              <label htmlFor="active">Active</label>
            </div>

            <div className="text-white">
              <input
                type="radio"
                id="inactive"
                name="status"
                className=""
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="inactive">Inactive</label>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleAddContact}
            className="p-2 text-xs text-white rounded-md border bottom-1"
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
