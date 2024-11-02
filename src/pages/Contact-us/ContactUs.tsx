import { Form, Input } from "@components/forms";
import { Button, TextArea } from "@components/ui";
import useContactus from "@hooks/useContactus";
import style from "./style.module.css";

const { contactus, contactus_info, contactus_form_input } = style;

function ContactUs() {
  const { register, handleSubmit, onSubmitForm, errors } = useContactus();
  console.log(errors)
  return (
    <div className={contactus}>
      <div className={contactus_info}>
        <h3>Contact us</h3>
        <p>If you have any problem or question contact us.</p>
      </div>
      <div className="contact-us_form">
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <div className={contactus_form_input}>
            <Input
              type="text"
              placeHolder="First name"
              name="firstName"
              register={register}
              error={errors?.firstName?.message}
            />
            <Input
              type="text"
              placeHolder="First name"
              name="lastName"
              register={register}
              error={errors?.lastName?.message}

            />
          </div>
          <Input
            type="email"
            placeHolder="example@gmail.com"
            name="email"
            register={register}
            error={errors?.email?.message}
          />
          <TextArea
            name="contentMessage"
            placeholder="Enter your message"
            register={register}
            error={errors?.contentMessage?.message}
          />
          <Button
            type="submit"
            style={{
              backgroundColor: "orangered",
              padding: "10px 22px",
              marginTop: "14px",
              color: "white",
              borderRadius: "6px",
            }}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;
