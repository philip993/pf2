import styles from '../styles/ecommerce.module.scss';

const Ecommerce = () => {
  return (
    <div className={styles.ecommerceContainer}>
      <div className={styles.ecommerceFirstContainer}>
        <h1>E-Commerce App</h1>
        <p>Your online Bookstore</p>
      </div>
      <div className={styles.ecommerceSecondContainer}></div>
      <div className={styles.ecommerceThirdContainer}>
        <h1>Overview</h1>
        <p>
          E-Commerce is a project in which I created an online Bookstore.
          Protected the webstore with User Authorization and Authentication.
        </p>
      </div>
      <div className={styles.ecommerceFourthContainer}>
        <h1>Problem Definitions</h1>
        <p>
          First problem defined in this project to restrict access of users and
          visitors to certain pages. Also to allow only logged-in user option to
          buy from the Bookstore.
        </p>
        <p>
          Second problem I encountered was the need for integration between
          Stripe and my Back-end code.
        </p>
      </div>
      <div className={styles.ecommerceFifthContainer}>
        <h1>Solution</h1>
        <p>
          I implemented user Authorization via admin attribute on all users. By
          default this field is set to false and only Super-Admin can give Admin
          roles to another user. As for the second part, I created encryption
          for User Password on registration, as well as decryption on login.
          Also I implemented a JWT system, with token of maximum one hour time
          before loging out.
        </p>
        <p>
          In order to use Stripe, I had to create Product for each Book, that
          has inventory (SKU). Also for each User, there is a Customer created
          in Stripe. Thus means doubling work for each action. Using async
          functions helped me create these request via Client-side UI. For e.g.
          when the user registers, he creates User in Database and also a
          Customer in Stripe.
        </p>
      </div>
      <div className={styles.ecommerceSixthContainer}>
        <h1>Final Product</h1>
      </div>
    </div>
  );
};

export default Ecommerce;
