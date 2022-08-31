import React, { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { changeViewFlag } from "../todoSlice";
import { ViewFlag, VIEW_STATUSES } from "../types";

const ViewFlagSelector = () => {
  const dispatch = useAppDispatch();
  const handleOnChangeViewFlag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeViewFlag(e.target.value as ViewFlag));
  };
  const viewStatusArr = Object.entries(VIEW_STATUSES);

  return (
    <>
      <hr />
      <label>
        <span>閲覧フラグ：</span>
        <select
          name="viewFlag"
          defaultValue={"explanation"}
          onChange={(e) => handleOnChangeViewFlag(e)}
        >
          <option value={"explanation"} disabled>
            {"-- 選択してください --"}
          </option>
          {viewStatusArr.map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
          {/* <option value={"all"}>全て（削除済みを除く）</option>
          <option value={"updated"}>更新済み（削除済みを除く）</option>
          <option value={"deleted"}>削除済み</option> */}
        </select>
      </label>
    </>
  );
};

export default ViewFlagSelector;
