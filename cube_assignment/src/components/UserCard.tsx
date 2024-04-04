import React from 'react';

interface User {
  id: number;
  name: string;
  title: string;
}

interface Props {
  user: User;
  onSelect: () => void;
  isSelected: boolean;
}

const UserCard: React.FC<Props> = ({ user, onSelect, isSelected }) => {

  const truncatedTitle = user.title.split(' ').slice(0, 15).join(' ');
  const titleWithEllipsis = user.title.length > 20 ? `${truncatedTitle}...` : user.title;

  return (
    <div className={`UserCard ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <h3>{user.name}</h3>
      <p>{titleWithEllipsis}</p>
    </div>
  );
};

export default UserCard;
