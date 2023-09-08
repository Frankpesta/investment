import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Referral from "../../components/Referral";
import estate from "../../assets/estate.jpg";
import wealth from "../../assets/wealth.jpg";
import retire from "../../assets/retire.jpg";
import hedge from "../../assets/hedge.jpg";
import tax from "../../assets/tax.jpg";
import savings from "../../assets/savings.jpg";
import crypto from "../../assets/crypto.jpg";
import forex from "../../assets/forex.jpg";
import gold from "../../assets/gold.jpeg";
import refine from "../../assets/refine.jpg";
import children from '../../assets/children.avif';
import cover1 from '../../assets/header.jpg';
import nft from '../../assets/nft.webp';
const Services = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={"Services"} />
      <section className="my-8 py-6">
        <h2 className="font-bold text-2xl lg:text-3xl text-center text-teal-600">
          WHAT WE OFFER...
        </h2>
        <p className="font-light text-left text-md py-6 mx-4">
          At WealthBridgeAdvisors , we pride ourselves on our revolutionary
          "BlackBox" algorithm, a proprietary technology that predicts market
          trends with astonishing accuracy. Gain exclusive access to this
          powerful tool, giving you a distinct advantage in the investment
          world. Our algorithm guarantees consistent returns and helps you
          outperform the market effortlessly.
        </p>
        <div className="container mx-auto space-y-12 pt-8">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={retire}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Portfolio Management</h3>
              <p className="my-6 text-gray-600">
                If you prefer a hands-off approach, our portfolio management
                services are designed to meet your needs. Our experienced
                portfolio managers will construct and manage a customized
                investment portfolio based on your risk profile, investment
                objectives, and time horizon. Benefit from our expertise in
                asset allocation, diversification, and active management to
                optimize your returns
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={crypto}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Crypto Investment</h3>
              <p className="my-6 text-gray-600">
                WealthBridge Advisors offers all traders the opportunity to mine
                a wide range of the top ranked digital coins 24/7*. Today
                cryptocurrencies have become known to most people as a
                conventional and popular investment option. The main purpose of
                this new technology is to allow people to buy, trade, and invest
                without the need for banks or any other financial institution.
                Cryptocurrencies are highly volatile and can be profitable to
                any trader’s portfolio. Cryptocurrencies are not physical coins
                they are electronic, a digital asset that remains as data. The
                technology behind the cryptocurrency controls a large part of
                its value which holds new technology on the secure way to
                identify and transfer money.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={gold}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Gold Investment</h3>
              <p className="my-6 text-gray-600">
                Commonly seen as a great store of wealth, this precious metal is
                also known as a reliable safe-haven asset. With a rich history
                amongst almost all global cultures, gold remains a highly
                popular investment. Although it has multiple uses, its primary
                function is typically to hedge against inflation in an often
                volatile futures market, as well as to diversify existing
                Precious Metals Investment Retirement Accounts. Gold has been
                one of the most valuable precious metals throughout human
                history, used by elites as a symbol of wealth for centuries due
                to its rarity and its ability to hold its worth for a long time.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={refine}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Oil Investment</h3>
              <p className="my-6 text-gray-600">
                Surprising as it might be, anyone can invest in the oil market
                to make a profit. We at WealthBridge having mastered the
                workings of the oil market help to ensure that you make the best
                gains from trading and investing in oil.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={forex}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Forex Trading</h3>
              <p className="my-6 text-gray-600">
                At WealthBridge Advisors, we bring a wealth of knowledge and
                experience to the world of forex trading. Our team of experts
                includes professionals with deep insights into the intricacies
                of foreign exchange markets. We ensure that we maximize profits
                for our clients.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={children}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Children Investment</h3>
              <p className="my-6 text-gray-600">
                This is a Roth IRA for Kids, which Helps invest for the future.
                This account can be opened and managed by an adult—parent,
                grandparent, aunt, uncle, or a family friend—on behalf of a
                minor earning income.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={cover1}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Capital Recovery</h3>
              <p className="my-6 text-gray-600">
                Capital recovery is a term that has several related meanings in
                the world of business and investing. It is, primarily, the
                earning back of the initial funds put into an investment,
                lost/stolen assets. Specifically, there are ways to recover your
                investments and lost assets. The recovery must occur before you
                can earn profits on your initial investment. You can reach out
                to our consumer services or funds recovery experts to get more
                info and help on how to recoup your lost assets.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={wealth}
              alt=""
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Wealth Management</h3>
              <p className="my-6 text-gray-600">
                Our wealth management services provide personalized strategies
                for your unique financial goals. Through careful assessment and
                planning, we aim to grow and protect your wealth. Our skilled
                advisors assist with asset allocation, risk management, tax
                planning, and estate planning. Maximize your financial potential
                with our comprehensive approach.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={nft}
              alt=""
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">NFT's</h3>
              <p className="my-6 text-gray-600">
                Non-fungible tokens (NFT’s) are a special class of assets on the
                blockchain characterized by being unique and non-interchangeable
                with one another for equal value. An NFT is different from a
                cryptocurrency in that it is defined by metadata that builds-in
                a role, function, and value that are unique to it. We invest in
                non-fungible tokens (NFTs) directly and in companies or funds
                that have exposure to NFTs and blockchain technology. Note: with
                NFTs, we provide strong returns on your portfolio with minimal
                effort on your part.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={hedge}
              alt="hedge"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Hedge Fund Management</h3>
              <p className="my-6 text-gray-600">
                We are a leading hedge fund management company, delivering
                exceptional risk-adjusted returns through curated portfolios.
                Our experienced team employs rigorous analysis, research, and
                modeling to identify lucrative opportunities. With a focus on
                risk management and diversification, we aim for consistent
                above-average returns for our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto space-y-12 mt-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={savings}
              alt="retire"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Retirement Planning:</h3>
              <p className="my-6 text-gray-600">
                If thinking about your retirement planning makes you nervous or
                puts you to sleep, you are not alone.
              </p>
              <p className="my-2 font-bold text-lg">
                What does retirement planning even mean?
              </p>
              <p className="my-4">
                Retirement planning is a broad term that refers to learning
                about and choosing financial strategies that will enable you to
                be comfortable and secure in your retirement years. A good
                retirement plan, executed smartly, can provide you with enough
                money to cover all of your later-year living expenses after
                retirement. Let's explore the importance of retirement planning
                and examine the steps you need to take to prepare for your
                golden years.
              </p>
              <p className="my-4 text-lg font-bold">
                Why you should plan for retirement?
              </p>
              <p className="my-4">
                Good news! People on average are living longer and are able to
                remain healthy and active well into their sunset years. But many
                individuals haven’t saved or invested enough money to retire in
                their 60s with the confidence that their funds will last for
                their lifetime. Both the Center for Retirement Research at
                Boston College and the Consumer Financial Protection Bureau have
                estimated that approximately 50% of today's retirees have cut
                back on their spending and will be forced to do so, due to
                dwindling resources. Far too many retirees end up relying on
                Social Security to cover the majority of their living expenses
                only to find out the hard way that it isn't nearly enough.
                Social Security retirement income is only designed to replace
                about 40% of the average worker's salary, but more than one in
                five married couples and 45% of single retirees depend on Social
                Security for more than 90% of their incomes in retirement. The
                bottom line is that, while many get by without ever making and
                executing a retirement plan, those who most enjoy their
                retirement do so in part due to having a retirement plan.
                Retirement planning is what can help you to be financially
                comfortable after you leave your job.
              </p>

              <p className="my-4 text-lg font-bold">
                What we consider when planning your retirement.
              </p>
              <p className="my-4">
                When you want to retire? Are you planning to work until age 65
                or until you are older than that? Do you have a goal of retiring
                early? How many more years, are you planning to spend in the
                workforce significantly affects how much money are you likely to
                need. If you choose to work until you are older, not only do
                your investments have more time to grow but the number of
                retirement years you need to fund is slightly reduced.
              </p>

              <p>
                Where you want to live? Are you going to stay in your current
                home or downsize? Do you want to stay in the same area or retire
                somewhere warm or closer to relatives? The cost of living in the
                area where you'd like to live as a senior citizen is another
                major factor impacting how much money you will need in
                retirement. How will you pay your living expenses? Your Social
                Security retirement income can't cover all of your expenses, so
                will you need to save or invest money as well? Yes, Another
                factor to consider is the magnitude of your living expenses
                themselves. Whether you own or rent property in retirement can
                significantly change the amount of your living expenses.
              </p>

              <p className="font-bold text-lg my-4">
              How much money you will need to retire?
              </p>
              <p className="my-4">
              You may be wondering what dollar amount will be enough money to comfortably retire. Unfortunately, there's not a one-size-fits-all number. To estimate how much money you personally need to retire, follow these basic steps:
              </p>
              
              <ol className="">
                <li className="py-2">Estimate your total annual living expenses in retirement. You can use the rule of thumb that the typical you retiree needs about 80% of his or her pre-retirement income to maintain the same standard of living after leaving the workforce for good.</li>
                <li className="py-2">Subtract your expected Social Security benefits and any pension income you expect to receive from your estimated total annual living expenses in retirement to compute your estimated net annual living expenses. Your latest Social Security statement, which you can find on the Social Security website, has an estimate of the Social Security income you are likely to receive.</li>
                <li className="py-2">Multiply your estimated net annual living expenses in retirement by 25 to determine a total amount of money you need to save for retirement. Multiplying your expenses in retirement by 25 to determine the total amount of retirement money you need is linked to another rule of thumb called the 4% rule. This rule advises you not to withdraw more than 4% of your retirement savings per year in order to fund your retirement for at least 30 years.</li>
              </ol>
            </div>
          </div>


          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={tax}
              alt="tax"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                Tax Planning and Compliance:
              </h3>
              <p className="my-6 text-gray-600">
                Simplify tax complexities with our comprehensive tax planning
                and compliance services. Our experts optimize tax efficiency
                while ensuring full compliance with regulations. Stay updated on
                tax laws and discover potential savings opportunities. Minimize
                tax liabilities with strategic implementation.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={estate}
              alt="tax"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Real Estate Planning:</h3>
              <p className="my-6 text-gray-600">
                Preserving and transferring your wealth to future generations
                requires careful estate planning. Our estate planning services
                help you develop a robust plan to protect your assets, minimize
                estate taxes, and ensure your legacy is preserved according to
                your wishes. We work closely with legal professionals to create
                trusts, wills, and other estate planning instruments that align
                with your unique circumstances and goals
              </p>
            </div>
          </div>
        </div>
      </section>
      <Referral />
      <Footer />
    </>
  );
};

export default Services;
