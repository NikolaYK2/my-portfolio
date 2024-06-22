import {instance} from "common/api/instance";
import {FormType} from "features/2-main/ui/myСontacts/MyContacts";
import axios from "axios";

export type SendMessageResponse = {
  message: string;
}
export const apiContacts = {
  async sendMessage({text, tel, name, email}: FormType) {
    try {
      let res = await instance.post<SendMessageResponse>('/sendMessage', {text, tel, name, email});
      return res.data.message;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error?.message || "Some error occurred");
      } else if (error instanceof Error) {
        throw new Error(`Native error: ${error.message}`);
      } else {
        throw new Error(JSON.stringify(error));
      }
    }
  }
}


