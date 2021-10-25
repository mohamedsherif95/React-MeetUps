import { useState, useEffect } from "react";

import MeetUpList from "../../components/meetups/MeetUpList";

const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetups-c1029-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (let item in data) {
          const meetup = {
            id: item,
            ...data[item],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else return <MeetUpList data={loadedMeetups} />;
};

export default AllMeetUps;
