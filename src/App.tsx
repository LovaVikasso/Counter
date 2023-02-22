import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import {SetterCount} from "./components/SetterCount";

function App() {
    const maxCount = 5
    const initialCount = 0
    const [count, setCount] = useState<number>(initialCount)
    const incrementCount = () => {
        if (count < maxCount) setCount(count + 1)
    }
    const resetCount = () => {
        setCount(initialCount)
    }

    return (
        <div className="App">
            {/*<SetterCount/>*/}
            <div className='Counter'>
                <p>Жмякаем до пяти:{count}</p>
                <div>
                    <Button className={(count < maxCount) ? "active" : "disabled"} callBack={incrementCount}
                            name={"inc"}/>
                    <Button className={(count < maxCount) ? "disabled" : "active"} callBack={resetCount}
                            name={"reset"}/>
                </div>
            </div>
        </div>
    );
}

export default App;