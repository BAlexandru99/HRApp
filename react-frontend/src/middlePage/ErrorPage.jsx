import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const { error } = useRouteError();
  const { status, statusText, message } = error;
  return (
    <div>
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {status} {statusText || message}
        </i>
      </p>
    </div>
  );
};
