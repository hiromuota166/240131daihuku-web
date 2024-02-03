'use client';
import React from 'react'
import Image from 'next/image'

function HeaderUI() {
  const daihuku = 'Daihuku'
  return (
    <div className=''>
      <Image
          src="/cooking-header.svg" //storybookだと何故か読み込みできない
          width={32}
          height={32}
          alt="ヘッダーアイコン"
          className="w-10 mt-5"
        />
      <h1>
        {daihuku}
      </h1>
    </div>
  )
}

export default HeaderUI