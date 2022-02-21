import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "left",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.9,
    objectFit: "contain",
  },
  text: {
    zIndex: 100,
    color: "white",
    padding: "20px",
    margin: "10px",
    marginTop: "50px",
  }
}));
export default useAppStyles;
