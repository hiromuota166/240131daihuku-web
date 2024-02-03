'use client';
import React from 'react'
import Image from 'next/image'

interface HeaderUIProps {
  login: boolean;
}

function HeaderUI(props: HeaderUIProps) {
  const { login } = props
  const daihuku = 'Daihuku'
  return (
    <div className=''>
      <Image
          src="/cooking-header.svg"
          width={32}
          height={32}
          alt="ヘッダーアイコン"
          className="w-10 mt-5"
        />
      <h1>
        {daihuku}
      </h1>
      <div>
        {login ? (
          <>
            <span className="welcome">
              Welcome, <b>user.name</b>!
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log out</button>
          </>
        ) : (
          <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign up</button>
          </>
        )}
        </div>
    </div>
  )
}

export default HeaderUI