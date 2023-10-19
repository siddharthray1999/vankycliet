import React, { useState } from "react";
import "./Navbar.css";
import roayl from "../../Assets/Images/royal.png";
import bethistory from "../../Assets/Images/bethistory.png";
import { AiFillInfoCircle } from "react-icons/ai";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [visible, setVisible] = useState(false);

  const [stake, setStake] = useState(false);
  const stakehandleClose = () => setStake(false);
  const stakehandleShow = () => setStake(true);
  const myComponent = {
    height: "300px",
    overflowX: "hidden",
    overflowY: "scroll",
  };
  const navigate = useNavigate();
  const handleLogout = (props) => {
    // remove the token and user from the session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <button className="hamburger-menu" onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose style={{ color: "white" }} />
            ) : (
              <GiHamburgerMenu style={{ color: "white" }} />
            )}
          </button>
          <Link to="/">
            <img src={roayl} alt="logo" className="vanky-logo" />
          </Link>

          <div>
            <marquee attribute_name="welcome" className="nav-marquee">
              WELCOME TO THE VANKY.COM
            </marquee>

            <span className="nav-bell-icon">
              {/* <img className="bell-icon" src={bellicon} alt="" /> */}
            </span>
          </div>
        </div>
        <div className="navbar-right">
          <div>
            <span>
              <HiCurrencyRupee
                style={{ fontSize: "30px", color: "white" }}
                className="rupee-logo"
              />
            </span>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <span style={{ color: "white" }}>Main: 25000.00</span>
              <span style={{ color: "white" }}>Exposure : 0.00</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "1rem",
            }}
          >
            <img src={bethistory} alt="user" style={{ width: "30px" }} />
            <span style={{ color: "white" }}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  hfuih
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Change Password</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </div>
        </div>
      </div>

      <marquee attribute_name="welcome" className="mobile-nav-marquee">
        <span style={{ fontWeight: "700" }}>WELCOME TO THE VANKY.COM</span>
      </marquee>
      <div
        className={open ? "nav-menu-mobile" : "nav-menu"}
        onClick={() => setOpen(false)}
      >
        <ul>
          <li>
            <Link to="/" className="link-css">
              <FaHome style={{ fontSize: "20px" }} />
              <span>Dashoard</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-css">
              <BsPlayFill style={{ fontSize: "20px" }} />
              <span>In-play</span>
            </Link>
          </li>

          <li>
            <Link to="/runningmarketanalysis" className="link-css">
              <VscGraph style={{ fontSize: "20px" }} />
              <span>All Market Book</span>
            </Link>
          </li>

          <li>
            <Link to="/Profile" className="link-css">
              <CgProfile style={{ fontSize: "20px" }} />
              Profile
            </Link>
          </li>
          <li>
            <Link className="link-css" to="/Userchangepassword">
              <RiLockPasswordFill style={{ fontSize: "20px" }} />
              Password
            </Link>
          </li>
          <li onClick={handleShow}>
            <AiFillInfoCircle style={{ fontSize: "20px" }} />

            <span>Rules</span>
          </li>
          <li>
            <Link to="/MyCommission" className="link-css">
              <BiBook style={{ fontSize: "20px" }} />
              <span> My Commision</span>
            </Link>
          </li>
          <li>
            <BiBook style={{ fontSize: "20px" }} />

            <span>
              Report
              <ul
                className="submenu"
                style={{
                  marginTop: "8px",
                  borderTop: "3px solid #e2a500",
                  marginLeft: "-3rem",
                }}
              >
                <li style={{ listStyle: "none" }}>
                  <Link to="/AccountStatement" className="link-css">
                    <span>Account Statement</span>
                  </Link>
                  <Link to="/TotalLedger" className="link-css">
                    <span>Total Legder</span>
                  </Link>
                  <Link to="/ProfitLoss" className="link-css">
                    <span>Profit & Loss</span>
                  </Link>
                  <Link to="/BetHistory" className="link-css">
                    <span>Bet History</span>
                  </Link>
                  <Link to="/LiveBetHistory" className="link-css">
                    <span>Live Bet History</span>
                  </Link>
                </li>
              </ul>
            </span>
          </li>

          <li>
            <CgGames style={{ fontSize: "20px" }} />
            <span>
              Live Games
              <ul
                className="submenu"
                style={{
                  marginTop: "8px",
                  borderTop: "3px solid #e2a500",
                  marginLeft: "-3rem",
                }}
              >
                <li style={{ listStyle: "none" }}>
                  <Link to="/Allcasino" className="link-css">
                    <span>TeenPatti T20</span>
                  </Link>
                  <Link to="/Allcasino" className="link-css">
                    <span>TeenPatti 1Day</span>
                  </Link>
                  <Link to="/Allcasino" className="link-css">
                    <span>Andar Bahar</span>
                  </Link>
                  <Link to="/Allcasino" className="link-css">
                    <span>Dragon Tiger</span>
                  </Link>
                  <Link to="/Allcasino" className="link-css">
                    <span>32 Cards</span>
                  </Link>
                  <Link to="/Allcasino" className="link-css">
                    <span>Amar Akbar Anthony</span>
                  </Link>

                  <span>Search Result</span>
                </li>
              </ul>
            </span>
          </li>
          <li onClick={stakehandleShow}>
            <BiBook style={{ fontSize: "20px" }} />

            <span>Edit Stake</span>
          </li>
          <li>
            <Link to="/CupWinner" className="link-css">
              <VscGraph style={{ fontSize: "20px" }} />
              <span> IPL Winner</span>
            </Link>
          </li>
        </ul>

        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>VANKY12.COM RULES</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <button className="language" onClick={() => setVisible(false)}>
                Hindi
              </button>
              <button className="language" onClick={() => setVisible(true)}>
                English
              </button>
            </Modal.Body>
            {visible ? (
              <div style={myComponent}>
                <div style={{ textAlign: "center" }}>
                  Please take a few minutes here to understand the rules of
                  VANKY12, and understand accordingly.
                </div>
                <ol>
                  <li>Change your password after you log in.</li>
                  <li>0.0 /- coins will be charged for each game.</li>
                  <li>
                    0.0 /- coin charge will be there per day in test match.
                  </li>
                  <li>
                    No commission will be given on extra fancy, commission will
                    not be available in fancy in which No Comm is written.
                  </li>
                  <li>
                    If you do not make a single deal of match or session, then
                    you will be charged 0.0/- coins.
                  </li>
                  <li>All advance deals will be taken after the toss.</li>
                  <li>
                    In case the game is canceled or tied, all transactions will
                    be canceled and the transaction will be done on the session
                    and fancy that has been completed. During the match, the
                    company will decide the settlement of fancy on the condition
                    of the session, the decision of the company will be final.
                  </li>
                  <li>
                    Partnership and player run in test match bad weather and
                    match is canceled (draw) then result will be declared
                    according to the score at that time.
                  </li>
                  <li>
                    Deal amount for the match: Market TypeMinimum Bet
                    AmountMaximum Bet AmountWho Wins the Match500|500000Cricket
                    Sessions500|55000Cricket Aki Becky100|100000 Points Ended
                    Match Bet100|100000
                  </li>
                  <li>Aki Becky has a price of 95.</li>
                  <li>The lottery draw has a value of 9.5.</li>
                  <li>
                    Live draw is dependent on TV score. The rate never changes.
                    This is a good opportunity for the user.
                  </li>
                  <li>
                    Deal only after seeing and understanding the price during
                    the match. Any transaction entered into will not be deleted
                    or replaced. You are responsible for all transactions. All
                    deals here will be validated by ledger.
                  </li>
                  <li>
                    Deals of cheating or wrong price will be removed even after
                    the match is over.
                  </li>
                  <li>
                    If the match or session price is incorrect, then whatever
                    match or session has been traded will be automatically
                    removed. In such a case, any dispute will not be valid.
                  </li>
                  <li>
                    All transactions for sessions, partnerships and players who
                    are in running or retired players will be canceled when the
                    match is terminated. And the coins will be more or less
                    according to the session which is complete. And when the
                    result comes, the players who are where they are will be
                    considered.
                  </li>
                  <li>
                    The decision of the company will be final, no claim will be
                    accepted on it.
                  </li>
                  <li>
                    If you do not accept this agreement then do not do any deal.
                  </li>
                  <li>
                    You will be responsible for internet connection problem.
                  </li>
                </ol>
                <div style={{ textAlign: "center", fontWeight: "700" }}>
                  . Note: Transactions made will be valid only in case of server
                  or website failure or shutdown. In such a case, any kind of
                  debate will not be valid.
                </div>
              </div>
            ) : (
              <div style={myComponent}>
                <div style={{ textAlign: "center" }}>
                  कृपया admin.vanky12.com के नियमों को समझने के लिए यहां कुछ
                  मिनट दें, और अपने अनुसार समझ लें |
                </div>
                <ol>
                  <li>लॉग इन करने के बाद अपना पासवर्ड बदलें।</li>
                  <li>प्रत्येक गेम के लिए 0.0/- कॉइन्स चार्ज रहेगा |</li>
                  <li>टेस्ट मैच में प्रतिदिन 0.0/ कॉइन चार्ज रहेगा |</li>
                  <li>
                    एक्स्ट्रा फैंसी पर कमिशन नहीं मिलेगा , जिन फैंसी में No Comm
                    लिखा है उनमे कमिशन नहीं मिलेगा|
                  </li>
                  <li>
                    यदि आप मैच या सेशन का एक भी सौदा नहीं करते हो, ऐसे में आपसे
                    0.0/- कॉइन्स का चार्ज लिया जायेगा |
                  </li>
                  <li>सभी एडवांस सौदे टॉस के बाद लिए जाएंगे |</li>
                  <li>
                    खेल रद्द या टाई होने पर सभी सौदे रद्द कर दिए जाएंगे और
                    लेनदेन सेशन और फैंसी जो पूरा हो गया है उस पर किया जाएगा |
                    मैच के दौरान सेशन की कंडीशन पर फैंसी का सेटलमेंट कंपनी तय
                    करेगी कंपनी का डिसीजन ही फाइनल होगा|
                  </li>
                  <li>
                    टेस्ट मैच में पार्टनरशिप और प्लेयर रन खराब मौसम और मैच रद्द
                    ( ड्रॉ) होता है तो रिजल्ट उस टाइम जो स्कोर होगा उस हिसाब से
                    डिक्लियर होगा |
                  </li>
                  <li>
                    मैच के लिए सौदे की रकम: मार्केट का प्रकारकम से कम शर्त
                    राशिअधिकतम शर्त राशिमैच कौन जीतेगा500|500000 क्रिकेट
                    सेशन500|55000क्रिकेट एकी बेकी100|100000अंक समाप्त मैच का
                    दांव100|100000
                  </li>
                  <li>एकी बेकी में 95 का भाव है |</li>
                  <li>लॉटरी ड्रॉ में 9.5 का भाव है |</li>
                  <li>
                    लाइव ड्रा टीवी स्कोर पर निर्भर है | दर कभी नहीं बदली जाती है
                    | यह यूजर के लिए अच्छा मौका है |
                  </li>
                  <li>
                    मैच के दौरान भाव को देख और समझ कर ही सौदा करें | किये गए
                    किसी भी सौदे को हटाया या बदला नहीं जायेगा | सभी सौदे के लिए
                    आप स्वयं जिम्मेवार हैं |
                  </li>
                  <li>यहाँ सभी सौदे लेजर से मान्य किये जायेंगे |</li>
                  <li>
                    चीटिंग या गलत भाव के सौदे हटा दिए जायेंगे मैच खत्म होने बाद
                    भी।
                  </li>
                  <li>
                    मैच या सेशन भाव गलत चलने पर जो भी मैच या सेशन के सौदे हुए हे
                    वह स्वतः हट जायेंगे। ऐसी स्थिति में किसी भी तरह का वाद-विवाद
                    मान्य नहीं होगा।
                  </li>
                  <li>
                    मैच अबॉण्डेड होने पर जो सेशन, पार्टनरशिप और खिलाडी रनिंग में
                    हे या खिलाडी रिटायर हुआ हो सभी सौदे केंसल हो जायेंगे। और जो
                    सेशन कम्पलीट हे उनके हिसाब से कोइन्स कम या ज्यादा होंगे। और
                    रिजल्ट आने पे जो खिलाडी जहा हे वो ही माने जायेंगे।
                  </li>
                  <li>
                    कंपनी का डिसीज़न ही फाइनल होगा, उस पर कोई क्लेम मान्य नहीं
                    होगा।
                  </li>
                  <li>
                    अगर आप इस एग्रीमेंट को ऐक्सेप्ट नहीं करते हे तो कोई सौदा
                    नहीं कीजिये।
                  </li>
                  <li>इंटरनेट कनेक्शन प्रॉब्लम की जिम्मेवारी आपकी रहेगी |</li>
                </ol>
                <div style={{ textAlign: "center", fontWeight: "700" }}>
                  .नोट: सर्वर या वेबसाइट में किसी तरह की खराबी आने या बंद हो
                  जाने पर केवल किए गए सौदे ही मान्य होंगे | ऐसी स्तिथि में किसी
                  तरह का वाद-विवाद मान्य नहीं होगा |
                </div>
              </div>
            )}

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <Modal
            show={stake}
            onHide={stakehandleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Chip Setting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                <label>Chips Name 1: </label>
                <input type="text" />
                <label>Chips Name 1 </label>
                <input type="text" />

                <label>Chips Name 2: </label>
                <input type="text" />
                <label>Chips Name 2: </label>
                <input type="text" />

                <label>Chips Name 3: </label>
                <input type="text" />
                <label>Chips Name 3: </label>
                <input type="text" />

                <label>Chips Name 4: </label>
                <input type="text" />
                <label>Chips Name 4: </label>
                <input type="text" />

                <label>Chips Name 5: </label>
                <input type="text" />
                <label>Chips Name 5: </label>
                <input type="text" />

                <label>Chips Name 6: </label>
                <input type="text" />
                <label>Chips Name 6: </label>
                <input type="text" />

                <label>Chips Name 7: </label>
                <input type="text" />
                <label>Chips Name 7: </label>
                <input type="text" />

                <label>Chips Name 8: </label>
                <input type="text" />
                <label>Chips Name 8: </label>
                <input type="text" />

                <label>Chips Name 9: </label>
                <input type="text" />
                <label>Chips Name 9: </label>
                <input type="text" />

                <label>Chips Name 10: </label>
                <input type="text" />
                <label>Chips Name 10: </label>
                <input type="text" />

                <label>Chips Name 11: </label>
                <input type="text" />
                <label>Chips Name 11: </label>
                <input type="text" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={stakehandleClose}>
                Update Chip Setting
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </>
  );
};

export default Navbar;
