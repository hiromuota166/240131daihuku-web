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
        {/* 他のコンポーネントでバックエンドからDB検索で何を作ったかを取得して表示 */}
      </Modal>
    </>
  );
};

export default ModalWhole;