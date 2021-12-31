import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export async function getStaticProps() {
  const res = await fetch("https://api.mwi.dev/content/contact");
  const midwestern = await res.json();

  return {
    props: { midwestern },
  };
}

const Contact = ({ midwestern }) => {
  console.log(midwestern);
  return (
    <div>
      <div className={styles.backLeft}>
        <div className={styles.padding}>
          <div className="bot-heading">
            <h1>
              <span className="gold-heading">
                {midwestern.data[0].title.slice(0, 4)}
              </span>
              <span>{midwestern.data[0].title.slice(4, 12)}</span>
            </h1>
          </div>
          <p>{midwestern.data[0].content.slice(0, 133)}</p>
          <br />
          <p>{midwestern.data[0].content.slice(133, 237)}</p>
        </div>
      </div>

      <div className={styles.backRight}>
        <div className={styles.padding}>
          <h2>Heading Two</h2>
          <form method="post" action="https://api.mwi.dev/contact">
            <input
              name="first name"
              type="text"
              required
              placeholder="First Name"
              id={styles.left}
            />
            <input
              name="last name"
              type="text"
              required
              placeholder="Last Name"
              id={styles.right}
            />
            <br />
            <input
              name="title"
              type="text"
              required
              placeholder="Title"
              id={styles.left}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              id={styles.right}
            />
            <br />
            <textarea
              name="message"
              required
              placeholder="Message"
              id={styles.message}
            ></textarea>
            <button type="submit" id={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className={styles.navbar}>
        <div className="nav">
          <Image src="/logo.png" width={350} height={73} className="left" />
          <Link href="/">
            <a className="link">home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
