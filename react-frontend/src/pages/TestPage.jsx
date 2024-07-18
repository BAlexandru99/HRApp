import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TestPage = () => {
  const userEmail = useSelector((state) => state.user.email);
  console.log(userEmail);
  return (
    <>
      <Link to="/">Home</Link>
      <div>User email is:{userEmail}</div>
    </>
  );
};

export default TestPage;
