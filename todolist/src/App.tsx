import { useRef, useState } from "react";

const todoData = [
  { no: 3, text: "할일 3", edit: false },
  { no: 2, text: "할일 2", edit: false },
  { no: 4, text: "할일 4", edit: false },
  { no: 1, text: "할일 1", edit: false },
];

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [dataList, setDataList] = useState(todoData);

  const today = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    return `${year}.${month}.${day}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // useRef의 no 값은 어떻게 초기화 하는게 좋을까?
  const sortRefData = JSON.parse(JSON.stringify(dataList));

  sortRefData.sort((a: any, b: any) => a.no > b.no ? 1 : -1);

  const nextAddNo = useRef(
    sortRefData.length > 0 ? sortRefData[sortRefData.length - 1].no : 0
  );

  // const nextAddNo = useRef(
  //   dataList.length > 0 ? dataList[dataList.length - 1].no : 0
  // );

  console.log(nextAddNo)

  const handleClickAdd = () => {
    setDataList([
      ...dataList,
      {
        no: (nextAddNo.current += 1),
        text: inputValue,
        edit: false,
      },
    ]);
  };

  const handleClickDelete = (no: number) => {
    setDataList((dataList) => dataList.filter((item) => item.no !== no));
  };

  const handleClickEdit = (no: number) => {
    setDataList(dataList.map((item) => item.no === no ? { no: item.no, text: item.text, edit: true } : item));
  };

  const handleEditInputChange = (idx: number, changeText: string) => {
    const update = dataList[idx];
    update.text = changeText;
    setDataList([...dataList]);
  };

  const handleClickEditComplete = (no: number) => {
    setDataList(dataList.map((item) => item.no === no ? { no: item.no, text: item.text, edit: false } : item));
  }

  const handleClickUp = (idx: number) => {
    dataList.splice(idx - 1, 0, dataList[idx]);
    dataList.splice(idx + 1, 1);

    setDataList([...dataList]);
  }

  const handleClickDown = (idx: number) => {
    dataList.splice(idx + 2, 0, dataList[idx]);
    dataList.splice(idx, 1);

    setDataList([...dataList]);
  }

  return (
    <div>
      <h1>{today()} Todo</h1>
      <div>
        <input
          type="text"
          placeholder="할일 입력"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleClickAdd}>추가</button>
      </div>
      <hr />
      {dataList.length > 0 ? (
        <ul>
          {dataList.map((item, index) => (
            <li key={item.no}>
              {item.edit ? (
                <>
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) =>
                      handleEditInputChange(index, e.target.value)
                    }
                  /> &nbsp;
                  <button onClick={() => handleClickEditComplete(item.no)}>수정 완료</button>
                </>
              ) : (
                <>
                  <span>{item.text}</span> &nbsp;
                  <button onClick={() => handleClickEdit(item.no)}>수정</button>
                </>
              )}
              <button onClick={() => handleClickDelete(item.no)}>삭제</button>
              <button onClick={() => handleClickUp(index)} disabled={index === 0 ? true : false}>Up</button>
              <button onClick={() => handleClickDown(index)} disabled={index === dataList.length - 1 ? true : false}>Down</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>할일을 입력해 주세요!</p>
      )}
    </div>
  );
}

export default App;
