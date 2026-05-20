import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./routes/AppRoutes";

import ToastProvider from "./components/notifications/ToastProvider";

import {
ThemeProvider
} from "./context/ThemeContext";

import {
NotificationProvider
} from "./context/NotificationContext";

import {
DashboardProvider
} from "./context/DashboardContext";

const queryClient=
new QueryClient({

defaultOptions:{

queries:{

refetchOnWindowFocus:false,

retry:1,

staleTime:1000*60*5

}

}

});

export default function App(){

return(

<QueryClientProvider
client={queryClient}
>

<ThemeProvider>

<NotificationProvider>

<DashboardProvider>

<ToastProvider/>

<AppRoutes/>

</DashboardProvider>

</NotificationProvider>

</ThemeProvider>

</QueryClientProvider>

);

}