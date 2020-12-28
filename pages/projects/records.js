import styles from '../../styles/records.module.scss';
import MySqlLogo from '../../public/mysql.svg';
import ExpressLogo from '../../public/expressjs.svg';
import ReactLogo from '../../public/react-js.svg';
import NodeLogo from '../../public/nodejs.svg';
import Layout from '../../components/Layout/Layout';

const Records = () => {
  return (
    <div className={styles.recordsContainer}>
      <Layout />
      <div className={styles.recordsFirstContainer}>
        <h1>Employee Records</h1>
        <p>Your HR assistant</p>
      </div>
      <div className={styles.recordsSecondContainer}></div>
      <div className={styles.recordsThirdContainer}>
        <h1>Overview</h1>
        <p>
          Employee Records is a modern solution for automation of the process in
          the Human Resources Department. Employees in the HR Department will no
          longer need to waste time on recurring tasks, such as creating weekly
          Shift Schedules, Meals Plans or Contract Extention. Informations about
          Employees are gather in one place and available in just few clicks
          away. This way, accross the organisational structure, informations can
          be shared or accessed, without unnecassary delay of time. One of the
          features is to send notifications about Contracts via email, with the
          option to attach PDF documents. Nonetheless, if your company is small
          or big, you can take adventage of the perks from this simple, yet
          usefull application.
        </p>
        <h3>Technology stack</h3>
        <div className={styles.techStackContainer}>
          <img src={MySqlLogo} alt="mongo" />
          <img src={ExpressLogo} alt="express" />
          <img src={ReactLogo} alt="react" />
          <img src={NodeLogo} alt="node" />
        </div>
      </div>
      <div className={styles.recordsFourthContainer}>
        <h1>Problem Definitions</h1>
        <p>In this project I defined four main problems.</p>
        <p>
          The First problem defined in this project was to create a base for all
          Employees in a Table UI and option to view detailed Employee's
          Profiles.
        </p>
        <p>
          As second problem that I defined was to create detailed Table UI
          layout, listing all the Employees with their Contracts, days remaining
          and status of the Contract. Also option to extend/terminate, print and
          send e-mail.
        </p>
        <p>
          Third problem in this project is the need of UI with Shift Schedule,
          providing more information, like status of the Employee, Shift Stard
          and End Date, etc.
        </p>
        <p>
          As fourth problem was the need for simple UI with number of Meals per
          day.
        </p>
      </div>
      <div className={styles.recordsFifthContainer}>
        <h1>Solution</h1>
        <p>
          As a solution for the first problem, I implemented paginated Table UI,
          providing basic information, like First and Last Name, Position and
          link to a detailed Profile Page. Uppon opening Profile Page, more
          detailed information can be viewed about certain Employee. Also I
          create intuitive multi-step form in which can be added new Employee to
          the Database.
        </p>
        <p>
          Created Table UI with information such as First and Last Name, Start
          and End Date of the Contract and also a Contract Status. This way,
          User can check wheter the employee is active or fired, how many days
          left, etc. Following this information, I implemented couple of action
          buttons. First action is to Update Contract. In this UI form, User can
          select Start Date and automatically updating the Contract for 90 days.
          Second action is to Terminate Contract and just one click away from
          it. Third action to send e-mail, based on current status, whether
          notification for Extending or Termination. Fourth and final action is
          to view the Contract. With this approach I successfully eliminated the
          second problem.
        </p>
        <p>
          Third problem i approached in the same way as previous two, by
          creating a Table UI with all active Employees. User can simple with
          one click to create new schedule or download schedule. Also User can
          manually change status of each employee.
        </p>
        <p>
          Meal plan is simple UI giving number of meals per day for each Shift,
          counting only the active Employees in current Shift Schedule.
        </p>
      </div>
      <div className={styles.recordsSixthContainer}>
        <h1>Final Product</h1>
        <p>To view the source code, click on the GitHub link bellow.</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonGithub}>
            <a href="https://github.com/philip993/employee-rec">GitHub</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Records;
