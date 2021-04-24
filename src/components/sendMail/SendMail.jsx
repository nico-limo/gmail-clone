import React from "react";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
//CSS
import "./SendMail.css";
//Hook Form
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../redux/reducers/mailSlice";
import { db } from "../../fbConfig";
import firebase from "firebase"
const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch(closeSendMessage);

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>Nuevo Mensaje</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="Para"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">Debe indicar destinatario</p>
        )}
        <input
          name="subject"
          placeholder="Asunto"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Debe indicar el asunto</p>
        )}
        <input
          name="message"
          className="sendMail_message"
          placeholder="Mensaje"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Debe indicar un mensaje</p>
        )}
        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail__send"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
