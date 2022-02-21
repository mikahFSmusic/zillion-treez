import { createStyles, makeStyles } from "@material-ui/core";

const useSocialLinkStyles = makeStyles(() => createStyles({
  socialLinksContainer: {
    display: "inline-flex",
    justifyContent: "space-between",
    padding: "20px",
    },
  socialLink: {
    padding: "5px",
    color: "white",  
  },
  icon: {
    width: 60,
    height: 60,
  }
}));

export default useSocialLinkStyles; 