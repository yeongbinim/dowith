import { useState , useRef } from 'react';
import ProgressBar from 'Components/ProgressBar';

function Button({text, onClick}){
	return (
	  <button onClick={onClick}>
		{text}
	  </button>
	)
}

function Container() {
  const [ current , setCurrent ] = useState(0);
  const limit = 4;
  const range = 100 / limit;
  const isLoading = useRef(false);
  const animationSpeed = 1000;

  // const delay = ( delay ) => {
  //   console.log("hihi");
  //   isLoading.current = true;
  //   return new Promise(() => (isLoading.current = false));
  // }


  const handleNext = async() => {
    if( isLoading.current ) return;
    if( current  === limit ) return;
    setCurrent( current + 1 );
    console.log(current);
  }

  const handlePrev = async() => {
    if( isLoading.current ) return;
    if( current  === 0 ) return;
    setCurrent( current - 1 );
    console.log(current);
  }
  return (
    <div>
      <ProgressBar width={ current * range } animationSpeed={animationSpeed}/>
      <span>{current}</span>
      <br />
      <br />
      <Button text={'이전'} onClick={handlePrev}/>
      <Button text={'다음'} onClick={handleNext}/>
    </div>
  );
}

export default Container;