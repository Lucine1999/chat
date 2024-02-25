import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { io } from "socket.io-client";
import { setIsMobileVersion, showSnackbar } from "./redux/app/appSlice";
import { checkIsAuth } from "./redux/auth/actions";
import Routes from "./routes";
import Snackbar from "./components/snackbar";
import { documentStyles } from "./components/styles/styles";
import mainTheme from "./components/styles/mainTheme";
import Loader from "./components/loader";
import { BASE_URL } from "./constants/constants";

function App() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.app.snackbar);
  const loading = useSelector((state) => state.app.loading);
  const socket = io(BASE_URL);

  useEffect(() => {
    dispatch(checkIsAuth());
  }, [dispatch]);

  useEffect(() => {
    const handleIsMobileVersion = () =>
      dispatch(
        setIsMobileVersion({
          isMobile: window.innerWidth <= 900,
        }),
      );
    handleIsMobileVersion();
    window.addEventListener("resize", handleIsMobileVersion);
    return () => window.removeEventListener("resize", handleIsMobileVersion);
  }, [dispatch]);

  useEffect(() => {
    socket.on("delivered", (data) => {
      if (data.action === "isDelivered") {
        dispatch(
          showSnackbar({
            snackbarType: "success",
            snackbarMessage: data.message,
            snackbarDelay: 5000,
          }),
        );
      }
    });
  });

  documentStyles();
  return (
    <>
      {!!loading.length && <Loader />}
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={mainTheme}>
          <Routes />
          {(snackbar.type || snackbar.message) && (
            <Snackbar
              type={snackbar.type}
              message={snackbar.message}
              delay={snackbar.delay}
            />
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
