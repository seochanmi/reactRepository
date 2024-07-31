//src/comonents/Study2.js

// src/components/Study.js

import React from 'react';
import myCss from './css/study.module.css'
// classnames 를 import 해서 cn 이라는 이름으로 사용하기
import cn from 'classnames'
// 외부 css 를 바인딩해서 사용하게 도와주는 binder import
import binder from 'classnames/bind'

const cx=binder.bind(myCss)


function Study2(props) {
    //myCss 는 object 이다 
    console.log(myCss);

    return (
        <div>
            <h3>Study2 입니다</h3>
            <div className={myCss.box}>Study.js box</div>
            <p className={myCss['bg-yellow']}>노란 배경</p>
            <div className={myCss.box + ' ' + myCss['bg-yellow']}>box</div>
            <div className={cx({box:true, 'bg-yellow':false})}>box</div>
        </div>
    );
}

export default Study2;