// モーダルのUIを実装するコンポーネント
'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalWhole: React.FC<{ isVisible: boolean; onClose: () => void; }> = ({ isVisible, onClose }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Modal title="Basic Modal" open={isVisible} onOk={onClose} onCancel={onClose}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalWhole;