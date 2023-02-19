import Modal from "./modal";
import {useState} from "react";

export const BasicModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
      <>
          <div className="fixed inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                  Open dialog
              </button>
          </div>
          <Modal closeModal={closeModal} openModal={openModal} isOpen={isOpen} name={'Modal'}/>
      </>
    )
}

export default {
    title: "Atoms/BasicModal",
    component: BasicModal,
}
