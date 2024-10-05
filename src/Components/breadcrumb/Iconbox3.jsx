import React from "react";
import CountUp from "react-countup";

Iconbox3.propTypes = {};

function Iconbox3(props) {
  return (
    <section className="inner-review-section-two">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="wd-review-job thumb1 widget-counter">
              <div className="thumb">
                <img
                  src={require("../../assets/images/review/thumb-review.png")}
                  alt="images"
                />
                <div className="trader-box box1 ani4">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.82861 17.9669L10.8172 11.6126L17.1715 9.62402L15.1829 15.9783L8.82861 17.9669Z"
                        stroke="#14A077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="13"
                        cy="13.7949"
                        r="12"
                        stroke="#14A077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <CountUp
                        className="number"
                        end={198}
                        suffix="+"
                        duration={3}
                        enableScrollSpy
                      />
                    </h6>
                    <div className="des">Countries</div>
                  </div>
                </div>
                <div className="trader-box box2 ani5">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.6673 10.4618C22.3412 8.11547 21.2527 5.94139 19.5695 4.27451C17.8863 2.60762 15.7017 1.54041 13.3522 1.23725C11.0028 0.934097 8.61881 1.41182 6.56759 2.59684M1.33398 2.46185V7.79518H6.66732"
                        stroke="#14A077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.33398 13.1289C1.66006 15.4753 2.74856 17.6494 4.4318 19.3162C6.11504 20.9831 8.29964 22.0503 10.6491 22.3535C12.9985 22.6567 15.3825 22.1789 17.4337 20.9939M22.6673 21.1289V15.7956H17.334"
                        stroke="#14A077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <CountUp
                        className="number"
                        end={350}
                        suffix="k"
                        duration={3}
                        enableScrollSpy
                      />
                    </h6>
                    <div className="des">Job Search Success</div>
                  </div>
                </div>
                <div className="trader-box box3 ani4">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.52382 15.5352C5.03915 15.5352 1.20898 16.213 1.20898 18.929C1.20898 21.6438 5.01465 22.3473 9.52382 22.3473C14.0085 22.3473 17.8387 21.6683 17.8387 18.9535C17.8387 16.2387 14.033 15.5352 9.52382 15.5352Z"
                        stroke="#14A077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.52465 11.6616C12.4833 11.6616 14.854 9.28976 14.854 6.33226C14.854 3.3736 12.4833 1.00293 9.52465 1.00293C6.56715 1.00293 4.19531 3.3736 4.19531 6.33226C4.19531 9.28976 6.56715 11.6616 9.52465 11.6616Z"
                        stroke="#14A077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.4056 7.9082V12.5865"
                        stroke="#3772FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.7912 10.2474H18.0195"
                        stroke="#3772FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6 className="number">1 million+</h6>
                    <div className="des">Candidates</div>
                  </div>
                </div>
                <div className="group-tab menu-tab">
                  <div className="user-tag tag1">
                    <img
                      src={require("../../assets/images/review/user1.jpg")}
                      alt="images"
                    />
                  </div>
                  <div className="user-tag tag2">
                    <img
                      src={require("../../assets/images/review/user2.jpg")}
                      alt="images"
                    />
                  </div>
                  <div className="user-tag tag3">
                    <img
                      src={require("../../assets/images/review/user3.jpg")}
                      alt="images"
                    />
                  </div>
                  <div className="user-tag tag4 active">
                    <img
                      src={require("../../assets/images/review/user4.jpg")}
                      alt="images"
                    />
                  </div>
                  <div className="user-tagg tag5 ani2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_5631_259134)">
                        <circle
                          cx="19.9964"
                          cy="20.7069"
                          r="15.0028"
                          transform="rotate(-23.3151 19.9964 20.7069)"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.9343 34.4846C18.3247 37.7642 9.49824 34.2544 6.21866 26.6448C2.93909 19.0352 6.44886 10.2088 14.0584 6.92922C21.668 3.64965 30.4945 7.15942 33.774 14.769C37.0536 22.3786 33.5438 31.205 25.9343 34.4846ZM26.764 21.0106C25.8277 18.838 23.9418 18.1958 20.4373 18.7995L18.7895 14.9761C19.858 14.7546 20.9797 14.7725 22.1847 15.0404L22.5399 12.6451C21.0234 12.2976 19.4422 12.3538 17.9542 12.8081L17.4339 11.6008L15.6169 12.3838L16.1198 13.5506C13.5958 14.8774 12.4627 17.1311 13.399 19.3037C14.3788 21.577 16.2756 22.0715 19.6544 21.5221L21.3541 25.4659C19.9093 25.8497 18.522 25.7318 16.9321 25.3194L16.3847 27.7261C18.2898 28.2108 20.2913 28.1653 22.1724 27.5944L23.0393 29.606L24.8563 28.8229L23.9979 26.8312C26.5547 25.4668 27.7178 23.2236 26.764 21.0106ZM18.6044 19.0881C16.7974 19.3186 16.1671 18.9459 15.8027 18.1003C15.4215 17.2159 15.8068 16.2147 17.0792 15.5469L18.6044 19.0881ZM24.3601 22.2131C24.7764 23.1792 24.3108 24.1671 23.0385 24.8349L21.469 21.1933C23.2979 20.9544 23.97 21.308 24.3604 22.2139L24.3601 22.2131Z"
                          fill="#1E68F6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5631_259134">
                          <rect
                            width="30.0056"
                            height="30.0056"
                            fill="white"
                            transform="translate(0.280762 12.8671) rotate(-23.3151)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 content-tab wow fadeInRight">
            <div className="wd-review-job contentbox1">
              <h3>Get the job that's right for you</h3>
              <p>Our community is built for:</p>
              <ul className="wd-list-icon">
                <li>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 8.79492C0 13.2061 3.5888 16.7949 8 16.7949C12.4112 16.7949 16 13.2061 16 8.79492C16 4.38372 12.4112 0.794922 8 0.794922C3.5888 0.794922 0 4.38372 0 8.79492ZM12.1657 7.36061C12.4781 7.04819 12.4781 6.54166 12.1657 6.22924C11.8533 5.91682 11.3467 5.91682 11.0343 6.22924L7.2 10.0636L5.36569 8.22924C5.05327 7.91682 4.54673 7.91682 4.23431 8.22924C3.9219 8.54166 3.9219 9.04819 4.23431 9.36061L6.63432 11.7606C6.94673 12.073 7.45327 12.073 7.76569 11.7606L12.1657 7.36061Z"
                        fill="#14A077"
                      />
                    </svg>{" "}
                  </span>
                  Project, program, and product managers who are focused on
                  driving outcomes and achieving tangible results.
                </li>
                <li>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 8.79492C0 13.2061 3.5888 16.7949 8 16.7949C12.4112 16.7949 16 13.2061 16 8.79492C16 4.38372 12.4112 0.794922 8 0.794922C3.5888 0.794922 0 4.38372 0 8.79492ZM12.1657 7.36061C12.4781 7.04819 12.4781 6.54166 12.1657 6.22924C11.8533 5.91682 11.3467 5.91682 11.0343 6.22924L7.2 10.0636L5.36569 8.22924C5.05327 7.91682 4.54673 7.91682 4.23431 8.22924C3.9219 8.54166 3.9219 9.04819 4.23431 9.36061L6.63432 11.7606C6.94673 12.073 7.45327 12.073 7.76569 11.7606L12.1657 7.36061Z"
                        fill="#14A077"
                      />
                    </svg>{" "}
                  </span>
                  Professionals looking for practical methodologies, tools, and
                  insights to enhance project delivery and success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Iconbox3;
