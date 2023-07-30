import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

const Security = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={"Security"} />
      <div className="mx-12 lg:mx-24 my-6 lg:my-12">
        <div className="lg:text-center">
          <h2 className="text-teal-600 uppercase font-bold pb-6 text-[30px]">
            AVOIDING ONLINE SCAMS IN THE DIGITAL AGE
          </h2>
          <p className="leading-relaxed text-ms">
            Remain watchful to safeguard your personal information and financial
            details. Here's what you need to know.
          </p>
          <p className="leading-relaxed text-md">
            Instances of online scams continue to emerge at an alarming rate.
            While the internet has undeniably brought numerous positive changes
            to the world, there is also a downside. Online scams remain
            widespread, and contrary to popular belief that they primarily
            target senior citizens, a recent study conducted by the Federal
            Trade Commission (FTC) reveals that more millennials than retirees
            are falling victim to online fraud, losing their hard-earned money
            in the process. It is important for everyone to exercise caution as
            these scams can affect anyone. In the year 2020, California alone
            has reported over 3,500 cases of identity theft, underscoring the
            seriousness of the issue.
          </p>
          <p className="pt-4 leading-relaxed text-md">
            At Company Investment Financial management, protecting your money
            and personal information is a top priority. That’s why we’ve
            outlined how to spot the latest online scams and how you can protect
            yourself with these internet safety tips.
          </p>
        </div>

        <div className="my-12">
          <h2 className="text-teal-600 uppercase font-bold py-6 text-[30px]">
            FACEBOOK SCAMS
          </h2>
          <p className="leading-relaxed text-md pb-4">
            The Better Business Bureau warns about online fraud happening within
            Facebook. It starts with a “friend or relative” who contacts you
            through Facebook saying you are entitled to free money. These can
            come from fake profiles or hacked accounts. The catch? You need to
            pay up front for shipping or processing or provide other sensitive
            information that can be used for identity theft.
          </p>
          <p className="leading-relaxed text-md text-teal-600 pb-6">
            Follow these tips to avoid a Facebook hack or scam:
          </p>
          <p>
            Don’t give out your password (and don’t use the same password for
            multiple accounts)
          </p>
          <p>Avoid accepting unknown friend requests</p>
          <p>
            Use a secured network, not public Wi-Fi, when signing into any
            accounts (especially your bank account)
          </p>
          <p>Keep apps, browsers and antivirus software updated</p>
        </div>

        <div className="my-12">
          <h2 className="text-teal-600 uppercase font-bold py-6 text-[30px]">
            SCAM WEBSITES
          </h2>
          <p className="leading-relaxed text-md pb-4">
            The old phrase “If it seems too good to be true, it probably is”
            certainly applies to shopping online. Fake shopping websites have
            been popping up lately, aiming to scam you out of your hard-earned
            money. Pay attention to these red flags, which will help tip you off
            to a fake website or online store:
          </p>
          <p className="leading-relaxed text-md">
            Bootleg logo, store name and/or URL (e.g.
            “you-pay-less-4-mac-stuff.com” or a site with a URL that’s one or
            two letters off from a legitimate domain)
          </p>
          <p className="leading-relaxed text-md">
            Super-low prices that seem too good to be true
          </p>
          <p className="leading-relaxed text-md">
            Bad English and/or poor website design
          </p>
          <p className="leading-relaxed text-md">
            Inability to accept credit or debit card payments
          </p>
          <p className="leading-relaxed text-md">
            Reviews that sound suspicious or unauthentic
          </p>

          <p className="leading-relaxed text-md text-teal-600 pb-6">
            How can you protect yourself from fake shopping websites?
          </p>
          <p>
            If you are wary of a fake site, run it through Google’s Transparency
            tool or the BBB’s Scam Tracker
          </p>
          <p>Only purchase items online using a secured network</p>
          <p>
            Check to be sure the web address begins with “https,” indicating
            your personal and payment information is encrypted
          </p>
          <p>Use two-factor authentication for paying online</p>
        </div>


        <div className="my-12">
          <h2 className="text-teal-600 uppercase font-bold py-6 text-[30px]">
          TEXTING SCAMS, OR “SMISHING”
          </h2>
          <p className="leading-relaxed text-md pb-4">
          You’re likely familiar with phishing scams—fake emails that look to be sent from legitimate companies—but have you heard of a similar tactic called smishing? Smishing scams involve fraudulent text messages that seem urgent and indicate something is wrong. These messages prompt you to click a link, send sensitive personal information or reply to the text to resolve a serious situation. They may also promise free gifts or offers in exchange for personal information. So how should you handle a text message you think may be spam?
          </p>
          <p className="leading-relaxed text-md text-teal-600 pb-6">
            Follow these tips to avoid texting scams or smishing:
          </p>
          <p>
          Don’t reply or click any links
          </p>
          <p>Delete the text</p>
          <p>
            Use a secured network, not public Wi-Fi, when signing into any
            accounts (especially your bank account)
          </p>
          <p>Keep apps, browsers and antivirus software updated</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Security;
