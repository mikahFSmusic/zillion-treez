import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@material-ui/core';
import useSocialLinkStyles from './styles';

const SocialLinks = () => {
  const styles = useSocialLinkStyles();
  return (
    <div className={styles.socialLinksContainer}>
      <Link
        href="https://twitter.com/zilliontreez"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <TwitterIcon className={styles.icon} fontSize="large" />
      </Link>
      <Link
        href="https://www.instagram.com/zilliontreez/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <InstagramIcon className={styles.icon} fontSize="large" />
      </Link>
    </div>
  );
};

export default SocialLinks;
