import { createStyles, makeStyles, Theme } from "@material-ui/core";


const useBackgroundStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${require("./assets/background.jpg")})`,
    backgroundSize: "cover",
  }
}));

export default useBackgroundStyles;