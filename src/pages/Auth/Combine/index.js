import './index.scss';

// components
import SigninForm from "../../../components/SigninForm";
import SignupForm from "../../../components/SignupForm";

function Combine() {
  return (
    <div className="combine">
      <SigninForm />
      <SignupForm />
    </div>
  );
}

export default Combine;
