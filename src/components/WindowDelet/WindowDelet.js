import {
  BlockWindow,
  ButtonAnswer,
  ConteinerAnswer,
} from './WindowDelet.styled';
import { IoClose } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';

export const WindowDelet = () => {
  return (
    <BlockWindow>
      <div>
        <h4>
          Contact <span></span> deletion!
        </h4>
        <p>You want to cancel the operation?</p>
      </div>
      <ConteinerAnswer>
        <ButtonAnswer id="1">
          <IoClose size="25" />
        </ButtonAnswer>

        <ButtonAnswer id="2">
          <AiOutlineCheck size="25" />
        </ButtonAnswer>
      </ConteinerAnswer>
    </BlockWindow>
  );
};
