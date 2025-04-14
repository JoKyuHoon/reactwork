import e1 from '../resources/img/e1.PNG';
import e2 from '../resources/img/e2.PNG';
import e3 from '../resources/img/e3.PNG';
import e4 from '../resources/img/e4.PNG';
import e5 from '../resources/img/e5.PNG';
import e6 from '../resources/img/e6.PNG';

export function getEmotionImg(emotionId) {
    switch(emotionId) {
        case 1:
            return e1;
        case 2:
            return e2;
        case 3:
            return e3;
        case 4:
            return e4;
        case 5:
            return e5;
        case 6:
            return e6;
        default :
            return null;
    }
}
