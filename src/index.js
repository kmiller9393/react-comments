import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        comment={faker.hacker.phrase()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 5:25PM"
        comment={faker.hacker.phrase()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 2:15PM"
        comment={faker.hacker.phrase()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
