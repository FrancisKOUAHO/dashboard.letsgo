import React from 'react';

type ModalProps = {
  name?: string;
  isOpen?: boolean;
  closeModal?: (value: boolean) => void;
  children?: React.ReactNode;
};

export default ModalProps;
