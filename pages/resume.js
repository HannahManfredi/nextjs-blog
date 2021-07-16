import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/resume.module.css'

export default function Resume() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="google" content="notranslate" />
        <meta name="author" content="Hannah Manfredi" />
        <meta name="subject" content="A really good software engineer you should hire" />
        <meta name="keywords" content="coding, developing, hacking" />
        <meta name="date" content="2021-07-15" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Cardo|Montserrat:300,400,500&amp;subset=latin-ext" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" integrity="sha256-oSrCnRYXvHG31SBifqP2PM1uje7SJUyX0nTwO2RJV54=" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <link rel="stylesheet" type="text/css" href="./typography.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="./screen.css" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <title>Hannah Manfredi Resume</title>
      </Head>
      <body className={styles.body}>
        <section id="save">
            <section class="sheet">
                <aside>
                    <section class="contact">
                        <h6>Contact</h6>
                        <ul>
                            <li>
                                <p><i class="fa fa-map-marker-alt" title="Location"></i> San Francisco, CA</p>
                            </li>
                            <li>
                                <p><i class="fa fa-phone" title="Cell phone"></i> <a href="tel:7072604190">(707) 260-4190</a></p>
                            </li>
                            <li>
                                <p><i class="fa fa-envelope" title="Email"></i> <a href="mailto:hmanfredi@gmail.com">hmanfredi@gmail.com</a></p>
                            </li>
                            <li>
                                <p><i class="fa fa-globe-americas" title="Website"></i> <a href="https://hannahmanfredi.vercel.app/">https://hannahmanfredi.vercel.app/</a></p>
                            </li>
                            <li>
                                <p><i class="fab fa-github" title="GitHub"></i> <a href="https://github.com/HannahManfredi">github.com/HannahManfredi</a></p>
                            </li>
                        </ul>
                    </section>
                    <section class="skills">
                        <h6>Technologies</h6>
                        <ul>
                            <li><span>Front End: Javascript, React.js, Next.js, Gatsby, Ghost, HTML5, CSS3, jQuery</span></li>
                            <li><span>Back End: Node.js, Express JS, NPM, Sequelize, MySQL, PostgreSQL, MongoDb, CouchDb, Axios</span></li>
                            <li><span>Tools: New Relic, Redis, K6, Loader io, Gulp, TravisCI, GitKraken, pgAdmin, Trello, NGINX, Webpack, Babel, Postman, Loader.io, Github</span></li>
                            <li><span>Testing: Mocha, Chai, Jest, supertest</span></li>
                            <li><span>Deployment: Docker, AWS: EC2, s3</span></li>
                            <li><span>A/B Testing</span></li>
                        </ul>
                    </section>
                    <section class="references">
                        <h6>References</h6>
                        <address>
                            Ms. Meyvi Medina-Magarino<br />
                            React Developer, NomiSo Inc<br />
                            (702)250-1355
                        </address>
                        <address>
                            Mr. Seun Omutunde<br />
                            Summer Associate at Tishman Speyer, NY<br />
                            (901)351-8776
                            seuno25@gmail.com
                        </address>
                        <p>Typeset in HTML &amp; CSS<br />
                        </p>
                    </section>
                </aside>
                <section>
                    <header class="name" aria-label="Hannah Manfredi">
                        <a href="https://hannahmanfredi.vercel.app/">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Montserrat-Regular, Montserrat" font-size="48" font-weight="normal">
                              <g id="Letter" transform="translate(-54.000000, -140.000000)" fill="#484848">
                                  <text id="HANNAH-MANFREDI">
                                      <tspan x="54.728" y="174">Hannah Manfredi</tspan>
                                  </text>
                              </g>
                          </g>
                        </a>
                        <h6>Software Engineer</h6>
                        <hr />
                    </header>
                    <section>
                        <section class="summary">
                            <h6>Summary</h6>
                            <p>Deadline-oriented Software Engineer, Voice Interaction Designer and Farmer—I love going down rabbit holes!
                            </p>
                        </section>
                        <section class="experience">
                            <h6>Experience</h6>
                            <ol>
                                <li>
                                    <header>
                                        <p class="sanserif">SOFTWARE ENGINEERING APPLICATIONS</p>
                                        <time>2021</time>
                                    </header>
                                    <span>MAILTO:<a href="HTTPS://GITHUB.COM/SDCMAILTO/SDC-CUSTOMERREVIEWS"></a></span>
                                    <span>POSTGRESQL, EXPRESS, REACT, NODE</span>
                                    <span>Reviews microservice for an e-commerce company designed with systems-oriented architecture</span>
                                    <ul>
                                        <li>Engineered a script to seed a PostgreSQL database with 1 million products and their 40+ million reviews in under 12 minutes.</li>
                                        <li>Improved database querying response time from 88,045 milliseconds to 0.9 milliseconds by indexing PostgreSQL columns.</li>
                                        <li>Stress tested using New Relic and Loader.io after deployment
                                        and successfully increased traffic from 500 to 1000 requests per second with 0% error rate and less than 100 ms latency response by leveraging horizontal scaling with NGINX and caching with Redis.</li>
                                    </ul>
                                    <span>ANNEBONNY:<a href="HTTPS://GITHUB.COM/ARRRRWEBEANNEBONNY/BOOKING"></a></span>
                                    <span>MONGODB, EXPRESS, REACT, NODE</span>
                                    <span>Booking microservice for a campsite marketplace app designed with systems-oriented architecture</span>
                                    <ul>
                                        <li>Created full-stack application utilizing microservices to display booking component using RESTful APIs.</li>
                                        <li>Increased page loading speed by 20% by enabling Express compression middleware.</li>
                                        <li>Deployed microservice, database, and reverse proxy to AWS EC2
                                        instances.</li>
                                        <li>Adhered to Agile methodologies, attending weekly scrums, and programming with a sprint/MVP focus.</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">Founder</p>
                                        <time>2020 - 2021</time>
                                    </header>
                                    <span>Rabbit Rabbit Plant Nursery</span>
                                    <span><a href="https://rabbitrabbitplantnursery.com/">Rabbit Rabbit Plant Nursery</a></span>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">Independent  Tutor</p>
                                        <time>2020 - 2021</time>
                                    </header>
                                    <span>Tutored K-6 Math, Reading, Writing, Art and Chess</span>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">KEY ACCOUNT MANAGER</p>
                                        <time>2016 – 2020</time>
                                    </header>
                                    <span>BackerKit, CROWDFUNDING CRM STARTUP
                                    </span>
                                    <ul>
                                        <li>DAs the highest-performing Sales Executive at BackerKit, I cultivated relationships with the top 20% of our customer base and I consistently achieved avg. 211% Quota Attainment.</li>
                                        <li>I worked closely with the Product, Engineering and Customer Success teams in order to assist new feature development and hit our targets for customer acquisition and retainment.</li>
                                        <li>Major account wins include: Peak Design, Nomatic, HYPER, WeatherFlow, ORU, BioLite, Sphero, Sonny, LUMI, Middara, Matrix Smartwatch, EufyCam, Revols, Quartz, and Monkiii (all Million Dollar + Crowdfunding Campaigns).</li>
                                        <li>Avg. contract value was $500K.</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">Development Director</p>
                                        <time>2014 – 2016</time>
                                    </header>
                                    <span>Headstand, K-12 YOGA STARTUP</span>
                                    <ul>
                                        <li>I conducted and tracked new donor and corporate sponsorship outreach and managed an existing pipeline of 500+ International donors.</li>
                                        <li>I managed all strategic communications with donors, school partners and volunteers (whom I recruited and coordinated).</li>
                                        <li>I organized the Annual Gala and Auction at the St Regis in San Francisco, and taught yoga to K-12 students, teachers and parents on-site at schools and events around the Bay Area.</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">FELLOWSHIP, PUBLICATIONS DEPARTMENT</p>
                                        <time>2012 - 2013</time>
                                    </header>
                                    <span>The Museum of Modern Art, NYC</span>
                                    <ul>
                                        <li>I performed daily editorial tasks including copywriting, editing, layout design and checking artist rights and permissions for the exhibition catalogue, “The Century of the Child”.</li>
                                        <li>I published my reviews of MoMA exhibitions, publications and screenings on the MoMA blog.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>
                        <section class="education">
                            <h6>Education</h6>
                            <ol>
                                <li>
                                    <div>
                                        <p class="sanserif">Advanced Software Engineering Immersive</p>
                                        <time>July '20 – Sept '21</time>
                                    </div>
                                    <div>
                                        <span>Hack Reactor</span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p class="sanserif">UX/UI</p>
                                        <time>Aug '18 – Dec '19</time>
                                    </div>
                                    <div>
                                        <span>UC Berkeley Extension</span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p class="sanserif">B.A., Visual & Critical Studies</p>
                                        <time>Sept '08 – May '12</time>
                                    </div>
                                    <div>
                                        <span>The School of the Art Institute of Chicago</span>
                                    </div>
                                </li>
                            </ol>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <script type="text/javascript" src="./index.js"></script>
    </body>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}