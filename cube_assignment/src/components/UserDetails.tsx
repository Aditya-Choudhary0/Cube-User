import React from "react";
import { useEffect, useState } from "react";
import { users } from "../data/data";
import Images from "./Images";
interface Props {
  userId: number | null;
}

interface UserDetails {
  id: number;
  name: string;
  title: string;
}


const UserDetails: React.FC<Props> = ({ userId }) => {
  const [details, setDetails] = useState<UserDetails | null>(null);

  const getData = async () => {
    try {
      const data = users.find((user) => user.id === userId);
      if (data) {
        setDetails(data);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };
 

  useEffect(() => {
    if (userId !== null) {
      getData();
    }
  }, [userId]);



  return (
    <div className="UserDetails">
      {details ? (
        <div className="details">
          <h2>{details.name} Details</h2>
          <p>{details.title}</p>

          <div className="photo-grid">
           <Images userId={userId}/>
          </div>
        </div>
      ) : (
        <p>Select a user to view details</p>
      )}
    </div>
  );
};

export default UserDetails;
