import React from 'react';
import Button from "./Button";

 type SetterPropsType ={
    name:string
    callBack:()=>void

}

export const SetterCount = () => {
    return (
        <div className='SetterCount'>
            <div>
                <p>Max value</p>
                <input />
            </div>
            <div>
                <p>Start value</p>
                <input/>
            </div>
            <Button name={'Set value'} callBack={()=>{}} className={'SetButton'}/>
        </div>
    );
};


