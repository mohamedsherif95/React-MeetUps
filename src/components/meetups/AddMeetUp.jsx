import { useRef } from "react";

const AddMeetUp = (props) => {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();
  const imgInputRef = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredImage = imgInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDesc,
      image: enteredImage,
    };

    props.onAddMeetUp(meetupData);
  };
  return (
    <form className="card text-center m-auto mt-3" style={{ width: "40vw" }}>
      <div>
        <h6 className="form-label">MeetUp Title</h6>
        <input className="form-control" type="text" ref={titleInputRef} />
      </div>
      <div>
        <h6 className="form-label">MeetUp Address</h6>
        <input className="form-control" type="text" ref={addressInputRef} />
      </div>
      <div>
        <h6 className="form-label">MeetUp Image URL</h6>
        <input className="form-control" type="url" ref={imgInputRef} />
      </div>
      <div>
        <h6 className="form-label">MeetUp Description</h6>
        <textarea
          className="form-control mb-2"
          type="text"
          ref={descInputRef}
        />
      </div>
      <button className="btn btn-danger" onClick={submitHandler}>
        Add MeetUp
      </button>
    </form>
  );
};
export default AddMeetUp;
