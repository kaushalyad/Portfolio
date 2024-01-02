import React from "react";

const Profile = () => {
  return (
    <div className=" items-center pt-24 " id="profile">
      <div>
        <p className="comic text-white text-center text-7xl font-bold mobile:text-5xl smallMobile:text-5xl">
          My Coding Profiles
        </p>
      </div>
      <div className=" w-[70%] my-24 mx-auto grid grid-cols-3 gap-y-24 place-items-center mobile:grid-cols-2 gap-x-4 smallMobile:grid-cols-2 gap-x-3">
        <div className="bg-white block z-20 rounded-lg px-4 py-3">
          <div className="flex items-center ">
            <div>
              <a
                href="https://codeforces.com/profile/kaushalyad321"
                className="my-auto mx-auto"
              >
                <img
                  src="/Portfolio/logos/codeforces.svg"
                  alt="codeforces"
                  className="w-32 px-8 py-5
                  bg-white rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white block z-20 rounded-full px-4 py-3">
          <div className="flex items-center">
            <div>
              <a href="https://www.codechef.com/users/kaushalyad321">
                <img
                  src="/Portfolio/logos/codechef.svg"
                  alt="codechef"
                  className="w-32 px-4 py-3
                  bg-white rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white block z-20 rounded-full px-4 py-3">
          <div>
            <div>
              <a href="https://leetcode.com/kaushalyad321/">
                <img
                  src="/Portfolio/logos/leetcode.svg"
                  alt="leetcode"
                  className="w-32 px-4 py-3
                  bg-white rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white block z-20 rounded-full px-4 py-3">
          <div className="flex items-center">
            <div>
              <a href="https://auth.geeksforgeeks.org/user/kaushalyad321">
                <img
                  src="/Portfolio/logos/geeksforgeeks.svg"
                  alt="geekforgeeks"
                  className="w-32 px-4 py-3
                  bg-white rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white block z-20 rounded-full px-4 py-3">
          <div className="flex items-center">
            <div>
              <a href="https://cses.fi/user/135054">
                <img
                  src="/Portfolio/logos/cses.png"
                  alt="cses"
                  className="w-48 bg-slate-600 rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white block z-20 rounded-lg px-4 py-3">
          <div>
            <div>
              <a href="https://atcoder.jp/users/kaushalyad321">
                <img
                  src="/Portfolio/logos/atcoder.svg"
                  alt="atcoder"
                  className=" w-32 px-4 py-3  bg-white rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className=" block col-start-1 bg-white z-20 rounded-full px-4 py-3 laptop:col-start-2 largeTablet:col-start-2 medium:col-start-2 tablet:col-start-2">
          <a href="https://www.hackerrank.com/profile/kaushalyad321">
            <img
              src="/Portfolio/logos/hackerrank.svg"
              alt="Hakerrank"
              className="w-32 px-4 py-3  bg-white rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
