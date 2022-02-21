import { createStyles, makeStyles } from "@material-ui/core";


const useBackgroundStyles = makeStyles(() => createStyles({
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${require("./assets/background.jpg")})`,
    backgroundSize: "cover",
  }
}));

export default useBackgroundStyles;