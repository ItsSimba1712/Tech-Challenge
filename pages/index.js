import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MyApp from "./_app";

export async function getStaticProps() {
  const res = await fetch("https://api.mwi.dev/content/home");
  const midwestern = await res.json();

  return {
    props: { midwestern },
  };
}

export default function Home({ midwestern }) {
  console.log(midwestern);
  const objectOne = [
    "Matt Johnson",
    "Bart Paden",
    "Ryan Doss",
    "Jared Malcolm",
  ];

  const objectTwo = [
    "Matt Johnson",
    "Bart Paden",
    "Jordan Heigle",
    "Tyler Viles",
  ];

  const result = [...new Set([...objectOne, ...objectTwo])];

  let outputted = false;

  function output() {
    if (!outputted) {
      var ul = document.createElement("ul");
      document.getElementById("output").appendChild(ul);

      result.forEach(function (output) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML += output;
      }, (outputted = true));
    } else if (outputted) {
      alert("You have already filtered this list!");
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="padding">
          <div className="nav">
            <Image src="/logo.png" width={350} height={73} />
            <Link href="/contact">
              <a className="link">contact</a>
            </Link>
          </div>

          <div className={styles.container}>
            <div className={`${styles.allboxes} ${styles.box1}`}>
              <Image src="/talkie.png" width={51} height={106} />
              <div className={styles.text}>
                <div>
                  <h2>{midwestern.data[0].title}</h2>
                </div>
                <p>{midwestern.data[0].content}</p>
              </div>
              <button> Learn More</button>
            </div>

            <div className={`${styles.allboxes} ${styles.box2}`}>
              <div className="icon">
                <Image src="/rabbit.png" width={104} height={62} />
              </div>
              <div className={styles.text}>
                <h2>{midwestern.data[1].title}</h2>
                <p>{midwestern.data[1].content}</p>
              </div>
              <button> Learn More</button>
            </div>

            <div className={`${styles.allboxes} ${styles.box3}`}>
              <Image src="/shield.png" width={98} height={98} />
              <div className={styles.text}>
                <h2>{midwestern.data[2].title}</h2>
                <p>{midwestern.data[2].content}</p>
              </div>
              <button> Learn More</button>
            </div>
          </div>
          <div className="bot-heading">
            <h1 className="gold-heading">Heading </h1>
            <h1> One</h1>
          </div>

          <p className="bot-content">
            Remove the duplicates in 2 Javascript objects (found in readme), add
            the results to an array and output the list of distinct names in an
            unorded list below this paragraph when{" "}
            <button className="puzzle" onClick={output}>
              this link
            </button>{" "}
            is clicked. If the operation has been completed already, notify the
            user that this has already been done.
          </p>
          <div id="output"></div>
        </div>
      </div>
    </>
  );
}
