import DiaryItem from "./DiaryItem";

const DiaryList = (({ diaryList }) => {
    return (
        <div>
            <h2> 일기 리스트</h2>
            {diaryList.map((item) => (
                <DiaryItem key={item.id} {...item} />
            ))}
        </div>
    );
})

export default DiaryList;