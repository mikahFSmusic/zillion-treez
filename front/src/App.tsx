import { Background } from './modules/landingPage/background';
import TextContent from './modules/landingPage/textContent/TextContent';
import SocialLinks from './modules/landingPage/socialLinks/SocialLinks';
import useAppStyles from './styles';

function App() {
  const styles = useAppStyles();
  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <TextContent />
        </div>
        <div className={styles.footer}>
          <div className={styles.socialLinksContainer}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
