import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo, updateProfilePicture } from "../slices/userSlice";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Profile = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState({});
  const { name, email, profilePic } = useSelector(
    (state) => state.user.userInfo
  );
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const handleImageUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfilePicture(file));
  };
  return (
   
    <div className="outer-div">
      <div className="inner-div">
        <div className="front">
          <div className="front__bkg-photo"></div>
          <div className="front__face-photo">
            <img src={profilePic} alt="" />
          </div>
          <div className="front__text">
            <h3 className="front__text-header"> {name}</h3>
            <p className="front__text-para">
              {email}
            </p>
            <div className="updatePic">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="form-control form-control-sm"
              />
              <button
                onClick={handleImageUpdate}
                className="btn btn-secondary btn-sm"
              >
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
