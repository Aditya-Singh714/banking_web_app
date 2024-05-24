import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Aditya', lastName: 'Singh', email: 'developer@master.pro' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
             type="greeting"
             title="Welcome"
             user={loggedIn?.firstName || 'Guest'}
             subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1534.64}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 255}, {currentBalance: 646}]} 
      />
    </section>
  )
}

export default Home
