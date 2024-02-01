'use client';
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import ModalWhole from './ModalWhole';
import { SelectInfo } from 'antd/es/calendar/generateCalendar';
import dayjs from 'dayjs';

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8: //value.dateが8の時にlistDataに代入
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10: //value.dateが10の時にlistDataに代入
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15: //value.dateが15の時にlistDataに代入
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break; 
    default: //それ以外の時はlistDataに代入しない
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalenderDash: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs()); // 選択された日付を管理する状態

  const onSelectDate = (date: Dayjs) => {
    setSelectedDate(date); // 選択された日付を状態に保存
    setIsModalOpen(true); // モーダルを開く
  }

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };


  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <Calendar 
        cellRender={cellRender}
        onSelect={(date: Dayjs, SelectInfo: SelectInfo) =>{
          console.log('Panel Select', date.format('YYYY-MM-DD'));
          setIsModalOpen(true);
        }}
      />
      <ModalWhole isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} date={selectedDate} />
    </>
  )
};

export default CalenderDash;