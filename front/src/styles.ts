import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
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
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    zIndex: 100, 
    color: "white",
    padding: "20px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },

  socialLinksContainer: {
    justifySelf: "end",
    alignSelf: "end",
    alignItems: "end",
    zIndex: 100,
  },
  footer: { 
    display: "inline-flex",
    zIndex: 100,
    height: "60px",
    width: "100%",  
    justifyContent: "end",
    position: "absolute",
    bottom: 0,
  }
}));
export default useAppStyles;
