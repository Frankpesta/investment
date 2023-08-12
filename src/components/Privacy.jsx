import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import PageHeader from './PageHeader'

const Privacy = () => {
  return (
    <>
    <NavBar />
    <PageHeader pageTitle={"PRIVACY POLICY"} />
    <div className="mt-12 mx-4 p-12">
      <h2 className="font-bold text-2xl lg:text-3xl pb-5">
        OUR PRIVACY POLICY
      </h2>

      <div>
        <p className="leading-relaxed text-lg pb-4">
          WealthBridgeAdvisors is the data controller of the personal data we
          may collect as part of your use of this site and connected services.
        </p>
        <p className="leading-relaxed text-lg pb-4">
          We understand that looking after the personal data you share with us
          is hugely important. We want you to be confident that your data is
          safe and secure with us and you understand how we use it, this
          privacy and cookies policy (Policy) sets out this key information.
        </p>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">Personal data we collect about you</h2>
          <p className="text-lg leading-relaxed pb-4">This section tells you what personal data we collect about you.</p>

          <p className="pb-4 text-lg leading-relaxed">We may collect and process information about you, including without limitation:</p>

          <ul className="text-lg leading-relaxed pb-6 list-disc">
              <li className="py-2">Information that you give us. You may give us information about you by filling in forms on our Website or by corresponding with us by phone, e-mail or otherwise. The information you give us may include your name, address, e-mail address and phone number, personal description and photograph.</li>
              <li className="py-2">Information that we collect about you. With regard to each of your visits to our Website we may automatically collect technical information and information about your visit; and</li>
              <li className="py-2">Information we receive from other sources. We may receive information about you if you use any of the other websites we operate or the other services we provide. We are also working closely with third parties and may receive information about you from them.</li>
          </ul>

          <p className="pb-4 text-lg leading-relaxed">We may supplement the information we collect about you with information we receive from other public sources (eg public registers such as the electoral roll). This allows us to assess the accuracy of the information we hold about you in order to send you relevant offers and information.</p>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">How and why we use your personal data</h2>
          <p className="text-lg leading-relaxed pb-4">This section explains in detail how and why we use your personal data.</p>

          <p className="pb-4 text-lg leading-relaxed">Collecting your personal information helps us to better understand what you need from us and to improve our services to you. Without limitation, we may use your information to:</p>

          <ul className="text-lg leading-relaxed pb-6 list-disc">
              <li className="py-2">manage and improve our Website, including to ensure that content is presented in the most effective manner for you and for your computer;</li>
              <li className="py-2">administer our Website and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</li>
              <li className="py-2">personalise our services to you;</li>
              <li className="py-2">tell you about important changes to the Website and our services;</li>
              <li className="py-2">manage promotions, competitions, customer surveys and questionnaires, and to allow you to participate in interactive features of our service, when you choose to do so; and</li>
              <li className="py-2">Assess and evaluate any content you submit to us and to contact you to decide on next steps;</li>
              <li className="py-2">enhance our efforts to keep our site safe and secure.</li>
              <p className="text-lg leading-relaxed">You have the right to ask us not to process your personal data for marketing purposes.</p>
          </ul>

          <p className="pb-4 text-lg leading-relaxed">We may supplement the information we collect about you with information we receive from other public sources (eg public registers such as the electoral roll). This allows us to assess the accuracy of the information we hold about you in order to send you relevant offers and information.</p>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">Shareholders</h2>
          <p className="text-lg leading-relaxed pb-4 pt-2">If you are a shareholder of the Company, we will process the following personal data:</p>

          <ul className="text-lg leading-relaxed pb-6 list-disc">
              <li className="py-2">Your name, postal address, email address, phone number, date of birth and financial information (bank account detail, so we can pay dividends for example) as well as information about your share holdings.</li>
              <li className="py-2">It is a legal requirement that a shareholder’s name, address and number of shares held are included on our share register. If this information is not provided, we will not be able to register your shareholding.</li>
              <li className="py-2">We will also process your personal data where necessary to comply with legal requirements placed upon us, such as the Companies Act, Stock Exchange requirements, financial crime regulations and taxation laws.</li>
          </ul>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">Legal basis of processing</h2>
          <p className="text-lg leading-relaxed pb-4 pt-2">In relation to personal data we process to send you any marketing communications that you have agreed to receive, we do so based on your consent. You can withdraw your consent at any time to receiving these communications.</p>

          <p className="pb-4 text-lg leading-relaxed">In relation to the other personal data processed, we process this based on what is called our “legitimate interests”, these are:</p>

          <ul className="text-lg leading-relaxed pb-6 list-disc">
              <li className="py-2">to help you understand our business, its performance and changes;</li>
              <li className="py-2">to keep you informed about news and events, including regulatory news connected with Dex Finance Management;</li>
              <li className="py-2">to assess and evaluate any content you submit to us and to decide on next steps in relation to your submission;</li>
              <li className="py-2">to administer and keep up to date your account, resolve problems and respond to complaints;</li>
              <li className="py-2">to prevent and detect fraud;</li>
              <li className="py-2">to invite you to attend events connected with the above.</li>
          </ul>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">Sharing your personal data</h2>
          <p className="text-lg leading-relaxed pb-4 pt-2">We may share personal data with other organisations in the following circumstances:</p>

          <ul className="text-lg leading-relaxed pb-6 list-disc">
              <li className="py-2">With our service providers (such as our website or event hosts) in order to run the service and administer your account;</li>
              <li className="py-2">If you are a shareholder, with our share registrar service provider;</li>
              <li className="py-2">If you are a shareholder, with our tracing agents in order to locate “missing” shareholders;</li>
              <li className="py-2">If the law or a public or regulatory authority says we must share the personal data;</li>
              <li className="py-2">If we need to share personal data in order to establish, exercise or defend our legal rights (this includes providing personal data to others for the purposes of preventing fraud);</li>
              <li className="py-2">Where we restructure, sell or transfer our business (or a part of it). For example in connection with a takeover or merger.</li>
              <li className="py-2">With other companies in the Dex Finance Management Group and third parties who help us assess and evaluate any content or ideas you share with us.</li>
          </ul>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">How we protect personal data
</h2>
          <p className="text-lg leading-relaxed pb-4 pt-2">We know how important it is to protect and manage your personal data. This section sets out some of the measures we have in place:</p>
          <ul className="text-lg leading-relaxed pb-6 list-disc">
              <li className="py-2">We apply physical, electronic and procedural safeguards in connection with the collection, storage and disclosure of personal data;</li>
              <li className="py-2">We protect the security of your information while it is being transmitted by encrypting it;</li>
              <li className="py-2">We use computer safeguards such as firewalls and data encryption to keep this data safe;</li>
              <li className="py-2">We only authorise access to employees and trusted partners who need it to carry out their responsibilities;;</li>
              <li className="py-2">We regularly monitor our systems for possible vulnerabilities and attacks, and we carry out penetration testing to identify ways to further strengthen security; and</li>
              <li className="py-2">We will ask for proof of identity before we share your personal data with you.</li>
          </ul>

          <p className="pb-5 text-lg leading-relaxed">Whilst we take appropriate technical and organisational measures to safeguard your personal data, it is important that you keep your login details and devices protected from unauthorised access.</p>

          <p className="pb-4 text-lg leading-relaxed">The personal data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by companies operating outside the EEA who work for us or for one of our service providers. If we do this we ensure that your privacy rights are respected in line with this Policy. The most common way we do this is to put in place a specific type of contract called “Standard Contractual Clauses” or through an approved scheme such as the “Privacy Shield”.</p>
      </div>

      <div className="py-4">
          <h2 className="font-bold text-2xl lg:text-3xl">Other privacy rights</h2>
          <p className="text-lg leading-relaxed pb-4 pt-4">If you believe we hold incorrect or inaccurate personal data about you please let us know and we will correct it.</p>

          <p className="text-lg leading-relaxed pb-4">In some circumstances you may also have the right to object to our use of your personal data, restrict our use of it, have us delete it or have us port a copy of it to you or a third party.</p>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Privacy