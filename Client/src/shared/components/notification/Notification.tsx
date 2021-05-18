
import React from 'react'
import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app-state';

interface NotificationProps {
}


export function Notification({ }: NotificationProps) {
   const messageNotification = useSelector((state: AppState) => state.appState.message);
   const isError = useSelector((state: AppState) => state.appState.status) === "error";

   const showError = () => {
      notification.error({
         message: messageNotification
      })
   }

   if (isError) {
      showError()
   }


   const isSuccess = useSelector((state: AppState) => state.appState.status) === "success";

   const showSuccess = () => {
      notification.success({
         message: messageNotification
      })
   }

   if (isSuccess) {
      showSuccess()
   }



   return (
      <></>
   )
}


