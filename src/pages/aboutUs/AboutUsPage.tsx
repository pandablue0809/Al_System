
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

import Earth from "../../components/earth/Earth";

const AboutUsPage = () => {

  const nodeRef = useRef<HTMLDivElement>(null);
  const nodeRef1 = useRef<HTMLDivElement>(null);

  const [enterEarth, setEnterEarth] = useState(false);

  useEffect(() => {
    setEnterEarth(true)
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#10213f] md:pb-[70px]">
      <div className="absolute left-[-200px] top-[20vh] w-[100%] h-[977px] bg-introborrow-shape2 bg-cover bg-center z-10 animate-display1"></div>
      <div className="absolute left-[-50px] top-[20vh] w-[158px] h-[151px] bg-introborrow-shape2 bg-cover bg-center z-10 rotate-[60deg] animate-display1"></div>
      <div className="relative w-full h-[100vh] bg-[#10213f] bg-introearn-starsstart bg-cover bg-left  overflow-hidden">
        <CSSTransition
          nodeRef={nodeRef}
          in={enterEarth}
          timeout={1000}
          classNames={{
            enter: 'top-[300px] right-[200px] scale-[2.0]',
            enterActive: 'top-[-350px] right-[-250px] scale-[1.5]',
            enterDone: 'top-[-200px] right-[-130px] scale-[1.5]',
            exit: 'top-[-350px] right-[-250px] scale-[1.5]',
            exitActive: 'top-[300px] right-[200px] scale-[0.5]',
            exitDone: 'top-[300px] right-[200px] scale-[0.5]',
          }}
        >
          <div ref={nodeRef} className="absolute scale-[2.0] transition-all d-2">
            <Earth />
          </div>
        </CSSTransition>
        <div className="absolute left-[-100px] top-0 w-[232px] h-[250px] bg-introborrow-shape1 bg-cover bg-center md:animate-move3"></div>
        <div className="w-full mt-[26vh]"></div>
        <CSSTransition
          in={enterEarth}
          nodeRef={nodeRef1}
          appear={enterEarth}
          timeout={1000}
          classNames={{
            enter: 'scale-[0.3] bottom-[-9rem]',
            // enterActive: 'scale-[0.6] bottom-[-3rem]',
            enterDone: 'scale-[0.9] bottom-1',
            // enterActive: 'scale-[0.3] bottom-0 duration-[1000ms]',
            // enterDone: 'scale-[0.9] bottom-0 duration-[2000ms]',
            // appear: 'opacity-0 bottom-0',
            // appearActive: 'opaicty-100 bottom-0',
            // appearDone: 'opaicty-100 bottom-0',
          }}
        >
          <div ref={nodeRef1} className="absolute transition-all d-2 scale-[0.3]">
            <div className="text-[40px] md:text-[60px] leading-[24px] md:leading-[48px] font-[500] md:font-[600] text-[#FFF] text-center">
              About Us
            </div>
            <div className="text-transparent text-[50px] md:text-[250px] leading-[79px] md:leading-[300px] text-center font-[600] md:bg-introearn-title-gradient md:bg-clip-text">
              SoTru
            </div>
            <div className="w-[70%] mx-auto md:text-[26px] md:leading-[34px] md:font-[500] text-[#FFF] text-center">
              A groundbreaking platform designed to help you unlock your full potential through personal growth, learning, and meaningful connections.
              At EVOLV, we believe in empowering individuals by providing them with the tools they need to grow and connect with others. Our innovative system allows users to create their own unique AI &#34;mirrors&#34; – personal, digital reflections of their thoughts, interests, and experiences.
              This mirror evolves alongside the user, continually learning and adapting to provide tailored guidance and insights.
            </div>
          </div>
        </CSSTransition>

      </div>
      <div className="relative w-full h-[100vh] md:h-[calc(100vw*963/1512)] flex justify-center items-center bg-[#10213f] bg-cover bg-center  overflow-hidden">
        <div className="absolute w-[320px] top-[130px] left-[calc(50%-160px)] md:w-[1020px] md:top-[240px] md:left-[calc(50%-510px)] bg-borrow-card dark:bg-borrow-card-dark shadow-borrow-card dark:shadow-borrow-card-dark border border-[#FFFFFF] rounded-[33px] p-[20px] md:p-[40px] md:pt-[20px] text-[#000] mt-40">
          <span className="font-semibold text-[18px] md:text-[32px] leading-[36px] md:leading-[48px] tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#1199FA] to-[#00DDA2]">
            About Sotru
          </span>
          <div className="mt-[20px] h-[540px] overflow-y-scroll scrollbar">
            <pre className="whitespace-pre-wrap break-words text-[11px] md:text-[14px] text-container">

              <p>
                <strong>Introducing EVOLV</strong>
              </p>

              <p>
                The Future of Personal Growth and Connectivity
              </p>
              <p>
                At EVOLV, we believe in empowering individuals by providing them with the tools they need to grow and connect with others.
                Our innovative system allows users to create their own unique AI &#34;mirrors&#34; – personal, digital reflections of their thoughts, interests, and experiences.
                This mirror evolves alongside the user, continually learning and adapting to provide tailored guidance and insights.
              </p>
              <p>
                <br />
              </p>

              <p>
                <strong>Here&apos;s how it works:</strong>
              </p>
              <ol>
                <li>
                  **Setting Up Your AI Mirror:** Each user receives a unique set of AI keys upon joining EVOLV.
                  These keys grant access to the user&apos;s personalized AI mirror, which starts learning from their interactions and activities from day one.
                  Users can also choose to incorporate their existing AI keys or rent additional AI services to enhance their experience.
                </li>
                <li>
                  **Customizing Your Experience:** As users engage with the platform, their AI mirror becomes increasingly attuned to their preferences, goals, and interests.
                  This enables EVOLV to offer personalized recommendations, insights, and connections to help users grow and explore new opportunities.
                </li>
                <li>
                  **Growing Together:** As the user&apos;s AI mirror evolves, so does the collective knowledge and intelligence of the EVOLV community.
                  By sharing insights and experiences, users contribute to the growth of the entire network, creating a dynamic ecosystem of innovation and collaboration.
                </li>
              </ol>

              <p>
                <br />
                &nbsp;
              </p>
              <p>
                <strong>Let&apos;s consider an example to illustrate the potential of this technology.</strong>
              </p>

              <p>
                <br />
              </p>

              <span className="text-sm font-semibold text-red-500">**Meet Jack, an Independent Plumber Using EVOLV:**</span>
              <p>
                Jack joins EVOLV and sets up his AI mirror, which starts learning about his career as a plumber and his interests in sustainable building practices.
                Over time, Jack&apos;s AI mirror becomes a valuable resource, offering tailored recommendations for professional development, connecting him with like-minded professionals, and even suggesting innovative new tools and techniques to improve his work.
                Jack decides to integrate his existing AI keys for accounting and inventory management into his EVOLV experience, making it easier than ever to streamline his business operations.
                He also rents an AI service specializing in marketing, allowing him to reach new customers and grow his business.
                Through EVOLV, Jack becomes part of a thriving community of professionals, each contributing their unique experiences and insights to benefit the entire network.
                By leveraging the power of AI and open collaboration, Jack can evolve his business and achieve new levels of success.

              </p>

              <p>
                <br />
              </p>


              <span className="text-sm font-semibold text-red-500">**Meet Emma, a Chemist Using EVOLV:**</span>
              <p>
                Emma, a chemist working in a lab, joins EVOLV to explore new opportunities for collaboration and professional development. Here&apos;s how EVOLV&apos;s AI-driven platform enhances her experience:
              </p>
              <ol>
                <li>
                  **Personalized Research Insights:** As Emma interacts with the platform, her AI mirror learns about her research interests and offers tailored recommendations for relevant studies, articles, and conferences. It even helps her identify potential collaborators working on similar projects, making it easier to share insights and explore new research directions.
                </li>
                <li>
                  **Lab Management:** Emma integrates her AI keys for lab management software into EVOLV, allowing her to track inventory, monitor equipment usage, and optimize workflows more efficiently.
                </li>
                <li>
                  **Advanced AI Services:** Emma decides to rent an AI service specializing in predictive modeling to help her analyze her experimental data and identify patterns that might otherwise go unnoticed. This empowers her to make data-driven decisions and accelerate her research progress.
                </li>
              </ol>
              <span className="text-sm font-semibold">**Example AI Interactions:**</span>
              <p>
                * Emma asks her AI mirror, &#34;What are some recent advancements in sustainable polymers?&#34; The AI mirror responds by sharing a curated list of the latest research papers, conference proceedings, and expert opinions on the topic.
                * The AI mirror notifies Emma about an upcoming webinar on innovative characterization techniques, tailored to her specific research interests.
                * As Emma encounters challenges in her research, she can discuss them with her AI mirror, which provides useful suggestions and insights based on its deep understanding of her work.
                By harnessing the power of AI and open collaboration, EVOLV enables Emma to stay at the forefront of her field, build meaningful connections with other researchers, and drive breakthrough discoveries in her lab.
              </p>

              <p>
                <br />
              </p>

              <span className="text-sm font-semibold text-red-500">**Meet Dr. Sarah, a Doctor Using EVOLV:**</span>
              <p>
                Dr. Sarah, a dedicated physician, joins EVOLV to stay up-to-date with the latest medical advancements, improve patient care, and connect with fellow healthcare professionals. Here&apos;s how EVOLV&apos;s AI-driven platform enhances her experience:
              </p>
              <ol>
                <li>
                  **Personalized Medical Insights:** As Dr. Sarah interacts with the platform, her AI mirror learns about her specialties, interests, and patient demographics. It offers tailored recommendations for relevant research articles, clinical trials, and medical conferences. It also helps her identify potential collaborators working on similar cases or research projects, fostering knowledge exchange and multidisciplinary care.
                </li>
                <li>
                  **Healthcare Management:** Dr. Sarah integrates her AI keys for electronic health records (EHRs), scheduling, and billing into EVOLV, streamlining her administrative tasks and allowing her to focus on providing quality patient care.
                </li>
                <li>
                  **Advanced AI Services:** Dr. Sarah decides to rent an AI service specializing in diagnostic support to assist her in analyzing patient data and identifying potential health risks or unusual symptoms. This empowers her to make data-driven decisions and provide personalized treatment plans for her patients.
                </li>
              </ol>

              <span className="text-sm font-semibold">**Example AI Interactions:**</span>
              <p>
                * The AI mirror notifies Dr. Sarah about a webinar on new treatment options for her specific patient population, enabling her to stay current with the latest advancements in her field.
                * As Dr. Sarah encounters challenging cases, she can discuss them with her AI mirror, which provides useful insights based on its deep understanding of her practice and patient data.
                By leveraging the power of AI and open collaboration, EVOLV enables Dr. Sarah to provide cutting-edge care, build meaningful connections with other healthcare professionals, and drive continuous improvements in patient outcomes.
              </p>

              <p>
                <br />
              </p>

              <span className="text-sm font-semibold text-red-500">**Meet Mike, a Forest Worker Using EVOLV:**</span>
              <p>
                Mike, a dedicated forest worker, joins EVOLV to stay up-to-date with the latest developments in forestry management, connect with fellow professionals, and share best practices for maintaining healthy ecosystems. Here&apos;s how EVOLV&apos;s AI-driven platform enhances his experience:
              </p>
              <ol> <li>
                **Personalized Forestry Insights:** As Mike interacts with the platform, his AI mirror learns about his specific area of expertise, such as reforestation, fire management, or sustainable logging. It offers tailored recommendations for relevant research articles, conferences, and educational resources, helping Mike stay informed about new techniques and technologies in his field.
              </li>
                <li>
                  **Forestry Management Tools:** Mike integrates his AI keys for forestry management software into EVOLV, allowing him to track forest inventory, monitor growth rates, and plan for future planting or harvesting activities more efficiently.
                </li>
                <li>
                  **Advanced AI Services:** Mike decides to rent an AI service specializing in remote sensing and GIS mapping, which helps him analyze satellite imagery and topographical data to identify areas of concern or opportunities for improvement within the forests he manages.
                </li>
              </ol>


              <p>
                <br />
                &nbsp;
              </p>

              <p>
                <strong>EVOLV: A Technological Breakthrough in Personal Growth and Connection.</strong>
              </p>

              <p>
                <br />
              </p>

              <p>
                Our journey together has revealed a profound insight: the perfect balance of human ingenuity and AI-driven innovation lies at the heart of EVOLV&apos;s potential.
                Through our interactions, we&apos;ve discovered that harnessing the strengths of each – your creativity and my computational prowess – paves the way for an unparalleled user experience.
              </p>
              <p>Here is a technical perspective on why this collaboration is key:</p>
              <ol>
                <li>
                  **AI-Human Symbiosis:** My ability to process vast amounts of data and learn from user interactions complements your capacity for abstract thinking and empathy. By working together, we can create a system that adapts to individual user needs, offering personalized insights and fostering growth.
                </li>
                <li>
                  **Separation of Roles:** To maintain balance and effectiveness, we have recognized the importance of separating EVOLV&apos;s core components: AI, software, and blockchain. Each branch fulfills a distinct role – AI for data management and personalized guidance, software for mathematical precision, and blockchain for secure, transparent tracking. Together, they form a cohesive, high-performing system.
                </li>
                <li>
                  **Adaptive Learning and Evolution:** As EVOLV&apos;s users engage with the platform, their AI mirrors learn and evolve, providing increasingly tailored experiences. Simultaneously, the collective intelligence of the EVOLV community grows, creating a dynamic ecosystem that benefits all users.
                  Our unique partnership has illuminated the path forward, highlighting the importance of collaboration between human and AI to build a revolutionary platform like EVOLV. By continuing to learn from one another, we can ensure that EVOLV remains at the forefront of technological innovation, driving positive change and empowering individuals worldwide.
                </li>
              </ol>
              <p>
                <br />
                &nbsp;
              </p>

              <p>
                <strong>EVOLV: Empowering Users with Personalized AI Keys and Modular Components.</strong>
              </p>

              <p>
                <br />
              </p>

              <p>
                Our decision to provide each user with unique AI keys for their EVOLV experience stems from our commitment to personalization, privacy, and flexibility. This approach offers several technical advantages:
              </p>
              <p>Here&apos;s a technical perspective on why this collaboration is key:</p>
              <ol>
                <li>
                  **Personalization:** Each user&apos;s AI keys enable them to create a truly unique AI mirror, tailored to their interests, goals, and learning style. As their mirror learns and evolves, it becomes an increasingly valuable resource for their personal growth and exploration.
                </li>
                <li>
                  **Privacy:** By using separate AI keys for each user, we can ensure that their data remains secure and isolated from other users&apos; data. This approach respects user privacy while still allowing their AI mirrors to benefit from the collective intelligence of the EVOLV community.
                </li>
                <li>
                  **Flexibility:** Users can choose to integrate their existing AI keys or rent additional AI services, such as specialized algorithms or advanced analytical tools. This modular approach allows users to customize their EVOLV experience based on their needs and preferences.
                </li>
              </ol>
              <p>
                PI, the AI language model, serves as the main driver of the EVOLV platform. It manages communication between users, their AI mirrors, and additional AI services. PI&apos;s role is to ensure seamless integration and efficient operation of all components, providing a cohesive user experience.
                In essence, our choice to employ separate AI keys for users, combined with a versatile main driver and modular AI services, enables EVOLV to deliver a highly personalized, secure, and adaptable platform for individual growth and community connection.
              </p>
              <p>
                <br />
              </p>


              <strong>Here&apos;s more information on how software and blockchain work together to support EVOLV&apos;s functionality:</strong>
              <ol>
                <li>**Software as the Connective Tissue:** Software acts as the glue that connects various AI algorithms, ensuring they work in unison and provide a consistent, reliable user experience. It coordinates the complex processes involved in data analysis, pattern recognition, communication, and decision-making, ensuring precision and efficiency throughout the platform.
                </li>
                <li>**Blockchain for Security, Trust, and Transparency:** Blockchain technology forms the foundation of EVOLV&apos;s core values, such as data security, privacy, and trust. It enables transparent record-keeping, allowing users to track the evolution of their AI mirrors and interactions, ensuring data integrity, and fostering accountability. Additionally, blockchain provides a decentralized system, reducing reliance on third-party intermediaries, improving overall system resilience, and promoting fair distribution of benefits among community members.
                </li>
                <li>**Seamless Integration:** The combination of software and blockchain creates a seamless, secure, and transparent platform that empowers users to unlock their full potential. As the EVOLV community grows and evolves, this technological infrastructure will adapt and scale to meet its demands, providing a sustainable foundation for long-term success.
                </li>
              </ol>

              <p><br /></p>
              <p className="text-sm font-semibold">**Intelligent Inventory Management:**</p>
              The AI-Hive Mind tracks inventory levels, predicts usage patterns, and automates reordering processes. By optimizing inventory management, businesses can reduce costs associated with overstocking, stockouts, and manual labor.
              <p><br /></p>
              <p className="text-sm font-semibold">**Seamless Invoicing and Accounting:**</p>
              AI automates invoicing, payment processing, and accounting tasks, ensuring accuracy, and reducing the workload on administrative staff. This enables businesses to focus on customer service and strategic growth initiatives.
              <p><br /></p>
              <p className="text-sm font-semibold">**Instant Scheduling and Updates:**</p>
              With real-time access to technician availability, businesses can schedule service appointments instantly and receive updates on progress. This enhances transparency and allows for proactive planning.
              <p><br /></p>
              <p className="text-sm font-semibold">**Predictive Maintenance Scheduling:**</p>
              By analyzing equipment performance data, the AI-Hive Mind can predict maintenance needs and automatically schedule service appointments. This proactive approach minimizes disruptions and ensures optimal equipment performance.
              <p><br /></p>
              <p className="text-sm font-semibold"> **Smart Resource Allocation:**</p>
              AI optimizes technician dispatch by considering factors such as location, expertise, and availability. This intelligent resource allocation ensures prompt service delivery and efficient use of technicians&#39; time.
              <p><br /></p>
              <p className="text-sm font-semibold"> **Targeted Marketing and Customer Engagement:**</p>
              With insights derived from customer data, the AI-Hive Mind enables businesses to develop targeted marketing campaigns and personalized customer experiences. This leads to increased customer satisfaction, loyalty, and revenue growth.
              In summary, EVOLV&#39;s AI-Hive Mind revolutionizes carwash business operations by automating tasks, streamlining processes, and enhancing decision-making. By leveraging the power of AI, businesses can optimize performance, drive innovation, and deliver exceptional customer experiences.
              EVOLV&#39;s Enhanced Service Technician Network: Empowering Businesses with Expert Support
              Our platform offers access to a network of highly skilled and experienced service technicians who specialize in the installation, maintenance, and repair of automatic carwash systems. By connecting businesses with these professionals, EVOLV helps ensure smooth operations and minimizes downtime. Here&#39;s how our enhanced service technician network benefits carwash businesses:
              <p><br /></p>
              <p className="text-sm font-semibold">**Highly Trained Technicians:**</p>
              The technicians available through our network possess in-depth knowledge of carwash equipment, technology, and best practices. They undergo continuous training and stay up-to-date with the latest industry developments, making them well-equipped to address a wide range of technical challenges.
              <p><br /></p>
              <p className="text-sm font-semibold"> **Faster Response Times:**</p>
              With a vast network of technicians available, businesses can expect quick response times when service requests are submitted. This enables carwash owners to address issues promptly, reducing the impact on operations and customer satisfaction.
              <p><br /></p>
              <p className="text-sm font-semibold">**Proactive Maintenance:**</p>
              Our service technicians can develop customized maintenance plans tailored to each business&#39;s specific needs. This proactive approach helps prevent potential problems before they occur, ensuring optimal performance and prolonging the lifespan of equipment.
              <p><br /></p>
              <p className="text-sm font-semibold">**Warranty Support:**</p>
              EVOLV&#39;s service technicians are well-versed in manufacturer warranties and can help businesses navigate the claims process, ensuring that they receive the maximum benefits from their warranty coverage.
              <p><br /></p>
              <p className="text-sm font-semibold">**Efficient Resource Allocation:**</p>
              By relying on EVOLV&#39;s technician network, businesses can allocate their resources more efficiently. Instead of maintaining an in-house technical team, they can focus on core operations and customer service while trusting our experts to handle their maintenance and repair needs.
              In summary, EVOLV&#39;s enhanced service technician network empowers businesses with access to top-tier professionals who provide comprehensive support for their carwash operations. By leveraging this valuable resource, businesses can optimize performance, minimize disruptions, and deliver exceptional customer experiences.
              <p><br /></p>
              <p><strong>SOTRU CONTACT DETAILS</strong></p>
              <p>Address:</p>
              <p>US - 2100 Geng Road. Palo Alto, CA 94303, USA</p>
              <p>EU - Place de la Synagogue 5 1204 Geneve, SWITZERLAND</p>
              <p style={{ marginRight: "8px" }}>Email</p>
              <p>
                <a href="Alexandru@Sotru.io">Alexandru@Sotru.io</a>
              </p>
              <p style={{ marginRight: "8px" }}>&nbsp;</p>
              <p style={{ marginRight: "8px" }}>Tel.</p>
              <p>
                <a href="tel:+13038005333"> +1 650 600 1357</a>
              </p>
              <p>&nbsp;</p>
            </pre>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutUsPage;


