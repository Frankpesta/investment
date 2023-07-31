import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Faq from 'react-faq-component';
import ChooseUs from '../../components/ChooseUs';

const data = {
  rows: [
    {
      title: 'What is an Investment Platform?',
      content: 'An investment platform is an online service which provides access to funds from a wide range of Investment Managers, which means that you can pick various funds from various Investment Managers but you do not have to go to each one of them individually as they are bought by the Platform provider on your behalf. You can hold the various types of product on the Platform such as ISA, Pension, Investment Bonds, Investment Trusts, OEIC’s ETF’s etc.'
    },
    {
      title: 'Logo Investment Company Limited?',
      content: 'Logo Investment Management Limited is a financial and investment management company duly registered with registration number RC:02020394.'
    },
    {
      title: 'In which countries do you provide your services?',
      content: 'As an international company we accept clients from all countries and help them build strong financial stability.'
    },
    {
      title: 'Who Controls the Investment Portfolio?',
      content: 'The investment portfolio is managed by a team of experienced financial specialists, of lawyers, professional trade analysts who have been working on the currency and stock exchange market for more than 10 years on average. Our experience and contacts ensure access for us to a wide range of local and global resources and bring about benefit from the world’s best and most effective technologies of trading on the real estate,oil,Forex, Binary and Cryptocurrency market'
    },
    {
      title: 'Are my Funds Secure?',
      content: 'We’ll take minimum risks while trading to protect our investor’s funds. With our insurance funds, we secure our member’s investments. We are also involved in real estate Investments, and that also guarantees the safety of our investors funds.'
    },
    {
      title: 'What happens when extra profits are made?',
      content: 'Extra profits will be used to pay referral commissions, announce incentives and reward the traders for their diligence. We will also increase our insurance fund.'
    },
    {
      title: 'How do I know how my Investment is doing?',
      content: 'Investment companies send regular statements either 6 monthly or yearly but at Logo Investment Financial Management we also provide online access to a ‘real time valuation’ service where you can see the latest value at any time if required.'
    },
    {
      title: 'How long does it take to process transactions?',
      content: 'Generally transactions are processed within minutes. Processing time also depends on the payment method.'
    },
    {
      title: 'Can I have an income from my investments?',
      content: 'Yes you can have an income, either from the withdrawal mode or compounding, a later date if income is not needed straight away, this is something we will clarify with you when deciding which is investment is most suitable.'
    },
    {
      title: 'How long do I need to keep my money for?',
      content: 'There is no need to tie your money up for any specific time period and is down to your own personal requirements although it is recommended that stock market related investments should be envisaged to be kept for 3 to 5 years.'
    },
    {
      title: 'Is BTC your only deposit currency?',
      content: 'NO. Deposit currency is USD and BTC is used to transact money smoothly. Appreciation or depreciation in the value of BTC after you have made the deposit will not in any way affect your deposit rather the conversion rate at the time of deposit applies.'
    },
    {
      title: 'What risk do I have to take to generate a good return for my money?',
      content: 'Everybody has a different concept of what the word risk means so before recommending an investment, we carry out an ‘Attitude to Risk’ analysis that is personal to you so that your investment is matched to your own personal risk rating plus we then offer regular reviews which includes a review of your attitude to risk in order to ensure that your investment remains suitable.'
    },
    {
      title: 'How do I start Investing?',
      content: 'Once you successfully register with us, you can easily choose any of our investment plans either the crypto currency or the Real Estate plans. Once you have invested using any of the payment plans, you can start earning your returns as specified for the plans you have chosen.'
    },
  ]
}

const styles = {
    rowTitleColor:'teal',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',    
}

const Faqs = () => {
  return (
    <>
    <Navbar />
    <PageHeader pageTitle={"FAQS"} />
    <div className='my-6 mx-20'>
      <h2 className='font-semibold text-[22px] text-teal-600 text-center py-4'>MOST FREQUENTLY ASKED QUESTIONS ?</h2>
      <p className='text-md leading-relaxed pb-12'>We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with that can be.</p>


      <Faq data={data}  styles={styles}  />
    </div>
    <ChooseUs />
    <Footer />
    </>
  )
}

export default Faqs;