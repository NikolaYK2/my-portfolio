import React from 'react';
import s from './MyContacts.module.scss';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Button} from "common/components/button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const phoneValidation = /^(?:\+?\d{1,3})?(?:[-\s()]|\d){10,}$/;
const messageSchema = z.object({
  name: z.string().trim().min(3, {message: 'name должен быть min 3 to max 10 litters'}).max(10),
  email: z.string().trim().email({message: 'Invalid email address'}),
  tel: z.string().regex(phoneValidation, {message: 'Invalid phone number'}).optional().or(z.literal('')),
  message: z.string().trim().max(500, 'max message 500 litters')
})

type NameType = "name" | "tel" | "email" | "message"
type InputType = {
  name: NameType;
  type: string;
  placeholder: string;
}
type FormType = z.infer<typeof messageSchema>
type MyContactsType = {
  id: string
}
export const MyContacts = (props: MyContactsType) => {
  const input: InputType[] = [
    {name: 'name', type: 'text', placeholder: 'Full name',},
    {name: 'tel', type: 'tel', placeholder: 'Phone number',},
    {name: 'email', type: 'email', placeholder: 'E-mail',},
  ]

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors,}
  } = useForm<FormType>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      message: ''
    }
  })

  const onSubmit: SubmitHandler<FormType> = data => {
    console.log(data)
  }

  return (
    <section id={props.id} className={s.contact}>
      <div className={s.container}>
        <TitleH2 title={'Contacts'}/>
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
              <textarea {...register("message")} placeholder='You message'></textarea>
            </div>
          </div>
          <Button title={'send'}/>
        </form>
      </div>
    </section>
  );
};

