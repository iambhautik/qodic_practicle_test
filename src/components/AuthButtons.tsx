import { Button } from "./Button";
import { HeaderButtonWrapper } from "./Header";

export const AuthButtons = () => {
    return (
        <HeaderButtonWrapper>
            <Button>Login</Button>
            <Button>Logout</Button>
        </HeaderButtonWrapper>
    );
};
