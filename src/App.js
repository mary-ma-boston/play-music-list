import React, {useState} from 'react';

import './App.css';

const PlayButton = (props) => <button className='button' onClick={props.playButtonHandler}>play</button>;
const PauseButton = (props) => <button className='button' onClick={props.pauseButtonHandler}>pause</button>;
const NextButton = (props) => <button className='button' onClick={props.nextButtonHandler}>next</button>;
const PreviousButton = (props) => <button className='button' onClick={props.previousButtonHandler}>Prev</button>;

function App() {
  const tracks = [
    {id: 1, name: 'A', artist: 'aa'},
    {id: 2, name: 'B', artist: 'bb'},
    {id: 3, name: 'C', artist: 'cc'},
    {id: 4, name: 'D', artist: 'dd'},
    {id: 5, name: 'E', artist: 'ee'},
  ];

  const [selectedTrack, setSelectedTrack] = useState({...tracks[0]});

  const [isPaused, setIsPaused] = useState(true);

  const onNextButtonClick = () => {
    const currentIndex = tracks.findIndex((item)=>item.id === selectedTrack.id);
    let newSelectedTrack;
    if(currentIndex < tracks.length - 1) {
      newSelectedTrack = tracks[currentIndex + 1];
      setSelectedTrack({...newSelectedTrack})
    } else {
      setSelectedTrack({...tracks[0]});
    }
  };

  const onPreviousButtonClick = () => {
    const currentIndex = tracks.findIndex((item)=>item.id === selectedTrack.id);
    let newSelectedTrack;
    if(currentIndex > 0){
      newSelectedTrack = tracks[currentIndex - 1];
      setSelectedTrack({...newSelectedTrack})
    } else {
      setSelectedTrack({...tracks[tracks.length-1]});
    }
  };

  const onPauseHandler = () => {
    setIsPaused(false);
  };

  const onPlayHandler = () => {
    setIsPaused(true);
  };

  

  const renderTracks = () => {
    return (
      tracks.map((item)=>{
        return (
          <div key={item.id} className={`listItem ${item.id === selectedTrack.id? 'selectedStyle' :''}`}>
            <span>name: {item.name}  &nbsp;</span>
            <span>artist: {item.artist}</span>
          </div>
        )
      })
    )
  }


  return (
   <div className='container'>
    <h1>Play Music List</h1>
    <div> now is {isPaused? 'paused':'play'}: </div>
    <div className='trackList'>{renderTracks()}</div>
    <div>
      <PreviousButton previousButtonHandler={onPreviousButtonClick}/>
      {!isPaused && <PlayButton playButtonHandler={onPlayHandler}/>}
      {isPaused && <PauseButton pauseButtonHandler={onPauseHandler}/>}
      <NextButton nextButtonHandler = {onNextButtonClick}/>
    </div>
   </div>
  )
}

export default App;
