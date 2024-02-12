import { useHistory } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    let history = useHistory();

    return <Component navigate={history} {...props} />;
  };

  return Wrapper;
};
