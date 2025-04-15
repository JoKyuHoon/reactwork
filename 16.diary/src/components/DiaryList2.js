import DiaryItem2 from "./DiaryItem";

const DiaryList2 = (({ diaryList }) => {
    return (
        <div>
            <h2> 일기 리스트</h2>
            {diaryList.map((item) => (
                <DiaryItem2 key={item.id} {...item} />
            ))}
        </div>
    );
})

export default DiaryList2;