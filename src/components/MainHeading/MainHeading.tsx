import { memo } from "react";
import { MainHeadingStyled } from "./styles/MainHeadingStyled";

const MainHeading = () => {
    return (
        <MainHeadingStyled>ToDo App</MainHeadingStyled>
    )
}

export default memo(MainHeading)