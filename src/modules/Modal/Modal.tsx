import { useDispatch, useSelector } from "react-redux";
import { MODALS_MAPPING } from "./modalTypes";
import { modalActionTypes } from "./redux/modalSlice";
import { modalTypeSelector } from "./redux/selectors";
import { ModalWrapper } from "./styles";

const Modal = () => {
  const dispatch = useDispatch();
  const modalType: string = useSelector(modalTypeSelector);
  const ModalComponent = MODALS_MAPPING[modalType];

  const closeModal = () => {
    dispatch(modalActionTypes.closeModal());
  };

  return (
    <>
      {modalType && (
        <ModalWrapper>
          <ModalComponent onClose={closeModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
