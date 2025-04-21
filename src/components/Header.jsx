import React from 'react'

const Header = () => {
  return (
    <div className="w-full  bg-zinc-600 h-[60px] items-center flex justify-around text-white  py-2">
        <div>
        <span className="text-2xl font-bold ">$ getSOl</span>
        </div>
      <div className="  flex items-center justify-center gap-10 px-4">
        <span className="text-lg">🚀 Request Airdrop</span>
        <span className="text-lg">📊 Show SOL Balances</span>
        <span className="text-lg">💸 Send a Transaction</span>
        <span className="text-lg">🖊️ Sign a Message</span>
      </div>
    </div>
  )
}

export default Header
