import styled from "styled-components";


export const Container = styled.div `
    width: 100%;
    height: 100vh;
    
    background: #011015;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    .ring {
    width: 25rem;
    height: 25rem;

    border: 0px solid #011015;
    border-radius: 50%;

    position: absolute;
}

    .ring.one {
        border-bottom-width: 10px;
        border-color: #ff00e0;

        animation: rotate1 2s linear infinite;
    }

    .ring.two {
        border-bottom-width: 10px;
        border-color: #ffeb3b;

        animation: rotate2 2s linear infinite;
    }

    .ring.three {
        border-bottom-width: 10px;
        border-color: #14ffe9;

        animation: rotate3 2s linear infinite;
    }

    span {
        letter-spacing: 1px;
    }

    @keyframes rotate1 {
        0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }

    @keyframes rotate2 {
        0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }

    @keyframes rotate3 {
        0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }

` 


