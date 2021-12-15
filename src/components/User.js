import React, {useEffect, useState } from 'react';

function User() {
  const [userData, setUserData] = useState(null);
  const [modalOpen, setModal] = useState(false)

  const openModal = () => setModal({ modalOpen: true });
  const closeModal = () => setModal({ modalOpen: false });


  useEffect(() => {
    async function fetchUserData () {
      const res = await fetch('/api/bios/oyelesiopeyemi');
      const data = await res.json();
      console.log(data)
      // console.log(data.person)
      setUserData(data);
      // return null
    };

    fetchUserData();
  }, [])

  return (
    <div className="user-container">
      <div className="d-flex flex-column">
        <div className="primary-user-details">

          <div className="hex">
            <div className="hex-background">
            <img src="https://images.freeimages.com/images/large-previews/4d6/chugh-1171409.jpg" alt="Obama" className="user_image1" />
            </div>
          </div>
          
          <h4>Name: {userData && userData.person.name}</h4>
        </div>
        <div className="secondary-user-details">
          <h6>Skills and Interests</h6>

          <div className="prof-section">
            <h6>Master/Influencer</h6>
              <div className="btn-group d-flex flex-row">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
                <button>Sony</button>
                <button>Apple</button>
                {/* <button>Samsung</button> */}
              </div>

          </div>

          <div className="prof-section">
            <h6>Proficient</h6>

            <div class="btn-group d-flex flex-row">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
                <button>Sony</button>
                <button>Apple</button>
                {/* <button>Samsung</button> */}
              </div>

          </div>

          <div className="prof-section">
            <h6>Novice</h6>

            <div className="btn-group d-flex flex-row">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
                <button>Sony</button>
                <button>Apple</button>
                {/* <button>Samsung</button> */}
              </div>

          </div>

        </div>
      </div>
    </div>

// <div
// className="d-flex align-items-center justify-content-center"
// style={{ height: "100vh" }}
// >
// <Button id={id} onClick={this.openModal}>
//   Launch demo modal
// </Button>
// </div>
  );
}

export default User;