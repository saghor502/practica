import './slider.css';

export default function slider(){
    return(
        <input type="range" min="1" max="100" value="50" className="slider" id = "slider"></input>
    );
}