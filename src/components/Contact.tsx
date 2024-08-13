import React, { useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import UpdateModal from "./UpdateModal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/features/contact/contactSlice";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



//Contact page and list out all the contact

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen]= useState<boolean>(false)
  const [currentIdx, setCurrentIdx]=useState<string>()
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch= useDispatch()

  const handleUpdate=(id:string)=>{
    setCurrentIdx(id)
    setIsUpdateModalOpen(true)
  }

  return (
    <div className="w-full h-full relative">
      <div className="w-full p-5 mt-10 flex justify-between items-center ">
        <h1 className=" text-lg md:text-5xl text-white font-bold ">Contact</h1>

        <button
          onClick={() => setIsOpen(true)}
          className="p-1 text-xs  md:p-3 text-white rounded-md border bottom-1"
        >
          Create Contact
        </button>
      </div>
      <hr />

      {!contacts.length && <h1 className="flex p-3 justify-center items-center h-full text-sm md:text-3xl text-white">No Contact Found Pleae add contact from Add Contact Button.  </h1>}
 
      
      
      <div className="w-full h-full p-1 pt-4 md:p-10   overflow-auto">
        
        <table className="table-auto text-white  text-center   	 w-full ">
          <thead className="text-center">
            <tr className="">
              <th className="">First Name</th>
              <th>Last Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {contacts?.map((item, id) => {
              return (
                <tr key={id} className=" border rounded-lg pb-3 ">
                  <td className="p-4">{item.firstName} </td>
                  <td className="p-4">{item.lastName}</td>
                  <td className="p-4">{item.status}</td>
                  <td className="p-4 flex justify-center items-center space-x-5 ">
                   <span className=" cursor-pointer" onClick={()=>handleUpdate(item.id)}><FaEdit size={20}/></span>
                   <span className=" cursor-pointer" onClick={()=>dispatch(deleteContact(item.id))}><MdDeleteOutline size={20}/></span>

                </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <UpdateModal isOpen={isUpdateModalOpen} setIsOpen={setIsUpdateModalOpen} idx={currentIdx}/>
    </div>
  );
};

export default Contact;
