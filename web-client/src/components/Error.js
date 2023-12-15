import { useRouteError } from "react-router-dom";

function Error() {
  const data = useRouteError();
  return (
    <div className="h-screen flex items-center justify-center my-auto">
      <h1 className="text-xl font-semibold">{data.message}</h1>
    </div>
  );
}
export default Error;
