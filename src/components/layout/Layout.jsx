
import AppRouter from "../../router/AppRouter";
import classes from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={classes.main}>
      <AppRouter />
    </div>
  );
}
