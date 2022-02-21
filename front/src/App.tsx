import { Background } from './modules/landingPage/background';
import TextContent from './modules/landingPage/textContent/TextContent';
import useAppStyles from './styles';

function App() {
  const styles = useAppStyles();
  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.text}>
        <TextContent />
      </div>
    </div>
  );
}

export default App;
