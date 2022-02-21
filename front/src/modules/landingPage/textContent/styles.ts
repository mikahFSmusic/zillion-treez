import { createStyles, makeStyles } from "@material-ui/core";

const useTextContentStyles = makeStyles(() => createStyles({
  textContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
  h4: {
    textAlign: "right",
  }
}));  

export default useTextContentStyles;