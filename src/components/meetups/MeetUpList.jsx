import MeetUpItem from "./MeetUpItem";

const MeetUpList = (props) => {
  return (
    <div>
      {props.data.map((data) => (
        <MeetUpItem
          key={data.id}
          id={data.id}
          image={data.image}
          title={data.title}
          address={data.address}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default MeetUpList;
