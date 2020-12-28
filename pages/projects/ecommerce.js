import styles from '../../styles/ecommerce.module.scss';
import MongoLogo from '../../public/mongodb.svg';
import ExpressLogo from '../../public/expressjs.svg';
import ReactLogo from '../../public/react-js.svg';
import NodeLogo from '../../public/nodejs.svg';
import Layout from '../../components/Layout/Layout';

const Ecommerce = () => {
  return (
    <div className={styles.ecommerceContainer}>
      <Layout />
      <div className={styles.ecommerceFirstContainer}>
        <h1>E-Commerce App</h1>
        <p>Your online Bookstore</p>
      </div>
      <div className={styles.ecommerceSecondContainer}></div>
      <div className={styles.ecommerceThirdContainer}>
        <h1>Overview</h1>
        <p>
          In this day and age, like most of the things, shops needs to be
          on-line as well. For this reason, I took something that I like, in
          this case buying books and turn my idea into a new Project. I created
          online Bookstore, called E-Commerce. Here visitors can visit this
          site, but they need to be authenticated in order to buy any of the
          Books from the Shop. If user likes some book, can simple put it in
          Wishlist and save it for later. Also there is implemented Order system
          and complete integration with external payment services - Stipe.
        </p>
        <h3>Technology stack</h3>
        <div className={styles.techStackContainer}>
          <img src={MongoLogo} alt="mongo" />
          <img src={ExpressLogo} alt="express" />
          <img src={ReactLogo} alt="react" />
          <img src={NodeLogo} alt="node" />
        </div>
      </div>
      <div className={styles.ecommerceFourthContainer}>
        <h1>Problem Definitions</h1>
        <p>In this project I defined three main problems.</p>
        <p>
          First problem defined in this project to restrict access of users and
          visitors to certain pages. Also to allow only logged-in user option to
          buy from the Bookstore.
        </p>
        <p>
          Second problem I encountered was the need for integration between
          Stripe and my Back-end code and keeping DRY principle.
        </p>
        <p>
          Third problem was to maintain the Bookstore's stock of Books. For this
          problem I need to create UI only for admins.
        </p>
      </div>
      <div className={styles.ecommerceFifthContainer}>
        <h1>Solution</h1>
        <p>
          As a solution for the first problem, I implemented user Authorization
          via admin attribute on all users. By default this field is set to
          false and only Super-Admin can give Admin roles to another user. As
          for the second part, I created encryption for User Password on
          registration, as well as decryption on login. Also I implemented a JWT
          system, with token of maximum one hour time before loging out.
        </p>
        <p>
          In order to use Stripe in my project, a complete integration is
          required between Stripe and back-end logic. Stripe has its own unique
          system, that requires a Product/Service with defined inventory (SKU).
          Customer is created when payment is done and can be used for multiple
          payments or just one. Stripe has Order system, that uses Products, SKU
          and customer. In order to create all of this, plus the code on
          server-side, I had to find a way to keep DRY principle. I started with
          Async/Await functions, while creating a Book by an Admin in the Admin
          Panel to the Database, subsequently creating SKU and followed by
          Product in Stripe. With this approach I successfully eliminated the
          second problem.
        </p>
        <p>
          With the previous Authorization solved within the first problem, I
          created UI only visible for Admin users. With this option, Admins can
          keep up-to date Book inventory.
        </p>
      </div>
      <div className={styles.ecommerceSixthContainer}>
        <h1>Final Product</h1>
        <p>To view the source code, click on the GitHub link bellow.</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonGithub}>
            <a href="https://github.com/philip993/e-com">GitHub</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
