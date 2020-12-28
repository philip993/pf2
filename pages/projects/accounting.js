import styles from '../../styles/accounting.module.scss';
import MySqlLogo from '../../public/mysql.svg';
import ExpressLogo from '../../public/expressjs.svg';
import ReactLogo from '../../public/react-js.svg';
import NodeLogo from '../../public/nodejs.svg';
import Layout from '../../components/Layout/Layout';
import { Button } from '@material-ui/core';

const Accounting = () => {
  return (
    <div className={styles.accountingContainer}>
      <Layout />
      <div className={styles.accountingFirstContainer}>
        <h1>Accounting</h1>
        <p>Simple accounting application</p>
      </div>
      <div className={styles.accountingSecondContainer}></div>
      <div className={styles.accountingThirdContainer}>
        <h1>Overview</h1>
        <p>
          As the title says Accounting is an application created for accounting
          industry. Provides basic accountings options, including Chart of
          Accounts, General Ledger and other options. Invoices are divided in
          Customers and Vendor system, meaning there are Purchased and Sales
          Invoices, as well as Vendors and Customers. Also Payment Journal for
          following Bank Account Statements.
        </p>
        <h3>Technology stack</h3>
        <div className={styles.techStackContainer}>
          <img src={MySqlLogo} alt="mysql" />
          <img src={ExpressLogo} alt="express" />
          <img src={ReactLogo} alt="react" />
          <img src={NodeLogo} alt="node" />
        </div>
      </div>
      <div className={styles.accountingFourthContainer}>
        <h1>Problem Definitions</h1>
        <p>In this project I defined four main problems.</p>
        <p>
          Firstly I needed to create Chart of Accounts linking to all
          Transactions. Also add details Report for each Account.
        </p>
        <p>
          Secondly, I had to create General Ledger with detailed Account
          History.
        </p>
        <p>Separate Invoices and Entities to Purchased and Sales part.</p>
        <p>
          Final problem defined was Payment Journal to record bank statements.
        </p>
      </div>
      <div className={styles.accountingFifthContainer}>
        <h1>Solution</h1>
        <p>
          I created UI with all accounts, showing both side Debit and Credit, as
          well as the Balance of the Account. For the second part, I created
          separate UI, where User can select Account and which period of time to
          search for.
        </p>
        <p>
          This UI represent all Transaction done within the application. For
          each Transaction, there is a date of posting, account code,
          description and amount.
        </p>
        <p>
          The work flow demands, creating a separate Invoice for Purchases and
          Sales, as well as for Entity, Vendors and Customers.
        </p>
        <p>
          In this UI, user can choose from G/L account, customer or vendor
          depending on the bank statement. Automatic numeration is given to the
          payment journals.
        </p>
      </div>
      <div className={styles.accountingSixthContainer}>
        <h1>Final Product</h1>
        <p>To view the source code, click on the GitHub link bellow.</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonGithub}>
            <a href="https://github.com/philip993/accounting">GitHub</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
