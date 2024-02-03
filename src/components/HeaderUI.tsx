'use client';
import React from 'react'
import Image from 'next/image'

function HeaderUI() {
  const daihuku = 'Daihuku'
  return (
    <div className='flex bg-teal-50'>
      <Image
          src="/cooking-header.svg" //storybookだと何故か読み込みできない
          width={32}
          height={32}
          alt="ヘッダーアイコン"
          className="w-8 mt-5 m-2.5"
        />
      <h1
        className='flex justify-start w-screen text-2xl items-end pb-2.5'>
        {daihuku}
      </h1>
    </div>
  )
}

export default HeaderUI