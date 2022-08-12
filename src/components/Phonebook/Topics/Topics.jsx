import React, { useLayoutEffect, useState } from 'react';
import {
  Div,
  ButtonPinc,
  ButtonDark,
  Li,
  ButtonGrin,
  ButtonViolet,
} from './Topics.styled';

export const Topics = () => {
  const [topics, setTopics] = useState('pink');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-topics', topics);
  }, [topics]);
  return (
    <Div>
      <ul>
        <Li>
          <ButtonPinc onClick={() => setTopics('pink')} />
        </Li>
        <Li>
          <ButtonDark onClick={() => setTopics('dark')} />
        </Li>
        <Li>
          <ButtonGrin onClick={() => setTopics('grin')} />
        </Li>
        <Li>
          <ButtonViolet onClick={() => setTopics('violet')} />
        </Li>
      </ul>
    </Div>
  );
};
