import LeftView from "../../components/SignIn/LeftView/LeftView"
import RightView from "../../components/SignIn/RightView/RightView"
import SignInStyle from "./SignIn.style"

const SignIn = () => {
    return (
        <SignInStyle>
            <LeftView />
            <RightView />
        </SignInStyle>
    )
}

export default SignIn