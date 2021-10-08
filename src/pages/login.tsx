import { Paper, Typography } from "@mui/material";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import TextInput from "../components/form/TextInput";

const Login: React.VFC = (props: RouteComponentProps) => {
  const formik = useFormik();

  return (
    <>
      <Paper elevation={5} sx={{ padding: "20px 60px 30px" }}>
        <TextInput label="Email" name="email" value={formik.values?.email} />
      </Paper>
    </>
  );
};

export default Login;
