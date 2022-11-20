import React from "react";
import Checkbox from "./formikCustomControl/CheckBox";
import Datetimepicker from "./formikCustomControl/DatetimePicker";
import Input from "./formikCustomControl/Input";
import Radiobutton from "./formikCustomControl/RadioButton";
import Select from "./formikCustomControl/Select";
import Textarea from "./formikCustomControl/Textarea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest}></Input>;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radiobutton {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "datetime":
      return <Datetimepicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
