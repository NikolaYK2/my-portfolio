import React from 'react';
import s from './MyContacts.module.scss';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Button} from "common/components/button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {apiContacts} from "features/2-main/api/myContacts/apiContacts";
import {Snackbar} from "common/components/snackbar/Snackbar";
import {useFetchSendMessage} from "../../lib/useFetchSendMessage";
import {useWaypoint} from "common/hooks/useWaypoint";
import {Waypoint} from "react-waypoint";
import {domAnimation, LazyMotion, m} from 'framer-motion';
import {Loading} from "common/components/loading/Loading";
import {MyContactsAnimation} from "features/2-main/ui/myСontacts/MyContactsAnimation";

const phoneValidation = /^(?:\+?\d{1,3})?(?:[-\s()]|\d){10,}$/;
const messageSchema = z.object({
  name: z.string().trim().min(3, {message: 'min 3 letters'}),
  email: z.string().trim().email({message: 'Invalid email address'}),
  tel: z.string().regex(phoneValidation, {message: 'Invalid phone number'}).optional().or(z.literal('')),
  text: z.string().trim().min(1).max(3000, 'max message 500 litters')
})

type NameType = "name" | "tel" | "email" | "text"
type InputType = {
  name: NameType;
  type: string;
  placeholder: string;
}
export type FormType = z.infer<typeof messageSchema>

const input: InputType[] = [
  {name: 'name', type: 'text', placeholder: 'Full name',},
  {name: 'tel', type: 'tel', placeholder: 'Phone number',},
  {name: 'email', type: 'email', placeholder: 'E-mail',},
]

type MyContactsType = {
  id: string
}
export const MyContacts = (props: MyContactsType) => {
  const {visible, waypointHandlerEnter} = useWaypoint()

  const {
    logic,
    isError,
    message,
    setMessage,
    isDisabled
  } = useFetchSendMessage<FormType, string>(apiContacts.sendMessage)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors, touchedFields}
  } = useForm<FormType>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      text: ''
    }
  })

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    await logic(data, reset);
  }

  return (
    <section id={props.id} className={s.contact}>
      {isDisabled && <Loading name={'message'}/>}

      {message && <Snackbar message={message} isError={isError} setMessage={setMessage}/>}
      <div className={s.container}>
        <TitleH2 title={'Contacts'}/>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.formMod}>
            <LazyMotion features={domAnimation}>
              <m.div className={s.formInput}
                     variants={MyContactsAnimation.containerInput}
                     initial="hidden"
                     animate={visible ? "visible" : 'hidden'}>

                {input.map(input => <m.label
                    key={input.name}
                    id={input.name}

                    className={`
                  ${s.labelInput}
                  ${errors[input.name] && s.errorInput}
                  ${watch()[input.name] && s.activeInput}
                  `}
                    variants={MyContactsAnimation.inputItem}
                  >

                    <input
                      id={input.name}
                      type={input.type}
                      placeholder={errors[input.name] ? 'field cannot be empty' : input.placeholder}
                      {...register(input.name)}
                      autoComplete={input.name}
                    />
                    <span className={s.errorSpan}>
                      {touchedFields[input.name] && errors[input.name]?.message}
                    </span>
                  </m.label>
                )}
              </m.div>
            </LazyMotion>
            <LazyMotion features={domAnimation}>
              <m.div className={`
              ${s.formTextarea} 
              ${watch().text && s.textareaActive}
              ${errors.text && s.errorInput}
              `}
                     variants={MyContactsAnimation.textareaItem}
                     initial="hidden"
                     animate={visible ? "visible" : 'hidden'}
              >
                <textarea
                  {...register("text")}
                  placeholder={errors.text ? 'field cannot be empty' : 'You message'}

                />

              </m.div>
            </LazyMotion>

          </div>
          <LazyMotion features={domAnimation}>
            <Button
              disabled={isDisabled}
              variantsAnimation={MyContactsAnimation.button}
              visible={visible}
            >
              Send
            </Button>
          </LazyMotion>
        </form>
      </div>
      <Waypoint onEnter={waypointHandlerEnter}/>
    </section>
  );
};

