import {instance} from "common/api/instance";
import {FormType} from "features/2-main/ui/myСontacts/MyContacts";

export type SendMessageResponse = {
  message: string;
}
export const apiContacts = {
  async sendMessage({text, tel, name, email}: FormType) {
    try {
      let res = await instance.post<SendMessageResponse>('/sendMessage', {text, tel, name, email});
      return res.data.message;
    } catch (e: any) {
      throw new Error(e.message || e.response.data.message || 'Unexpected error occurred');
    }
  }
}