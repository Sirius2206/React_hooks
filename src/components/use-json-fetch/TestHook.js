import React, { useState } from "react";
import useJsonFetch from "./useJsonFetch";

import "./TestHook.css"

function TestHook() {
      const [testData, loading1, error1] = useJsonFetch(process.env.REACT_APP_TASK2_URL + "/data");
      const [data2, testLoading, error2] = useJsonFetch(process.env.REACT_APP_TASK2_URL + "/loading");
      const [data3, loading3, testError] = useJsonFetch(process.env.REACT_APP_TASK2_URL + "/error");

  return (
    <div>
      <div className="test-block">
        <p>
        <span>TestData</span>
        <br />
        <span>Если получение данных успешно, здесь отобразится статус</span>
        <br />
        <span className="test-message">{testData?.status}</span>
        </p>
      </div>
      <div className="test-block">
        <p>
        <span>TestLoading</span>
        <br />
        <span>Здесь отобразится информация о тесте статуса загрузки</span>
        <br />
        <span className="test-message">{testLoading ? "Загрузка" :"Загрузка завершена"}</span>
        </p>
      </div>
      <div className="test-block">
        <p>
        <span>TestError</span>
        <br />
        <span>Здесь отобразится информация о тесте ошибки</span>
        <br />
        <span className="test-message">{testError}</span>
        </p>
      </div>
    </div>
  );
}

export default TestHook;
