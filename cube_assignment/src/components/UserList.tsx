import React, { useState, useEffect, useRef } from 'react';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  title: string;
}

interface Props {
  users: User[];
  onSelectUser: (userId: number) => void;
  selectedUserId: number | null;
}

const UserList: React.FC<Props> = ({ users, onSelectUser, selectedUserId }) => {
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMoreUsers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreUsers();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [loading]);

  const loadMoreUsers = () => {
    setLoading(true);
    setTimeout(() => {
      const nextUsers = users.slice(visibleUsers.length, visibleUsers.length + 20);
      setVisibleUsers(prevUsers => [...prevUsers, ...nextUsers]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="UserList" ref={containerRef}>
      <div className="user-cards">
        {visibleUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onSelect={() => onSelectUser(user.id)}
            isSelected={selectedUserId === user.id}
          />
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default UserList;
