import {useState} from "react";

type RequestFunction<T, R> = (data: T) => Promise<R>;

export const useFetchSendMessage = <T, R>(api: RequestFunction<T, R>) => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const logic = async (data: T, reset: () => void) => {

      setIsDisabled(true)
      setIsError(false)

      try {
        const res = await api(data)
        setMessage(typeof res === 'string' ? res : JSON.stringify(res))
        reset()
      } catch (e: any) {
        setMessage(e.message || 'Unexpected error occurred')
        setIsError(true)

      } finally {
        setIsDisabled(false)

      }
    }

    return {message, setMessage, isError, isDisabled, logic};
  }
;
