// モーダルのUIを実装するコンポーネント
'use client';
import React from 'react';
import { Modal } from 'antd';
import type { Dayjs } from 'dayjs';

interface InputModalProps {
  isVisible: boolean;
  onClose: () => void;
  date: Dayjs; //日付を受け取る
}

// 料理名を入力するinput

const InputModal: React.FC<InputModalProps> = ({ isVisible, onClose, date }) => {
  return (
    <>
      <Modal title='Dish' open={isVisible} onOk={onClose} onCancel={onClose}>
        <span>second!</span>
        <span>second!</span>
        <span>second!</span>
        <span>second!</span>
        {/* モーダルの内容 */}
        {/* 他のコンポーネントでバックエンドからDB検索で何を作ったかを取得して表示 */}
      </Modal>
    </>
  );
};

export default InputModal;