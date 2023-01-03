import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as Yup from "yup";

import axios from "axios";
import { toast } from "react-toastify";
import FormikControl from "../../../components/formikCustom/FormikControl.js";

const validationSchema = Yup.object({
  content: Yup.string().required("Please enter content"),
});

const AddNewModal2 = ({ isShow, onOk, onCancel, editField }) => {
  const [emotions, setEmotions] = useState([]);
  const [listSelectEmotion, setListSelectEmotion] = useState([]);
  const [initialValues, setInitialValues] = useState({
    content: "",
  });
  const [listQuestions, setListQuestions] = useState([]);
  const [answerLevel1, setAnswerLevel1] = useState([]);
  const [selectedParentEmotion, setSelectedParentEmotion] = useState();
  const [selectedParentQuestion, setSelectedParentQuestion] = useState();

  const getAllEmotionsAPI = async () => {
    try {
      const result = await axios.post("http://localhost:5000/api/emotion");

      setEmotions(result.data.emotions);
    } catch (error) {
      console.log("error:");
    }
  };

  const getEmotionOfQuestion = async (questionID) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/question/emotion",
        {
          id: questionID,
        }
      );
      setAnswerLevel1(result.data.question.emotions);
    } catch (error) {
      console.log("error:");
    }
  };

  const getAllQuestionAPI = async () => {
    try {
      const result = await axios.post("http://localhost:5000/api/question", {
        content: "",
      });

      if (result.data.questions) {
        let newListQuestions = result.data.questions
          .filter((item) => item.level === 1)
          .map((item) => {
            return {
              key: item._id,
              value: item.content,
            };
          });

        setListQuestions([
          { key: "", value: "Selec question" },
          ...newListQuestions,
        ]);
      }
    } catch (error) {
      console.log("error:");
    }
  };

  useEffect(() => {
    getAllEmotionsAPI();
    getAllQuestionAPI();
  }, []);

  useEffect(() => {
    if (editField) {
      setInitialValues({
        content: editField.content,
      });
      setListSelectEmotion(editField.emotions);
    }
  }, [editField]);

  const handleSubmit = async (values) => {
    const newValues = {
      ...values,
    };
    try {
      if (editField) {
        //handle edit audio
        await axios.post("http://localhost:5000/api/question/update", {
          ...newValues,

          questionId: editField._id,
          emotionIds: listSelectEmotion,
        });
        toast.success("Update question successfully!");
      } else {
        await axios.post("http://localhost:5000/api/question/create-level-2", {
          emotionIds: listSelectEmotion,
          ...newValues,
          parentId: selectedParentQuestion,
          answerParentId: selectedParentEmotion,
        });
        toast.success("Create question successfully!");
      }
      onOk();
    } catch (error) {
      toast.error("Err. Please try again!");
    }
  };

  const handleUpdateListSelectedEmotion = (emotionID) => {
    if (!listSelectEmotion.includes(emotionID)) {
      setListSelectEmotion((pre) => [...pre, emotionID]);
    } else {
      const index = listSelectEmotion.indexOf(emotionID);
      if (index > -1) {
        setListSelectEmotion((pre) => pre.filter((item) => item !== emotionID));
      }
    }
  };

  const handleCloseForm = () => {
    setInitialValues({ content: "" });
    onCancel();
  };

  const handleSelectQuestionLevel1 = (questionID) => {
    setSelectedParentQuestion(questionID);
    getEmotionOfQuestion(questionID);
    setSelectedParentEmotion(undefined);
  };

  return (
    <Modal
      title={
        <div className="text-[20px] flex justify-center font-header">
          {editField ? "Edit Question" : "Add Question level 2"}
        </div>
      }
      className="w-[800px]"
      open={isShow}
      onOk={onOk}
      onCancel={handleCloseForm}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormikControl
            placeholder="Enter question content"
            control="input"
            type="text"
            label="Content"
            name="content"
          />

          <p className="font-bold mb-2">Answers</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {emotions
              .filter((item) => item.level === 2)
              .map((item) => {
                return (
                  <span
                    className={`px-3 py-1 rounded-2xl border border-solid cursor-pointer hover:bg-primary hover:text-white ${
                      listSelectEmotion.findIndex(
                        (element) => element === item._id
                      ) > -1
                        ? "bg-primary text-white"
                        : ""
                    }`}
                    onClick={() => handleUpdateListSelectedEmotion(item._id)}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
          <FormikControl
            control="select"
            label="Parent question"
            name="parentId"
            options={listQuestions}
            onChange={(e) => handleSelectQuestionLevel1(e.target.value)}
          />
          <p className="font-bold mb-2">Answers level 1</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {answerLevel1.length > 0 ? (
              <>
                {" "}
                {answerLevel1.map((item) => {
                  return (
                    <span
                      className={`px-3 py-1 rounded-2xl border border-solid cursor-pointer hover:bg-primary hover:text-white ${
                        selectedParentEmotion === item._id
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => setSelectedParentEmotion(item._id)}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </>
            ) : (
              <p className="ml-5 italic text-[#ff0000]">
                Please choose parent question first
              </p>
            )}
          </div>
          <div className="flex gap-2 items-center justify-end mr-5">
            <span
              className="bg-white border border-solid border-black text-black cursor-pointer rounded select-none px-4 py-2"
              onClick={handleCloseForm}
            >
              Cancel
            </span>
            <button
              type="submit"
              className="bg-primary text-white rounded px-4 py-2"
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddNewModal2;
