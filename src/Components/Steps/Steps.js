import React, { useState } from "react";
import sortByDate from "../../utils/utils";
import StepsForm from "./StepsForm";
import StepsList from "./StepsList";

const Steps = () => {
  const [edit, setEdit] = useState({
    id: "",
    date: "",
    km: "",
  });
  const [diary, setDairy] = useState([
    {
      id: 2007,
      date: "20.07.2019",
      km: "5.7",
    },
    {
      id: 1907,
      date: "19.07.2019",
      km: "14.2",
    },
    {
      id: 1807,
      date: "18.07.2019",
      km: "3.4",
    },
  ]);

  const addNewDiary = (item) => {
    let equalDate = diary.find((elem) => elem.date === item.date);
    let equalId = diary.find((elem) => elem.id === item.id);
    if (equalId) {
      let newDiary = diary.map((elem) => {
        if (elem.id === item.id) {
          elem.date = item.date;
          elem.km = item.km;
        }
        return elem;
      });
      sortByDate(newDiary);
      setDairy(newDiary);
      clearEdit();
    } else if (equalDate) {
      let newDiary = diary.map((elem) => {
        if (elem.id === item.id) {
          elem.km = Number(elem.km) + Number(item.km);
        }
        return elem;
      });
      setDairy(newDiary);
    } else {
      let newDiary = [...diary, item];
      sortByDate(newDiary);

      setDairy(newDiary);
    }
  };

  const removeItem = (id) => {
    setDairy((prevDiary) => prevDiary.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setEdit(item);
  };

  const clearEdit = () => {
    setEdit({
      id: "",
      date: "",
      km: "",
    });
  };

  return (
    <div>
      <StepsForm
        onAddNewDiary={addNewDiary}
        edit={edit}
        clearEdit={clearEdit}
      />
      <StepsList diary={diary} onRemove={removeItem} onEdit={editItem} />
    </div>
  );
};

export default Steps;
