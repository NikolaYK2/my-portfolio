import React, {useState} from 'react';
import s from './MyContacts.module.scss';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Button} from "common/components/button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {apiContacts} from "features/2-main/api/myContacts/apiContacts";
import {Snackbar} from "common/components/snackbar/Snackbar";

const phoneValidation = /^(?:\+?\d{1,3})?(?:[-\s()]|\d){10,}$/;
const messageSchema = z.object({
  name: z.string().trim().min(3, {message: 'name должен быть min 3 to max 10 litters'}).max(10),
  email: z.string().trim().email({message: 'Invalid email address'}),
  tel: z.string().regex(phoneValidation, {message: 'Invalid phone number'}).optional().or(z.literal('')),
  text: z.string().trim().max(500, 'max message 500 litters')
})

type NameType = "name" | "tel" | "email" | "text"
type InputType = {
  name: NameType;
  type: string;
  placeholder: string;
}
export type FormType = z.infer<typeof messageSchema>
type MyContactsType = {
  id: string
}
export const MyContacts = (props: MyContactsType) => {
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const input: InputType[] = [
    {name: 'name', type: 'text', placeholder: 'Full name',},
    {name: 'tel', type: 'tel', placeholder: 'Phone number',},
    {name: 'email', type: 'email', placeholder: 'E-mail',},
  ]

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors,}
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
    setIsDisabled(true)

    try {
      const res = await apiContacts.sendMessage(data)
      setMessage(res)
      reset()
    } catch (e) {

    } finally {
      setIsDisabled(false)
    }
  }


  return (
    <section id={props.id} className={s.contact}>
      <div className={s.container}>
        <TitleH2 title={'Contacts'}/>
        <Snackbar message={message} setMessage={setMessage}/>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.formMod}>
            <div className={s.formInput}>
              {input.map(input => <label
                  key={input.name}
                  id={input.name}
                  className={`
                  ${s.labelInput}
                  ${errors[input.name] && s.errorInput}
                  ${watch()[input.name] && s.activeInput}
                  `}>

                  <input
                    id={input.name}
                    type={input.type}
                    placeholder={errors[input.name]?.message || input.placeholder}
                    {...register(input.name)}
                    autoComplete={input.name}
                  />

                </label>
              )}
            </div>
            <div className={s.formTextarea}>
              <textarea {...register("text")} placeholder='You message'></textarea>
            </div>
          </div>
          <Button title={'send'} disabled={isDisabled}/>
        </form>
      </div>
    </section>
  );
};

