
import * as React from "react";
import styles from "./EnterpriseLinks.module.scss";
import { IEnterpriseLinksProps } from "./IEnterpriseLinksProps";

const news = [
  {
    category: "HEALTH",
    title: "Healthy Living: Tips for a Better You",
    date: "May 3, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
  },
  {
    category: "FAMILY",
    title: "10 More Years with Mom",
    date: "April 30, 2026",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600",
  },
  {
    category: "CULTURE",
    title: "Medica Volunteers Make a Difference",
    date: "April 25, 2026",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
  },
  {
    category: "BENEFITS",
    title: "Open Enrollment Is Here!",
    date: "April 20, 2026",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600",
  },
];

const quickLinks = [
  {
    title: "HR Questions",
    description: "Get help with HR policies",
    icon: "👥",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700",
  },
  {
    title: "IT Service Center",
    description: "Report an issue or request support",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700",
  },
  {
    title: "Employee Self Service",
    description: "Access your information",
    icon: "📖",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700",
  },
];

const events = [
  { day: "15", month: "MAY", title: "All Hands Meeting", time: "10:00 AM - 11:00 AM" },
  { day: "20", month: "MAY", title: "Leadership Workshop", time: "02:00 PM - 04:00 PM" },
  { day: "28", month: "MAY", title: "Benefits Basics Webinar", time: "11:00 AM - 12:00 PM" },
];

const EmployeePortal: React.FC<IEnterpriseLinksProps> = ({
  description,
  isDarkTheme,
  environmentMessage,
  userDisplayName,
}) => {
  return (
    <div className={styles.dashboard}>

      {/* Latest News */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Latest News</h2>
          <a href="#">View all news →</a>
        </div>

        <div className={styles.newsGrid}>
          <article className={styles.featuredNews}>
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900"
              alt="Featured news"
            />
            <span>May 5, 2026</span>
            <h3>The Post-it Note Was an Accident</h3>
            <p>
              The most important ideas sometimes come from unexpected places.
              Discover the stories behind our workplace.
            </p>
            <a href="#">Read more →</a>
          </article>

          <div className={styles.newsCards}>
            {news.map((item, index) => (
              <article className={styles.newsCard} key={index}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} />
                  <span>{item.category}</span>
                </div>
                <small>{item.date}</small>
                <h3>{item.title}</h3>
                <a href="#">Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.section}>
        <h2>Quick Links</h2>

        <div className={styles.quickLinks}>
          {quickLinks.map((link, index) => (
            <a
              href="#"
              className={styles.quickCard}
              key={index}
              aria-label={link.title}
            >
              <img
                src={link.image}
                alt={link.title}
                className={styles.quickImage}
              />

              <div className={styles.quickOverlay}></div>

              <div className={styles.quickContent}>
                <span className={styles.quickIcon}>
                  {link.icon}
                </span>

                <div className={styles.quickText}>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
              </div>

              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Events and Volunteer */}
      <div className={styles.bottomGrid}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Upcoming Events</h2>
            <a href="#">View all events →</a>
          </div>

          {events.map((event, index) => (
            <div className={styles.event} key={index}>
              <div className={styles.eventDate}>
                <strong>{event.day}</strong>
                <small>{event.month}</small>
              </div>
              <div>
                <h3>{event.title}</h3>
                <p>{event.time}</p>
              </div>
              <span>▦</span>
            </div>
          ))}
          <a href="#">Go to full calendar →</a>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Volunteer Days</h2>
            <a href="#">View all opportunities →</a>
          </div>

          <div className={styles.volunteerCard}>
            <div className={styles.volunteerIcon}>🤝</div>
            <div>
              <strong>JUN 7</strong>
              <h3>Feed My Starving Children</h3>
              <p>Join fellow employees and volunteer in our community.</p>
              <button>Sign up today</button>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default EmployeePortal;
