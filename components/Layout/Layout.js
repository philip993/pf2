import BackButton from '../BackButton/BackButton';

const Layout = (props) => (
  <div>
    <BackButton />
    {props.children}
  </div>
);

export default Layout;
