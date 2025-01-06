import { Icon } from "@chakra-ui/react"
import { GoLinkExternal } from "react-icons/go";
import { AiOutlineMenu, AiOutlineCheck, AiOutlineDown } from "react-icons/ai";
import { BiSolidConversation } from "react-icons/bi";
import { MdDesignServices, MdConstruction } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { PiResize } from "react-icons/pi";
import { RiRuler2Line, RiPriceTag3Line  } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";
import { FaStar, FaGoogle, FaYelp, FaFacebookF } from "react-icons/fa";

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

export const Insta = (props) => {
    return <Icon {...props}>
        <CiInstagram />
    </Icon>
}

export const Size = (props) => {
    return <Icon {...props}>
        <PiResize />
    </Icon>
}

export const Layout = (props) => {
    return <Icon {...props}>
        <RiRuler2Line />
    </Icon>
}

export const Price = (props) => {
    return <Icon {...props}>
        <RiPriceTag3Line />
    </Icon>
}

export const Options = (props) => {
    return <Icon {...props}>
        <CgOptions />
    </Icon>
}

export const UpwardTrend = (props) => {
    return <Icon {...props}>
        <BsGraphUp />
    </Icon>
}

export const Star = (props) => {
    return <Icon {...props}>
        <FaStar />
    </Icon>
}

export const Google = (props) => {
    return <Icon {...props}>
        <FaGoogle />
    </Icon>
}

export const Yelp = (props) => {
    return <Icon {...props}>
        <FaYelp />
    </Icon>
}

export const Facebook = (props) => {
    return <Icon {...props}>
        <FaFacebookF />
    </Icon>
}