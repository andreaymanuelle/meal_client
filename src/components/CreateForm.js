import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import ButtonIcon from "./utils/ButtonIcon";

export default function CreateForm ({ header, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen ?
                <div className="create-forms">
                    <div className="modal-header">
                        <h4>{header}</h4>
                        <button className="button-close" onClick={closeModal} >&times;</button>
                    </div>
                    {children}
                </div> :
            <ButtonIcon label={header} onClick={() => openModal()} icon={faPlus} type="success"/>}
        </>
    )
}