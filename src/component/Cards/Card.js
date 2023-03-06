import React, { useState } from "react";
import '../Shortlist.css';
import { Link } from 'react-router-dom'
import Popup from "./Popup";





const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  //======
  const [active1, setActive1] = useState('black');
  const [active2, setActive2] = useState('black');
  const [active3, setActive3] = useState('black');
  const [active4, setActive4] = useState('black');
  const [active5, setActive5] = useState('black');
  const [active6, setActive6] = useState('black');
  const togglePopup = (e) => {
    e.target.innerText = "SELECTED";
    setActive1("grey");
    setIsOpen(!isOpen);
  }
  const togglePopup2 = (e) => {
    e.target.innerText = "SELECTED";
    setActive2("grey");
    setIsOpen2(!isOpen2);
  }
  const togglePopup3 = (e) => {
    e.target.innerText = "SELECTED";
    setActive3("grey");
    setIsOpen3(!isOpen3);
  }
  const togglePopup4 = (e) => {
    e.target.innerText = "SELECTED";
    setActive4("grey");
    setIsOpen4(!isOpen4);
  }
  const togglePopup5 = (e) => {
    e.target.innerText = "SELECTED";
    setActive5("grey");
    setIsOpen5(!isOpen5);
  }
  const togglePopup6 = (e) => {
    e.target.innerText = "SELECTED";
    setActive6("grey");
    setIsOpen6(!isOpen6);
  }





  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="singer_details">
            <img className="singer_image" src="https://ca-times.brightspotcdn.com/dims4/default/b473854/2147483647/strip/true/crop/1415x2048+0+0/resize/1200x1737!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F29%2F85%2Fc42b8eecc4f52db0daaa148840dc%2Fla-1561158866-pklf765ajd-snap-image" alt="jade" />
            <div className="details">
              <h3>Jade</h3>
              <span>singer</span>
              <p className="place">New Delhi</p>
              <div className="booking">
                <p>Event Booking</p>
                <span>104</span>
              </div>
              <div className="gallery">
                <img src="https://i.pinimg.com/236x/4f/7b/08/4f7b0846027d53520dcb116e5495c3a4.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/a7/68/5c/a7685cbfe316d59892e915aa57a71600.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/57/31/7f/57317f5144f26dd1fa216160b7cdd154.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/2f/27/b3/2f27b3573ae06d635574e88f4fd6259d.jpg" alt="singer" />
              </div>

              <button className='select'

                onClick={togglePopup}
                style={{ backgroundColor: active1 }}
              >SELECT</button>
              {isOpen && <Popup
                content={<>
                  <b>Click Here For Booking</b>
                  <Link to='/registered' target='_self'> <button onClick={togglePopup}>Click</button></Link>

                </>}
                handleClose={togglePopup}
              />}

            </div>
          </div>
        </div>

        <div className="card">
          <div className="singer_details">
            <img className="singer_image" src="https://i.pinimg.com/236x/7c/b3/09/7cb309baf4145be90c72dc74d18a1f55.jpg" alt="Shivam Vashisht" />
            <div className="details">
              <h3>Shivam Vashisht</h3>
              <span>singer</span>
              <p className="place">NCR/Delhi</p>
              <div className="booking">
                <p>Event Booking</p>
                <span>376</span>
              </div>
              <div className="gallery">
                <img src="https://i.pinimg.com/236x/f7/c7/fa/f7c7fa412f6f7c72d7827664e56ae1b0.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/05/a0/5b/05a05ba27980d52c6df479b279e42427.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/db/a9/94/dba9948714e8ed88d46cff4c288c0c9d.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/e7/01/87/e70187250ed192df1aed9f02107daef3.jpg" alt="singer" />
              </div>
              <button className='select'

                onClick={togglePopup2}
                style={{ backgroundColor: active2 }}
              >SELECT</button>
              {isOpen2 && <Popup
                content={<>
                  <b>Click Here For Booking</b>
                  <Link to='/registered' target='_self'> <button onClick={togglePopup2}>Click</button></Link>

                </>}
                handleClose={togglePopup2}
              />}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="singer_details">
            <img className="singer_image" src="https://i.pinimg.com/236x/ed/42/4f/ed424f2210fc52aaa8b22c25715f8830.jpg" alt="Aviral Malay" />
            <div className="details">
              <h3>Aviral Malay</h3>
              <span>singer</span>
              <p className="place">New Delhi</p>
              <div className="booking">
                <p>Event Booking</p>
                <span>488</span>
              </div>
              <div className="gallery">
                <img src="https://i.pinimg.com/236x/5f/b0/b9/5fb0b92474e174c357e41d2a1078aa34.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/59/a1/aa/59a1aa3ff41a6a86cb5fb02c94fd6fd4.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/45/0e/85/450e85d28b3e9ab3b2ddb23b6571a8df.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/ee/32/8c/ee328cde5dcf9ce7aeee752af4dbce27.jpg" alt="singer" />
              </div>
              <button className='select'

                onClick={togglePopup3}
                style={{ backgroundColor: active3 }}
              >SELECT</button>
              {isOpen3 && <Popup
                content={<>
                  <b>Click Here For Booking</b>
                  <Link to='/registered' target='_self'> <button onClick={togglePopup3}>Click</button></Link>

                </>}
                handleClose={togglePopup3}
              />}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="singer_details">
            <img className="singer_image" src="https://i.pinimg.com/236x/a9/aa/f7/a9aaf7e27ac585b5e5dac5627fe1b194.jpg" alt="James Chakre Music" />
            <div className="details">
              <h3>James Chakre Music</h3>
              <span>singer</span>
              <p className="place">New Delhi</p>
              <div className="booking">
                <p>Event Booking</p>
                <span>135</span>
              </div>
              <div className="gallery">
                <img src="https://i.pinimg.com/236x/61/31/39/6131396ca72f53a44bf5c71b4a2a975a.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/40/ce/aa/40ceaa25da25caabfcb8e3f386522d71.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/11/be/ad/11bead2efa374a8338c0cfec5a37a0b3.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/12/c1/4b/12c14b324d09cd5820700ecbeaef0984.jpg" alt="singer" />
              </div>
              <button className='select'

                onClick={togglePopup4}
                style={{ backgroundColor: active4 }}
              >SELECT</button>
              {isOpen4 && <Popup
                content={<>
                  <b>Click Here For Booking</b>
                  <Link to='/registered' target='_self'> <button onClick={togglePopup4}>Click</button></Link>

                </>}
                handleClose={togglePopup4}
              />}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="singer_details">
            <img className="singer_image" src="https://i.pinimg.com/564x/df/2a/d2/df2ad233b14bd564511a54be7d1777b3.jpg" alt="Dhruv Sharma Official" />
            <div className="details">
              <h3>Dhruv Sharma Official</h3>
              <span>singer</span>
              <p className="place">New Delhi</p>
              <div className="booking">
                <p>Event Booking</p>
                <span>478</span>
              </div>
              <div className="gallery">
                <img src="https://i.pinimg.com/236x/fc/aa/16/fcaa16bbf24d488501f511a46d4f1cd6.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/84/08/c7/8408c76f823ecf3dda0afe147364bcbf.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/01/b7/a5/01b7a5e03a852bbe5cdc016ada3335ac.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/03/ca/10/03ca10208574254257c28a22329aa0f5.jpg" alt="singer" />
              </div>
              <button className='select'

                onClick={togglePopup5}
                style={{ backgroundColor: active5 }}
              >SELECT</button>
              {isOpen5 && <Popup
                content={<>
                  <b>Click Here For Booking</b>
                  <Link to='/registered' target='_self'> <button onClick={togglePopup5}>Click</button></Link>

                </>}
                handleClose={togglePopup5}
              />}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="singer_details">
            <img className="singer_image" src="https://i.pinimg.com/236x/5f/5c/db/5f5cdb03c82d55922f512819b8556cbc.jpg" alt="Mickey Joan" />
            <div className="details">
              <h3>Mickey Joan</h3>
              <span>singer</span>
              <p className="place">New Delhi</p>
              <div className="booking">
                <p>Event Booking</p>
                <span>368</span>
              </div>
              <div className="gallery">
                <img src="https://i.pinimg.com/236x/3c/a0/b8/3ca0b8db66e1b660adbfbe384b926e2f.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/ec/53/35/ec533519683379c9cac06779baae3044.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/e0/58/ea/e058ea15e4fe0de83ec9caa290917df0.jpg" alt="singer" />
                <img src="https://i.pinimg.com/236x/e3/ed/0e/e3ed0ee259c61f3ab43f3031e380e859.jpg" alt="singer" />
              </div>
              <button className='select'

                onClick={togglePopup6}
                style={{ backgroundColor: active6 }}
              >SELECT</button>
              {isOpen6 && <Popup
                content={<>
                  <b>Click Here For Booking</b>
                  <Link to='/registered' target='_self'> <button onClick={togglePopup6}>Click</button></Link>

                </>}
                handleClose={togglePopup6}
              />}
            </div>
          </div>
        </div>
      </div>
    </>
  )





}
export default Card;

