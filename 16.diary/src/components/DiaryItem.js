const DiaryItem = ({id, createDate, emotionId, content}) => {
    const date = new Date(createDate).toLocaleDateString();
    return (
        <div>
            <h3>{date}</h3>
            <p>오늘의 기분 : {emotionId}</p>
            <p>{content}</p>
        </div>
    );
};

export default DiaryItem;