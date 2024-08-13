import React, { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateContact } from "../redux/features/contact/contactSlice";

type ModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  idx: string | undefined;
};

const UpdateModal: React.FC<ModalProps> = ({ isOpen, setIsOpen, idx }) => {
  const dispatch = useDispatch();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((item) => item.id === idx)
  );

  // Initialize form state with contact data if available
  const [firstName, setFirstName] = useState<string>(contact?.firstName || "");
  const [lastName, setLastName] = useState<string>(contact?.lastName || "");
  const [status, setStatus] = useState<string>(contact?.status || "");

  // Update form state when contact data changes
  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    }
  }, [contact]);

  const handleUpdateContact = () => {
    if (!firstName || !lastName || !status) {
      alert("Please fill in all fields");
      return;
    }

    // Create the updated contact object
    const updatedContact = {
      id: idx || "", // Use existing id
      firstName,
      lastName,
      status,
    };

    // Dispatch the action to update the contact
    if (idx) {
      dispatch(updateContact(updatedContact));
    }

    // Reset form fields and close the modal
    setFirstName("");
    setLastName("");
    setStatus("");
    setIsOpen(false);
  };

  return (
    <div
      className={`absolute top-36  md:left-[40%] w-full max-w-96 h-96  transition-all duration-500  backdrop-blur-lg shadow-lg ${
        isOpen ? "opacity-1 translate-y-0" : "opacity-0 translate-y-11 z-[-20]"
      }`}
    >
      <div className="w-full p-3 flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">Update Contact</h1>
        <IoCloseCircleOutline
          onClick={() => setIsOpen(false)}
          size={20}
          color="#fff"
          cursor="pointer"
        />
      </div>
      <hr />

      <div className="w-full h-full p-2 mt-3 flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 justify-start">
          <label htmlFor="firstName" className="text-white text-sm">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="ex: sam"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full text-white bg-transparent text-xs p-2 border border-white shadow-xl outline-none placeholder:text-white"
          />
        </div>

        <div className="flex flex-col space-y-2 justify-start">
          <label htmlFor="lastName" className="text-white text-sm">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="ex: john"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full text-white bg-transparent text-xs p-2 border border-white shadow-xl outline-none placeholder:text-white"
          />
        </div>

        <div className="flex flex-col space-y-2 justify-center items-center">
          <label htmlFor="status" className="text-white text-sm">
            Status
          </label>

          <div className="flex space-x-4 justify-center items-center">
            <div className="text-white">
              <input
                id="active"
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={(e) => setStatus(e.target.value)}
                className=""
              />
              <label htmlFor="active">Active</label>
            </div>

            <div className="text-white">
              <input
                id="inactive"
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e) => setStatus(e.target.value)}
                className=""
              />
              <label htmlFor="inactive">Inactive</label>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleUpdateContact}
            className="p-2 text-xs text-white rounded-md border bottom-1"
          >
            Update Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
