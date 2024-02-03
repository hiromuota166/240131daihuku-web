import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import InputModal from './InputModal';

interface ModalWholeProps {
  isVisible: boolean;
  onClose: () => void;
  date: Dayjs; // 日付を受け取る
}

const ModalWhole: React.FC<ModalWholeProps> = ({ isVisible, onClose, date }) => {
  const [isInputModalVisible, setIsInputModalVisible] = useState(false);

  const handleOpenInputModal = () => {
    setIsInputModalVisible(true);
  };

  const handleCloseInputModal = () => {
    setIsInputModalVisible(false);
  };

  return (
    <>
      <Modal title={date?.format('YYYY-MM-DD')} open={isVisible} onOk={onClose} onCancel={onClose}>
        <Button type="primary" onClick={handleOpenInputModal}>
          Open Input Modal
        </Button>
        {/* モーダルの内容 */}
        <InputModal isVisible={isInputModalVisible} onClose={handleCloseInputModal} date={date} />
      </Modal>
    </>
  );
};

export default ModalWhole;
