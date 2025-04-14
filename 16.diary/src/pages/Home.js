import Header from '../components/Header';
import Button from '../components/Button'; 
import DiaryList from '../components/DiaryList';

const diaryList = [
    {
        id: 1,
        createDate: new Date().getTime(),
        emotionId: 3,
        content: "아아아악",
    }
];

const Home = (() => {
    return (
        <div>
            <h4>Home</h4>
            <Header 
            title={"2025년4월14일"}
            leftChild={<Button text={"◀"} />}
            rightChild={<Button text={"▶"} />}
            />
            <DiaryList diaryList={diaryList}/>
        </div>
    );
})
export default Home;