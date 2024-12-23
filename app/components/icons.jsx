import { Icon } from "@chakra-ui/react"
import { GoLinkExternal } from "react-icons/go";
import { AiOutlineMenu, AiOutlineCheck, AiOutlineDown } from "react-icons/ai";
import { BiSolidConversation } from "react-icons/bi";
import { MdDesignServices, MdConstruction } from "react-icons/md";

export const External = (props) => {
    return <Icon {...props}>
        <GoLinkExternal />
    </Icon>
}

export const Hamburger = (props) => {
    return <Icon {...props}>
        <AiOutlineMenu />
    </Icon>
}

export const Check = (props) => {
    return <Icon {...props}>
        <AiOutlineCheck />
    </Icon>
}

export const Down = (props) => {
    return <Icon {...props}>
        <AiOutlineDown />
    </Icon>
}

export const Conversation = (props) => {
    return <Icon {...props}>
        <BiSolidConversation />
    </Icon>
}

export const Design = (props) => {
    return <Icon {...props}>
        <MdDesignServices />
    </Icon>
}

export const Build = (props) => {
    return <Icon {...props}>
        <MdConstruction />
    </Icon>
}