import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/resume.module.css'

export default function Resume() {
  return (
    <>
      <head>
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
      </head>
      <body className={styles.body}>
        <section>
            <section>
            <header aria-label="Hannah Manfredi">
                <a href="https://hannahmanfredi.vercel.app/">
                    <g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" font-family="Montserrat-Regular, Montserrat" font-size="48" font-weight="normal">
                        <g id="Letter" transform="translate(-54.000000, -140.000000)" fill="#484848">
                            <text id="HANNAH-MANFREDI">
                                <tspan x="54.728" y="174">Hannah Manfredi</tspan>
                            </text>
                        </g>
                    </g>
                </a>
                <h1>Hannah Manfredi</h1>
                <h2>Software Engineer</h2>
                <hr />
            </header>
                <aside>
                    <section className={styles.contact}>
                        <h2>Contact</h2>
                        <ul className={styles.ul}>
                            <li>
                                <p><i className="fa fa-map-marker-alt" title="Location"></i> San Francisco, CA</p>
                            </li>
                            <li>
                                <p><i className="fa fa-phone" title="Cell phone"></i> <a href="tel:7072604190">(707) 260-4190</a></p>
                            </li>
                            <li>
                                <p><i className="fa fa-envelope" title="Email"></i> <a href="mailto:hmanfredi@gmail.com">hmanfredi@gmail.com</a></p>
                            </li>
                            <li>
                                <p><i className="fa fa-globe-americas" title="Website"></i> <a href="https://hannahmanfredi.vercel.app/">https://hannahmanfredi.vercel.app/</a></p>
                            </li>
                            <li>
                                <p><i className="fab fa-github" title="GitHub"></i> <a href="https://github.com/HannahManfredi">github.com/HannahManfredi</a></p>
                            </li>
                        </ul>
                    </section>
                    <section className={styles.skills}>
                        <h2>Skills</h2>
                        <ul className={styles.ul}>
                            <li><span>A/B Testing</span></li>
                            <li><span>UX/UI Design</span></li>
                            <li><span>Time management and hitting deadlines!</span></li>
                            <li><span>Languages: English, Spanish, Thai</span></li>
                        </ul>
                        <h2>Technologies</h2>
                        <ul className={styles.ul}>
                            <li><span><strong>Front End</strong>: Javascript, React.js, Redux, TypeScript, Next.js, Gatsby, Ghost, HTML5, CSS3</span></li>
                            <li><span><strong>Back End</strong>: Node.js, Python, GoLang, Rust, GraphQL, Express, GraphQL,  Neo4j, Sequelize, MySQL, PostgreSQL, MongoDb, CouchDb</span></li>
                            <li><span><strong>Tools</strong>: New Relic, DataDog, Redis, K6, Loader io, Gulp, CircleCI, GitKraken, pgAdmin, Trello, NGINX, Postman, Loader.io</span></li>
                            <li><span><strong>Testing</strong>: Mocha, Chai, Jest, supertest</span></li>
                            <li><span><strong>Deployment</strong>: Docker, AWS: EC2, s3</span></li>
                        </ul>
                    </section>
                </aside>
                <section>
                    <section>
                        <section className={styles.experience}>
                            <h2>Experience</h2>
                            <h3>SOFTWARE ENGINEERING APPLICATIONS</h3>
                            <ul className={styles.ul}>
                                <li>
                                    <span><a href="https://github.com/SDCmailto/SDC-CustomerReviews.git">MAILTO:</a></span><br></br>
                                    <span><em>POSTGRESQL, EXPRESS, REACT, NODE</em></span><br></br>
                                    <span><strong>Reviews microservice for an e-commerce company designed with service-oriented architecture</strong></span>
                                    <ul>
                                        <li>Engineered a script to seed a PostgreSQL database with 1 million products and their 40+ million reviews in under 12 minutes.</li>
                                        <li>Improved database querying response time from 88,045 milliseconds to 0.9 milliseconds by indexing PostgreSQL columns.</li>
                                        <li>Stress tested using New Relic and Loader.io after deployment
                                        and successfully increased traffic from 500 to 1000 requests per second with 0% error rate and less than 100 ms latency response by leveraging horizontal scaling with NGINX and caching with Redis.</li>
                                    </ul>
                                </li>
                                <br></br>
                                <li>
                                    <span><a href="https://github.com/ArrrrWeBeAnneBonny/booking.git">ANNEBONNY:</a></span><br></br>
                                    <span><em>MONGODB, EXPRESS, REACT, NODE</em></span><br></br>
                                    <span><strong>Booking microservice for a campsite marketplace app designed with service-oriented architecture</strong></span>
                                    <ul>
                                        <li>Created full-stack application utilizing microservices to display booking component using RESTful APIs.</li>
                                        <li>Increased page loading speed by 20% by enabling Express compression middleware.</li>
                                        <li>Deployed microservice, database, and reverse proxy to AWS EC2
                                        instances.</li>
                                        <li>Adhered to Agile methodologies, attending weekly scrums, and programming with a sprint/MVP focus.</li>
                                    </ul>
                                </li>
                                <h3>PROFESSIONAL EXPERIENCE</h3>
                                <li>
                                    <header>
                                        <h3>Front End Software Engineer</h3>
                                        <time>August, 2021 - Current</time><br></br>
                                    </header>
                                    <span>Udacity</span><br></br>
                                    <span>San Francisco, Ca</span>
                                </li>
                                <li>
                                    <header>
                                        <h3>Founder</h3>
                                        <time>2020 - 2021</time><br></br>
                                        <span><a href="https://rabbitrabbitplantnursery.com/">Rabbit Rabbit Plant Nursery</a></span>
                                        <p className={styles.p}> I created Rabbit Rabbit Gardening Co—a zero-plastic plant nursery specializing in herbs, fruits, veggies and flowers that thrive in the Richmond neighborhood of San Francisco where I am based.</p>
                                    </header>
                                </li>
                                <li>
                                    <header>
                                        <h3>Independent Tutor</h3>
                                        <time>2020 - 2021</time>
                                    </header>
                                    <span>Tutored K-12 Students in Math, Reading, Writing, Art and Chess</span>
                                </li>
                                <li>
                                <h3>BackerKit, Crowdfunding CRM Startup</h3>
                                <span>San Francisco, Ca</span>
                                    <header>
                                        <h3><em>Key Account Manager</em></h3>
                                        <time>2019 – 2020</time>
                                    </header>
                                        <ul>
                                        <li>As the highest-performing Sales Executive at BackerKit, I cultivated relationships with the top 20% of our customer base and I consistently achieved avg. 211% Quota Attainment.</li>
                                        <li>I worked closely with the Product, Engineering and Customer Success teams in order to assist new feature development and hit our targets for customer acquisition and retainment.</li>
                                        </ul>
                                    <header>
                                        <h3><em>Senior Account Executive</em></h3>
                                        <time>2018 – 2019</time>
                                    </header>
                                        <ul>
                                            <li>Major account wins include: Peak Design, Nomatic, HYPER, WeatherFlow, ORU, BioLite, Sphero, Sonny, LUMI, Middara, Matrix Smartwatch, EufyCam, Revols, Quartz, and Monkiii (all Million Dollar + Crowdfunding Campaigns).</li>
                                            <li>Avg. contract value was $500K.</li>
                                        </ul>
                                    <header>
                                        <h3><em>Account Executive</em></h3>
                                        <time>2016 – 2018</time>
                                    </header>
                                        <ul>
                                            <li>Traveled globally to conferences in order to establish relationships with crowdfunding creators from every category, including tabletop games, appliances and outdoor gear.</li>
                                            <li>Avg. contract value was $50K.</li>
                                        </ul>
                                </li>
                                <li>
                                    <header>
                                        <h3>Development Director</h3>
                                        <time>2014 – 2016</time>
                                    </header>
                                    <span>Headstand, K-12 Yoga Startup</span><br></br>
                                    <span>San Francisco, Ca</span>
                                    <ul>
                                        <li>I conducted and tracked new donor and corporate sponsorship outreach and managed an existing pipeline of 500+ International donors.</li>
                                        <li>I managed all strategic communications with donors, school partners and volunteers (whom I recruited and coordinated).</li>
                                        <li>I organized the Annual Gala and Auction at the St Regis in San Francisco, and taught yoga to K-12 students, teachers and parents on-site at schools and events around the Bay Area.</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <h3>Executive Assistant</h3>
                                        <time>2013 – 2014</time>
                                    </header>
                                    <span>The Slanted Door Group</span><br></br>
                                    <span>San Francisco, Ca</span>
                                    <ul>
                                        <li>I was the right-hand woman to Chef-Entrepreneur, Charles Phan!</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <h3>Fellowship, Publications Department</h3>
                                        <time>2012 - 2013</time>
                                    </header>
                                    <span>The Museum of Modern Art</span><br></br>
                                    <span>NYC, NY</span>
                                    <ul>
                                        <li>I performed daily editorial tasks including copywriting, editing, layout design and checking artist rights and permissions for the exhibition catalogue, “The Century of the Child”.</li>
                                        <li>I published my reviews of MoMA exhibitions, publications and screenings on the MoMA blog.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.education}>
                            <h2>Education</h2>
                                <ul>
                                    <li>
                                        <div>
                                            <h3>Advanced Software Engineering Immersive Program</h3>
                                            <time>July '20 – Sept '21</time>
                                        </div>
                                        <div>
                                            <span><strong>Hack Reactor at Galvanize</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>UX/UI Certificate Program</h3>
                                            <time>Aug '18 – Dec '19</time>
                                        </div>
                                        <div>
                                            <span><strong>UC Berkeley Extension</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>RYT 500 Hr. Yoga Alliance Certified Teacher Training</h3>
                                            <time>2013 – 2014</time>
                                        </div>
                                        <div>
                                            <span><strong>POST, Wellness by Design</strong></span><br></br>
                                            <span><strong>Petaluma, CA</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>B.A., Visual and Critical Studies</h3>
                                            <time>Sept '08 – May '12</time><br></br>
                                            <span><em>Presidential Merit Scholarship Recipient</em></span><br></br>
                                            <span><em>Concurrently enrolled in the Theater and Performance Studies Dept. at the University of Chicago</em></span>
                                        </div>
                                        <div>
                                            <span><strong>The School of the Art Institute of Chicago</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>Rotary Exchange Scholar</h3>
                                            <time>2005 – 2006</time>
                                        </div>
                                        <div>
                                            <span><strong>Bangkok, Thailand</strong></span>
                                        </div>
                                    </li>
                                </ul>
                        </section>
                        <section className={styles.references}>
                            <h2>References</h2>
                            <address>
                                <strong>Ms. Meyvi Medina-Magarino</strong>
                                <br></br>React Developer, NomiSo Inc
                                <br></br>(702)250-1355
                            </address>
                            <br></br>
                            <address>
                                <strong>Mr. Seun Omutunde</strong>
                                <br></br>Summer Associate at Tishman Speyer, NY
                                <br></br>(901)351-8776
                                <br></br>seuno25@gmail.com
                            </address>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <br></br>
        <h4>(Typeset in HTML &amp; CSS)<br/></h4>
        <script type="text/javascript" src="./index.js"></script>
    </body>
      <h2>
        <Link href="/">
          <a className={styles.a}>Back to home</a>
        </Link>
      </h2>
    </>
  )
}