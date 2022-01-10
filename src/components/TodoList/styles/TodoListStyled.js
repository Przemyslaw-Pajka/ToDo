import styled from 'styled-components'

export const TodoListStyled = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;
    box-shadow: 1px 1px 12px #bdbdbd;

    li[data-completed=true] {
        text-decoration: line-through;
    }
    li {
        background: #fff;
        border: 1px solid lightgray;
        text-align: center;
        padding: 14px 7px;
        font-size: 17px;
        cursor: pointer;
    }
`