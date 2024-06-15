import {instance} from "common/api/instance";
import {FormType} from "features/2-main/ui/myСontacts/MyContacts";

type SendMessageType = {
  message: string;
}
export const apiContacts = {
  async sendMessage({text, tel, name, email}: FormType) {
    try {
      let res = await instance.post<SendMessageType>('/sendMessage', {text, tel, name, email});
      return res.data.message;
    } catch (e: any) {
      return e.data.message
    }
  }
}