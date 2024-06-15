import {useContext, useState} from "react";
import {useAppState} from "../app/state";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {User} from "../model/user";
import {LoginModal} from "./login-modal";
import {mockUserService} from "@/services/UserService";

const userSrv = mockUserService();

export function Login() {
    const [state, dispatch] = useAppState();
    const [emailInput, setEmailInput] = useState<string>("");
    const {isOpen, onOpen, onClose} = useDisclosure();

    const onLogin = async () => {
        if (emailInput === "") {
            return;
        }
        const user = await userSrv.getOrCreateByEmail(emailInput);
        setEmailInput("");
        dispatch({type: "login", user});
    };

    const onLogout = () => {
        dispatch({type: "logout"});
    };

    return (
        <>
            {state.user ? (
                <>
                    <Button size="sm" onClick={onOpen}>
                        Preferences
                    </Button>
                    <Button colorScheme="blue" size="sm" onClick={onLogout}>
                        Log-out
                    </Button>
                </>
            ) : (
                <>
                    <Input
                        type="email"
                        placeholder="E-Mail"
                        size="sm"
                        maxWidth={200}
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                    <Button colorScheme="blue" size="sm" onClick={(e) => onLogin()}>
                        Login
                    </Button>
                </>
            )}
            <LoginModal isOpen={isOpen} onClose={onClose}/>
        </>
    );
}
