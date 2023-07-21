import './App.css';
function getRandom(max: number, min: number) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
function App() {

  return (
    <div className="w-full flex items-center h-screen">

      <div className='container mx-auto'>
        <div id="cube"
          onClick={(e) => {
            var x = getRandom(24, 2);
            var y = getRandom(24, 2);
            console.log(x, y);

            e.currentTarget.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
          }}
        >
          <div className="front">
            <span className="dot dot1"></span>
          </div>
          <div className="back">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
          </div>
          <div className="right">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>
          <div className="left">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
          </div>
          <div className="top">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
          </div>
          <div className="bottom">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
            <span className="dot dot6"></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
