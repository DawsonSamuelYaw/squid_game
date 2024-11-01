import React from 'react';
import { FaPlay, FaStar } from 'react-icons/fa';
import city from '../imgs/[CITYPNG 1.png';
import li from '../imgs/Ellipse 2.png';
import eli from '../imgs/Ellipse 3.png';
import F from '../imgs/face.png';
import grp from '../imgs/Group 1.png';
import I from '../imgs/im.png';
import M from '../imgs/mm.png';
import Ms from '../imgs/ms.png';
import P from '../imgs/Polygon 1.png';
import tr from '../imgs/Polygon 2.png';
import tri from '../imgs/Polygon 3.png';
import R2 from '../imgs/Rectangle 2.png';
import R from '../imgs/Rectangle 3.png';
import box from '../imgs/Rectangle 7.png';
import S from '../imgs/s.png';
import tri_6 from '../imgs/Polygon 6.png';

const Squid = () => {
  return (
    // Main container for the Squid Game component
    <div className="con h-[170vh] bg-black font-[poppins] text-white">
      
      {/* Main section */}
      <div className="main">
        
        {/* Profile image with circular border */}
        <div className="hello rounded-full border-[5px] border-rose-600 p-[1em] absolute top-[50%] left-[30%]">
          <img src={F} alt="Face icon" className="w-[100px] h-[100px]" />
        </div>
        
        {/* Top bar with icons and images */}
        <div className="flex justify-between p-[3em]">
          <div className="flex space-x-3">
            <img src={eli} alt="" className="w-[26px] h-[26px]" />
            <img src={tri} alt="" className="w-[26px] h-[26px]" />
            <img src={box} alt="" className="w-[26px] h-[26px]" />
          </div>
          <div className="second">
            <img src={city} alt="Cityscape image" />
          </div>
          <div className="last">
            <img src={grp} alt="Group icon" />
          </div>
        </div>
        
        {/* Center image display */}
        <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img src={S} alt="Main Character" />
        </div>
        
        {/* Bottom icons for other visuals */}
        <div className="hello border-[5px] border-rose-600 absolute top-[100%] left-[20%] p-[1em]">
          <img src={M} alt="Additional Face icon" className="w-[100%] h-[100px]" />
        </div>
        
        {/* Decorative shapes positioned around the interface */}
        <div className="absolute top-[80%] left-[74%]">
          <img src={R} alt="Rectangle shape" />
        </div>
        
        <div className="absolute top-[122%] left-[65%] flex justify-center">
          <img src={Ms} alt="Shape icon" />
        </div>
        
        <div className="absolute top-[120%] left-[65%] flex justify-center">
          <img src={P} alt="Polygon shape" />
        </div>

        {/* Button with icon and text */}
        <button>
          <div className="absolute top-[110%] left-[80%] flex">
            <img src={R2} alt="Button icon" />
            <img src={li} alt="List icon" />
          </div>
          <div className="absolute top-[114%] left-[80.5%]">
            <p className="text-center">Start New Game</p>
          </div>
          <div className="absolute top-[112%] left-[91%] flex">
            <img src={tr} alt="Triangle icon" className="w-[51.92px] h-[51.92px]" />
          </div>
        </button>

        {/* Main content section with heading and description */}
        <div className="sec flex justify-between space-x-[10em] my-[10em] px-[2em]">
          <div className="con-1">
            
            {/* Game title */}
            <div className="head flex items-center space-x-4">
              <h1 className="text-[48px] p-5 bg-gradient-to-r from-[#E93E7D] to-white text-transparent bg-clip-text">Squid Games</h1>
            </div>
            
            {/* Game description with icon images */}
            <div className="flex items-center">
              <div className="flex flex-col space-y-3">
                <img src={tri_6} alt="Triangle icon" />
                <img src={box} alt="Rectangle icon" />
              </div>
              <p className="text-[22px] w-[366px] h-[78px]">
                Once you start the game, there is no turning back. The winner is alone; the loser only faces death.
              </p>
            </div>
          </div>
          
          {/* Side image */}
          <div className="con-3">
            <img src={I} alt="Side graphic or character image" />
          </div>
        </div>
      </div>

      {/* Footer section with navigation links */}
      <div className="relative top-[15%]">
        <div className="flex justify-between p-[20px]">
          <div className="ma flex space-x-[53px]">
            <a href="#">About</a>
            <a href="#">Trailer</a>
            <a href="#">Games</a>
            <a href="#">Actors</a>
          </div>
          <div className="start flex items-center space-x-2">
            <a href="#">Start New Game</a>
            <FaPlay />
          </div>
          <div className="session flex space-x-[32px]">
            <a href="#">Season 1</a>
            <a href="#">2021</a>
            <div className="sub flex items-center">
              <FaStar className="text-yellow-600" />
              <a href="#" className="text-yellow-600">9.8</a>
            </div>
          </div>
        </div>
      </div>
      {/* End of Footer Section */}

    </div>
  );
};

export default Squid;
