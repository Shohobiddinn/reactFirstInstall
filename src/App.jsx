import { Dashboard } from "./Dashboard";


export const App = () => {
const data = {
    username :"Ali",
    password:Number(123)
}
    return (
        <>
            <Dashboard title={data} ></Dashboard>
        </>);
}