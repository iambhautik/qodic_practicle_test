import styled from "styled-components";

const ModalWrapper = styled.div<{ open: boolean }>`
    display: ${(props) => (props.open ? "block" : "none")};
    position: fixed;
    z-index: 1002;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);

    .modal-content {
        background-color: #1a1a1a;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 600px;
        border-radius: 10px;
        position: relative;

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #ffe81f;
            padding-bottom: 10px;

            .modal-title {
                font-size: 28px;
                font-weight: bold;
                margin: 0;
                color: #ffe81f;
                text-shadow: 0 0 10px rgba(255, 232, 31, 0.5);
            }

            .modal-close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: #fff;
                    text-decoration: none;
                    cursor: pointer;
                    transform: rotate(90deg);
                }
            }
        }
    }
`;

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

const Modal = (props: ModalProps) => {
    return (
        <ModalWrapper open={props.open}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2 className='modal-title'>{props.title}</h2>
                    <span
                        className='modal-close'
                        onClick={() => props.onClose()}
                    >
                        &times;
                    </span>
                </div>
                {props.children}
            </div>
        </ModalWrapper>
    );
};

export default Modal;
