import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";

export default function PrivacyPage({ articles = [] }) {
  return (
    <Layout
      canonicalUrl="https://aipaired.com/privacy"
      title="Privacy policy | AIPaired"
      metaDescription="Your privacy is important to us">
      <Container>
        <div className="mt-24">
          <h1> Privacy Policy for AIPaired</h1>
          <p>
            If you require any more information or have any questions about our
            privacy policy, please feel free to contact us by email at
            hello@aipaired.com.
          </p>
          <p>
            At https://aipaired.com we consider the privacy of our visitors to
            be extremely important. This privacy policy document describes in
            detail the types of personal information is collected and recorded
            by https://aipaired.com and how we use it.
          </p>
          <p>
            <b>Log Files</b>
            <br /> Like many other Web sites, https://aipaired.com makes use of
            log files. These files merely logs visitors to the site – usually a
            standard procedure for hosting companies and a part of hosting
            services's analytics. The information inside the log files includes
            internet protocol (IP) addresses, browser type, Internet Service
            Provider (ISP), date/time stamp, referring/exit pages, and possibly
            the number of clicks. This information is used to analyze trends,
            administer the site, track user's movement around the site, and
            gather demographic information. IP addresses, and other such
            information are not linked to any information that is personally
            identifiable.
          </p>
          <p>
            <b>Cookies and Web Beacons</b>
            <br />
            https://aipaired.com uses cookies to store information about
            visitors' preferences, to record user-specific information on which
            pages the site visitor accesses or visits, and to personalize or
            customize our web page content based upon visitors' browser type or
            other information that the visitor sends via their browser.
          </p>
          <p>
            <b>DoubleClick DART Cookie</b>
            <br />
          </p>
          <p>
            → Google, as a third party vendor, uses cookies to serve ads on
            https://aipaired.com.
            <br />
            <br />
            → Google's use of the DART cookie enables it to serve ads to our
            site's visitors based upon their visit to https://aipaired.com and
            other sites on the Internet. <br />
            <br />→ Users may opt out of the use of the DART cookie by visiting
            the Google ad and content network privacy policy at the following
            URL –
            <a href="http://www.google.com/privacy_ads.html">
              http://www.google.com/privacy_ads.html
            </a>
          </p>
          <p>
            <b>Our Advertising Partners</b>
            <br />
          </p>
          <p>
            Some of our advertising partners may use cookies and web beacons on
            our site. Our advertising partners include <br />
          </p>
          <ul>
            <li>Google</li>
            <li>Commission Junction</li>
            <li>Amazon</li>
            <li>Adbrite</li>
            <li>Clickbank</li>
            <li>Yahoo! Publisher Network</li>
            <li>Chitika</li>
            <li>Kontera</li>
          </ul>

          <p>
            These third-party ad servers or ad networks use technology in their
            respective advertisements and links that appear on
            https://aipaired.com and which are sent directly to your browser.
            They automatically receive your IP address when this occurs. Other
            technologies (such as cookies, JavaScript, or Web Beacons) may also
            be used by our site's third-party ad networks to measure the
            effectiveness of their advertising campaigns and/or to personalize
            the advertising content that you see on the site.
          </p>
          <p>
            https://aipaired.com has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>

          <p>
            <b>Third Party Privacy Policies</b>
            <br />
            You should consult the respective privacy policies of these
            third-party ad servers for more detailed information on their
            practices as well as for instructions about how to opt-out of
            certain practices. https://aipaired.com's privacy policy does not
            apply to, and we cannot control the activities of, such other
            advertisers or web sites.
          </p>
          <p>
            If you wish to disable cookies, you may do so through your
            individual browser options. More detailed information about cookie
            management with specific web browsers can be found at the browsers'
            respective websites.
          </p>
          <p>
            <strong>Children's Information</strong>
            <br />
            We believe it is important to provide added protection for children
            online. We encourage parents and guardians to spend time online with
            their children to observe, participate in and/or monitor and guide
            their online activity.
            <br />
            https://aipaired.com does not knowingly collect any personally
            identifiable information from children under the age of 13. If a
            parent or guardian believes that https://aipaired.com has in its
            database the personally-identifiable information of a child under
            the age of 13, please contact us immediately (using the contact in
            the first paragraph) and we will use our best efforts to promptly
            remove such information from our records.
          </p>
          <p>
            <b>Online Privacy Policy Only</b>
            <br />
            This privacy policy applies only to our online activities and is
            valid for visitors to our website and regarding information shared
            and/or collected there.
            <br />
            This policy does not apply to any information collected offline or
            via channels other than this website.
          </p>
          <p>
            <b>Consent</b>
            <br />
            By using our website, you hereby consent to our privacy policy and
            agree to its terms.
          </p>
          <p>
            <b>Update</b>
            <br />
            This Privacy Policy was last updated on: April 1st, 2023. Should we
            update, amend or make any changes to our privacy policy, those
            changes will be posted here.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
