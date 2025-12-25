import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#111111] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <Link to="/" className="text-[#AAAAAA] hover:text-[#111111] transition-colors text-sm font-medium">
                        &larr; Back to Home
                    </Link>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl md:text-6xl mb-8"
                >
                    Privacy Policy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg text-gray-700 space-y-8 font-sans"
                >
                    <p className="italic text-sm text-gray-500 mb-8">
                        Last updated December 25, 2025
                    </p>

                    <p className="mb-4">
                        This Privacy Notice for Athams ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Visit our website at <a href="https://meeteira.com" className="text-blue-600 hover:underline">https://meeteira.com</a> or any website of ours that links to this Privacy Notice</li>
                        <li>Download and use our Facebook application (Eira), or any other application of ours that links to this Privacy Notice</li>
                        <li>
                            Use Eira. Eira is a digital wellness platform designed to bridge the gap between individuals and professional mental health support. It is not a replacement for therapy or medical treatment but serves as a supportive interface that helps users understand their emotions, track patterns, and connect with the right professionals when needed. With a chatbot-first approach tailored for the Indian region, Eira enables users to gain meaningful insights into their mental well-being, engage in guided self-reflection and practices, and take informed steps toward seeking appropriate help. Eira emphasizes accessibility, privacy, and responsible design to make mental health care more approachable and personalized.
                        </li>
                        <li>Engage with us in other related ways, including any marketing or events</li>
                    </ul>
                    <p className="mb-8">
                        Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:care@meeteira.com" className="text-blue-600 hover:underline">care@meeteira.com</a>.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">SUMMARY OF KEY POINTS</h2>
                        <p className="italic mb-4">This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>

                        <div className="space-y-4">
                            <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>

                            <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>

                            <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>

                            <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>

                            <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>

                            <p><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

                            <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>

                            <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="mailto:care@meeteira.com" className="text-blue-600 hover:underline">care@meeteira.com</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">TABLE OF CONTENTS</h2>
                        <ol className="list-decimal pl-6 space-y-1 font-medium">
                            <li>WHAT INFORMATION DO WE COLLECT?</li>
                            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                            <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
                            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                        </ol>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">1. WHAT INFORMATION DO WE COLLECT?</h2>
                        <h3 className="text-xl font-medium mb-2">Personal information you disclose to us</h3>
                        <p className="mb-2 italic">In Short: We collect personal information that you provide to us.</p>
                        <p className="mb-4">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                        <p className="mb-2 font-medium">Personal Information Provided by You.</p>
                        <p className="mb-2">The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>names</li>
                            <li>phone numbers</li>
                            <li>email addresses</li>
                            <li>usernames</li>
                        </ul>

                        <p className="mb-2 font-medium">Sensitive Information.</p>
                        <p className="mb-2">When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>information revealing race or ethnic origin</li>
                            <li>information revealing religious or philosophical beliefs</li>
                            <li>mental health or emotional well-being data</li>
                            <li>behavioral data</li>
                            <li>demographic data</li>
                        </ul>

                        <p className="mb-2 font-medium">Social Media Login Data.</p>
                        <p className="mb-4">We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?' below.</p>

                        <p className="mb-4">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                        <p className="mb-2 font-medium">Information collected when you use our Facebook application(s).</p>
                        <p className="mb-4">We by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the Facebook Permissions Reference page.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                        <p className="mb-2 italic">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                        <p className="mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                            <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                            <li><strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                            <li><strong>To evaluate and improve our Services, products, marketing, and your experience.</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                        <p className="mb-2 italic">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
                        <p className="mb-2">We may need to share your personal information in the following situations:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
                        <p className="mb-2 italic">In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
                        <p className="mb-4">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'AI Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>

                        <h3 className="text-xl font-medium mb-2">Use of AI Technologies</h3>
                        <p className="mb-4">We provide the AI Products through third-party service providers ('AI Service Providers'), including OpenAI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>

                        <h3 className="text-xl font-medium mb-2">Our AI Products</h3>
                        <p className="mb-2">Our AI Products are designed for the following functions:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>AI bots</li>
                        </ul>

                        <h3 className="text-xl font-medium mb-2">How We Process Your Data Using AI</h3>
                        <p className="mb-4">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
                        <p className="mb-2 italic">In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
                        <p className="mb-4">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform. If you log in using Facebook, we may also request access to other permissions related to your account, such as your friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission.</p>
                        <p className="mb-4">We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                        <p className="mb-2 italic">In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
                        <p className="mb-4">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
                        <p className="mb-4">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                        <p className="mb-2 italic">In Short: We aim to protect your personal information through a system of organisational and technical security measures.</p>
                        <p className="mb-4">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                        <p className="mb-2 italic">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
                        <p className="mb-4">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:care@meeteira.com" className="text-blue-600 hover:underline">care@meeteira.com</a>.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                        <p className="mb-2 italic">In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>

                        <p className="mb-2 font-medium">Withdrawing your consent:</p>
                        <p className="mb-4">If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
                        <p className="mb-4">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

                        <p className="mb-2 font-medium">Account Information</p>
                        <p className="mb-2">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Log in to your account settings and update your user account.</li>
                            <li>Contact us using the contact information provided.</li>
                        </ul>
                        <p className="mb-4">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
                        <p className="mb-4">If you have questions or comments about your privacy rights, you may email us at <a href="mailto:care@meeteira.com" className="text-blue-600 hover:underline">care@meeteira.com</a>.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                        <p className="mb-4">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                        <p className="mb-2 italic">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                        <p className="mb-4">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                        <p className="mb-4">If you have questions or comments about this notice, you may email us at <a href="mailto:care@meeteira.com" className="text-blue-600 hover:underline">care@meeteira.com</a> or contact us by post at:</p>
                        <address className="not-italic mb-4">
                            Athams - UDYAM-MH-34-0065373<br />
                            Maharashtra 411021<br />
                            India
                        </address>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
                        <p>You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="mailto:care@meeteira.com" className="text-blue-600 hover:underline">care@meeteira.com</a>.</p>
                    </section>

                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
