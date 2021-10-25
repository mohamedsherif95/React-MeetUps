import AddMeetUp from "./../../components/meetups/AddMeetUp";
import { useHistory } from "react-router-dom";
const AddMeetUps = () => {
  const history = useHistory();

  const addMeetUpHandler = function (meetupData) {
    fetch("https://meetups-c1029-default-rtdb.firebaseio.com/.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
    }).then(() => {
      history.replace("/");
    });
  };

  return <AddMeetUp onAddMeetUp={addMeetUpHandler} />;
};
export default AddMeetUps;
