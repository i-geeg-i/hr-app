import Image from "next/image";
import "./index.css"
import Link from "next/link";
export default function Home() {
  return (
    <main id="index">
      <div className="siteElement" id="maininfo">
          <h2>Here you can pass quize that HR sometimes give to workers!</h2>
      </div>
      <div className="siteElement">
        <h2>About site:</h2>
        <p>
          This test will show that felings influence your work most. You will see result in format X-Y. For best team collaborating members of team should have all possible variants(4)
          <br/>Thanks for inspiration to Ivan Murzin!<br/>
          This website was created on small psychological test. Hope it will help to improve your teams creating!
        </p>
      </div>
      <div className="siteElement">
        <h2>About me</h2>
        <p>
        My name is Egor Glebov, I'm student of Innopolis university. You may find more about me on my personal <Link href="https://i-geeg-i.github.io">website</Link>.
        </p>
      </div>
    </main>
  );
}
