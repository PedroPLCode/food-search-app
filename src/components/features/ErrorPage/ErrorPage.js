import styles from './ErrorPage.module.scss';
import { messages } from '../../../settings';
import PropTypes from "prop-types";

const ErrorPage = props => {

  const onlineStatus = navigator.onLine ? messages.online : messages.offline;

  if (navigator.onLine) {
    return (
      <div className={styles.error_page}>
        <h3>Error</h3>
        <h5>Looks like you are {onlineStatus} </h5>
        <h5>But somehting went wrong</h5>
        {props.serverResponse ? 
          <>
            <h5>{`headers.ok: ${props.serverResponse.headers.ok}`}</h5>
            <h5>{`headers.statusText: ${props.serverResponse.headers.statusText}`}</h5>
            <h5>{`headers.status: ${props.serverResponse.headers.status}`}</h5>
          </> : ''}
        {props.serverError ? <h5>{props.serverError.toString()}</h5> : ''}
        <h5>{navigator.userAgent}</h5>
        <h5>Try again</h5>
      </div>
    )
  } else {
    return (
      <div className={styles.error_page}>
        <h3>Error</h3>
        <h5>Looks like you are {onlineStatus} </h5>
        <h5>Chech your internet connection</h5>
        <h5>{props.serverError.toString()}</h5>
        <h5>{navigator.userAgent}</h5>
        <h5>Try again</h5>
      </div>
    )
  }
}

ErrorPage.propTypes = {
  serverError: PropTypes.object,
  serverResponse: PropTypes.object,
};
    
export default ErrorPage;