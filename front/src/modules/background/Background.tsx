import useBackgroundStyles from "./styles";

const Background = () => {
  const classes = useBackgroundStyles();

  return <div className={classes.root}></div>
}

export default Background;