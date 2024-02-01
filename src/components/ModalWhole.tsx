// モーダルのUIを実装するコンポーネント
'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import type { Dayjs } from 'dayjs';

interface ModalWholeProps {
  isVisible: boolean;
  onClose: () => void;
  date: Dayjs; //日付を受け取る
}

const ModalWhole: React.FC<ModalWholeProps> = ({ isVisible, onClose, date }) => {
  return (
    <>
      <Modal title={date?.format('YYYY-MM-DD')} open={isVisible} onOk={onClose} onCancel={onClose}>
        {/* モーダルの内容 */}
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalWhole;