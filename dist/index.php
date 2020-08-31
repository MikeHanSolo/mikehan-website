<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/MyFontsWebfontsKit.css" />
  <link rel="stylesheet" href="css/main.css" />
  <title>Mike Han | Product Manager</title>
</head>

<body>
  <nav id="main-nav">
    <div class="logo">
      <div class="circle-headshot"></div>
    </div>
    <ul>
      <li><a href="#header-home" class="current">Intro</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#experiences">Experience</a></li>
    </ul>
    <ul>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="ham-menu-wrap">
      <input type="checkbox" class="toggle">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="ham-menu">
        <div>
          <div>
            <ul id="ham-menu-links">
              <li><a href="#header-home">Intro</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experiences">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Intro -->
  <section id="header-home">
    <div id="particles-js">
      <div id="header-content">
        <h1>
          <div>
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>'</span>
            <span>m</span>
          </div>
          <div>
            <span>M</span>
            <span>i</span>
            <span>k</span>
            <span>e</span>
          </div>
        </h1>
        <p>
          I am a
          <span class="txt-type" data-wait="3000" data-words='["Product Manager..", "Data Scientist..", "proud Chicagoan..", "NU Wildcat.."]'></span>
        </p>
        <a href="#experiences" class="btn-main">To Experience</a>
      </div>
      <div id="scroll-indicator">
        <div class="arrows">
          <i class="las la-angle-down"></i>
          <i class="las la-angle-down"></i>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="text-center">
    <div class="container">
      <div id="about-intro">
        <div class="circle-headshot"></div>
        <h2 class="section-title">
          MY SPECIALTY IS
        </h2>
        <div class="divider-line"></div>
        <p class="lead">
          Helping companies build and grow great digital products through
          data-driven decision making. I work cross-functionally every day with
          talented engineers and designers to develop industry-leading SaaS
          fintech products that bring modern and secure online banking
          experiences for millions of consumers.
        </p>
      </div>
      <div class="specials">
        <div class="functions">
          <div id="functions-intro">
            <h2>Functional Expertise</h2>
            <div class="divider-line"></div>
          </div>
          <div class="specials-content">
            <div>
              <i class="las la-directions"></i>
              <h3>Product Strategy</h3>
            </div>
            <p>
              Developing market assessments, conducting customer interviews,
              relationship management, and defining and tracking success
              metrics through automated dashboards
            </p>
          </div>
          <div class="specials-content">
            <div>
              <i class="las la-wrench"></i>
              <h3>Product Development</h3>
            </div>
            <p>
              Running design sprints, allocating engineering resources, and
              translating business-to-technical requirements
            </p>
          </div>
          <div class="specials-content">
            <div>
              <i class="las la-chart-bar"></i>
              <h3>Advanced Analytics & BI</h3>
            </div>
            <p>
              Customer attrition modeling, A/B testing, direct mail uplift
              modeling, text classification analysis of online reviews, and
              building reporting dashboards
            </p>
          </div>
          <div class="specials-content">
            <div>
              <i class="lab la-connectdevelop"></i>
              <h3>Data Engineering</h3>
            </div>
            <p>
              Building ETL for data warehouse and data governance strategy
            </p>
          </div>
        </div>
        <div class="industries">
          <div id="industries-intro">
            <h2>Industry Expertise</h2>
            <div class="divider-line"></div>
          </div>
          <div class="specials-content">
            <div>
              <i class="las la-piggy-bank"></i>
              <h3>Financial Services</h3>
            </div>
            <p>
              Digital product originations and servicing for personal loan
              products. Managing marketing channels and building tools for
              improved campaign conversion tracking. Large-scale security
              infrastructure migrations
            </p>
          </div>
          <div class="specials-content">
            <div>
              <i class="las la-user-shield"></i>
              <h3>Insurance</h3>
            </div>
            <p>
              Predictive modeling for sales agents attrition, data
              infrastructure revamps, and business intelligence
              transformations
            </p>
          </div>
          <div class="specials-content">
            <div>
              <i class="las la-stethoscope"></i>
              <h3>Healthcare</h3>
            </div>
            <p>
              Data governance program strategy for improving data quality
              and organizational data competencies for hospital systems
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills">
    <div class="container">
      <h2 class="section-title">
        I consider myself advanced with the following technologies:
      </h2>
      <ul class="skills-list">
        <li>
          <div><img src="img/tech/python.png" alt="Python" /></div>
        </li>
        <li>
          <div><img src="img/tech/pandas.png" alt="Pandas" class="land" /></div>
        </li>
        <li>
          <div><img src="img/tech/r.png" alt="R" class="land" /></div>
        </li>
        <li>
          <div><img src="img/tech/shiny.png" alt="RShiny" /></div>
        </li>
        <li>
          <div><img src="img/tech/postgres.png" alt="Postgres" /></div>
        </li>
        <li>
          <div><img src="img/tech/presto.png" alt="Presto" /></div>
        </li>
        <li>
          <div><img src="img/tech/looker.png" alt="Looker" class="land" /></div>
        </li>
        <li>
          <div><img src="img/tech/ms-sql.png" alt="MS" class="land" /></div>
        </li>
      </ul>
      <h2 class="section-title">
        I am also familiar with these:
      </h2>
      <ul class="skills-list">
        <li>
          <div><img src="img/tech/javascript.png" alt="JS" /></div>
        </li>
        <li>
          <div><img src="img/tech/html.png" alt="HTML" /></div>
        </li>
        <li>
          <div><img src="img/tech/css.png" alt="CSS" /></div>
        </li>
        <li>
          <div><img src="img/tech/sass.png" alt="Sass" /></div>
        </li>
        <li>
          <div><img src="img/tech/jquery.png" alt="jQuery" class="land" /></div>
        </li>
        <li>
          <div><img src="img/tech/react.png" alt="React" /></div>
        </li>
        <li>
          <div><img src="img/tech/ruby.png" alt="Ruby" /></div>
        </li>
        <li>
          <div><img src="img/tech/c-plus.png" alt="C++" /></div>
        </li>
        <li>
          <div><img src="img/tech/power-bi.png" alt="PowerBI" /></div>
        </li>
        <li>
          <div><img src="img/tech/tableau.png" alt="Tableau" /></div>
        </li>
        <li>
          <div><img src="img/tech/jenkins.png" alt="Jenkins" /></div>
        </li>
        <li>
          <div><img src="img/tech/jira.png" alt="Jira" class="land" /></div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Experiences -->
  <section id="experiences">
    <div class="container">
      <h2 class="section-title">
        My journey thus far has lead me to:
      </h2>
      <div class="experiences-list">
        <div class="experience">
          <img src="img/experience/amount.png" alt="Amount" />
          <div class="experience-content">
            <h3>Product Manager</h3>
            <h4>Amount | 2019 - Present | Chicago, IL</h4>
            <div>
              <p>
                A fintech SaaS technology company carve out of the fintech
                leader Avant, Amount helps financial institutions representing over 25 million customers and $1T in assets (in total) modernize
                retail banking through a modern API framework which streamlines
                workflows and automates account originations across all products
                and channels. With Amount, partners can go live with new digital products in months instead of years.
              </p>
              <p>
                Product manager for our customer account-opening Application product which serves as the foundation on which our partners can configure highly customized solutions for best-in-class personal loan, credit card, and other digital credit product experiences. My work spans solutions that help our customers increase their funnel, track customer conversions, control risk, and integrate with other technology services.
              </p>
            </div>
          </div>
        </div>
        <div class="experience">
          <img src="img/experience/avant.jpg" alt="Avant" />
          <div class="experience-content">
            <h3>Senior Associate, Data</h3>
            <h4>Avant | 2017 - 2019 | Chicago, IL</h4>
            <div>
              <p>
                Avant is the leading provider of credit alternatives to middle
                income consumers and has served more than 600,000 customers
                worldwide. Founded in late 2012, Avant has raised over $600
                million of equity capital and originated over $4 billion of
                loans on the platform.
              </p>
              <p>
                Product manager for the Data Platform working closely with our
                Data Engineering team. Ensured the successful data onboarding of
                Avant with its new bank partnerships.
              </p>
            </div>
          </div>
        </div>
        <div class="experience">
          <img src="img/experience/wmp.png" alt="WMP" />
          <div class="experience-content">
            <h3>Experienced Consultant, Technology</h3>
            <h4>West Monroe Partners | 2015 - 2017 | Chicago, IL</h4>
            <div>
              <p>
                West Monroe (WMP) is a national consulting firm comprised of
                more than 1,300 professionals specializing in digital transformations for Fortune 500 and mid-sized clients.
              </p>
              <p>
                Consultant within the Technology practice with experience in
                predictive analytics, data strategy, data engineering, and
                business intelligence with projects across the insurance,
                financial services, and healthcare industries.
              </p>
            </div>
          </div>
        </div>
        <div class="experience">
          <img src="img/experience/northwestern.png" alt="Northwestern" />
          <div class="experience-content">
            <h3>Northwestern University</h3>
            <h4>B.A. Economics | 2011 - 2015 | Evanston, IL</h4>
            <div>
              <p>Affiliations:</p>
              <ul>
                <li>
                  - Institute for Student Business Education (ISBE) Director
                </li>
                <li>- China Care Foundation - NU Chapter President</li>
                <li>- Chinese Students Association</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2 class="section-title">
        Reach out. Say Hi.
      </h2>
      <div class="divider-line"></div>
      <p class="contact-summary">
        Want to collaborate on a project? Interested in a detailed resume?
        Just want to chat the latest in tech and startups? Find me on
        <a href="https://www.linkedin.com/in/mikeqhan/">LinkedIn</a>,
        <a href="https://twitter.com/mike_han_solo">Twitter</a>, or shoot me
        an email at
        <span>
          <script type="text/javascript">
            domain = "mikehan.io";

            addr = "hey" + "@" + domain;

            document.write(
              '<A href="mailto:' + addr + '">' + addr + "</a>."
            );
          </script>
        </span>I would love to hear from you.
      </p>
      <form id="contact-form">
        <div class="text-fields">
          <input type="text" class="text-input name-input" name="name" placeholder="Name" />
          <input type="email" class="text-input email-input" name="email" placeholder="Email" />
          <input type="text" class="text-input subject-input" name="subject" placeholder="Subject" />
          <textarea class="text-input message-input" name="message" placeholder="Message"></textarea>
        </div>
        <div class="g-recaptcha" data-sitekey="6LeEcbwZAAAAABxWpuVKBPapeK1g1mZDOGtHh8yR" data-callback="enableSubmitBtn"></div>
        <input type="submit" value="Submit" id="btn-contact-submit" class="btn-main" disabled="disabled">
      </form>
    </div>
  </section>

  <footer id="main-footer">
    <div class="footer-content">
      <p>
        Copyright &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        All Rights Reserved
      </p>
      <div class="social">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mike_han_solo">
          <i class="lab la-twitter-square"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mikeqhan/">
          <i class="lab la-linkedin"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/MikeHanSolo">
          <i class="lab la-github-square"></i>
        </a>
      </div>
    </div>
  </footer>

  <!-- JavaScript and jQuery -->
  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
  <script src="scripts/script.js"></script>
  <script src="scripts/typewriter.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script>
    particlesJS.load(
      "particles-js",
      "configs/particlesjs-config.json",
      function() {}
    );
  </script>
</body>

</html>