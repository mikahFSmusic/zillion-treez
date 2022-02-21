import { Typography } from '@material-ui/core';
import useTextContentStyles from './styles';

const TextContent = () => {
  const styles = useTextContentStyles();
  return (
    <div className={styles.textContentContainer}>
      <Typography variant="h1">Coming Soon...</Typography>
      <Typography variant="h4" className={styles.h4}>
        You buy an NFT, we plant a tree!
      </Typography>
    </div>
  );
};

export default TextContent;
